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
  let testCode = paths.map(path => `describe('${path}', () => { it('passes', () => {cy.visit('https://postabiztosito.hu${path}') });});`).join('\n');

  // Írjuk ki az eredményt a generatedTests.js fájlba
  fs.writeFile(outputFilePath, testCode, 'utf8', (err) => {
    if (err) {
      console.error('Hiba a fájl írásakor:', err);
    } else {
      console.log('A tesztek sikeresen generálva a következő fájlba: generatedTests.js');
    }
  });
});