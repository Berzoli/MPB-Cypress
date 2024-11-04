const fs = require('fs');
const path = require('path');

// Olvassuk be a sitemap.txt tartalmát
const sitemapFilePath = path.join(__dirname, 'sitemap.txt');
const outputFilePath = path.join(__dirname, 'generatedTests.js');

fs.readFile(sitemapFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Hiba a fájl beolvasásakor:', err);
    return;
  }

  // Minden sor egy-egy útvonalat tartalmaz, tehát spliteljük új sor alapján
  const paths = data.split('\n').filter(line => line.trim() !== '');

  // Generáljuk le a tesztkódot
  let testCode = paths.map(path => `
    describe('${path.trim()}', () => {
        it("should check for error message in div and API response", () => {
          const fullPath = "https://postabiztosito.hu${path.trim()}";
      
          cy.intercept(
            "GET",
            "/cms/umbraco/customer/components/v1/generic-page?path=${path.substr(1).trim()}"
          ).as("getGenericPage");
      
          cy.visit(fullPath);
      
          cy.wait("@getGenericPage").then((interception) => {
            expect(interception.response.statusCode).not.to.eq(404);
          });
        });
      });`).join('\n');

    

  // Írjuk ki az eredményt a generatedTests.js fájlba
  fs.writeFile(outputFilePath, testCode, 'utf8', (err) => {
    if (err) {
      console.error('Hiba a fájl írásakor:', err);
    } else {
      console.log('A tesztek sikeresen generálva a következő fájlba: generatedTests.js');
    }
  });
});