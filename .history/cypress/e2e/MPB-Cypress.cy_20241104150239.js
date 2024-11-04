
describe('/karrier', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/papirmentesseg', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/papirmentesseg';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/lejart-nyeremenyjatekok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/lejart-nyeremenyjatekok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyfelelegedettseg-nyeremenyjatek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyfelelegedettseg-nyeremenyjatek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-q4', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-q4';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/nyugdijbiztositasi-kampány', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/nyugdijbiztositasi-kampány';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/biztositaskotes/utasbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/biztositaskotes/utasbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/biztositaskotes/kotelezo_biztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/biztositaskotes/kotelezo_biztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/biztositaskotes/otthonbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrendezes/karbejelentes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrendezes/karstatusz_lekerdezes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrendezes/karstatusz_lekerdezes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/vallalatunk', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/vallalatunk';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/alapadatok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/alapadatok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/munkatarsak', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/munkatarsak';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eves-jelentesek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eves-jelentesek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/felugyeleti-szervek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/felugyeleti-szervek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/kozerdeku-adatok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/kozerdeku-adatok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/utasbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/utasbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/gepjarmu-biztositasok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/lakasbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/lakasbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/dijak/atsorolt_dijak', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/dijak/atsorolt_dijak';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/dbhcsoportosbiztositasok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eon-biztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eon-biztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/elerhetosegek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/elerhetosegek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/uzenetkuldes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/uzenetkuldes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/panaszkezeles', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/panaszkezeles';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/penzugyi-navigator', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/ugyfelazonositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/nyeremenyjatekok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/nyeremenyjatekok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/dijfizetessel-kapcsolatos-informaciok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/dijfizetessel-kapcsolatos-informaciok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/portal_szerzodeseim', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/portal_szerzodeseim';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/profilom', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/profilom';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrendezes/karbejelentes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/portal_szerzodeseim', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/portal_szerzodeseim';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/elerhetosegek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/elerhetosegek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/alapadatok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/alapadatok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/dijfizetes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/dijfizetes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/vallalatunk', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/vallalatunk';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/panaszkezeles', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/panaszkezeles';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/biztositaskotes/utasbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/biztositaskotes/utasbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/biztositaskotes/kotelezo_biztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/biztositaskotes/kotelezo_biztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/biztositaskotes/otthonbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrendezes/karbejelentes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrendezes/karstatusz_lekerdezes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrendezes/karstatusz_lekerdezes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/dijak/atsorolt_dijak', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/dijak/atsorolt_dijak';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/uzenetkuldes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/uzenetkuldes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/portal_szerzodeseim', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/portal_szerzodeseim';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/profilom', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/profilom';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrendezes/karbejelentes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/gepjarmu-biztositasok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/gepjarmu-biztositasok/autoor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok/autoor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/utasbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/utasbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/utasbiztositas/utasor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/utasbiztositas/utasor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/utasbiztositas/utasorbelfold', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/utasbiztositas/utasorbelfold';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/utasbiztositas/utasorhosszutav', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/utasbiztositas/utasorhosszutav';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/lakasbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/lakasbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/lakasbiztositas/postaedesotthon', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/lakasbiztositas/postaedesotthon';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/lakasbiztositas/tobblakasos', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/lakasbiztositas/tobblakasos';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/lakasbiztositas/biztosotthon', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/lakasbiztositas/biztosotthon';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/lakasbiztositas/postaotthon24', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/lakasbiztositas/postaotthon24';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postahozamfix', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postahozamfix';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postanyugdijpremium', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postanyugdijpremium';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postahozamor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postahozamor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postahaszonor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postahaszonor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postanyugdijaranytartalek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postanyugdijaranytartalek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postaszemunkfenye', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postaszemunkfenye';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postamozaikmegtakaritas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postamozaikmegtakaritas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postaeletor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postaeletor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postaorokhagyo', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postaorokhagyo';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postahaszonor2x0', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postahaszonor2x0';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postatrend', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postatrend';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eletbiztositasok/postatrendnyugdij', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eletbiztositasok/postatrendnyugdij';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/mentoov', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/mentoov';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/feszekor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/feszekor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/vemoco', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/vemoco';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/takarekoskonyv', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/takarekoskonyv';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/horgasz', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/horgasz';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahorizont', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahorizont';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahitelor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahitelor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/cascolight', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/cascolight';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postapenzhalmozo', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postapenzhalmozo';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahozamor-plusz', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahozamor-plusz';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/ertekor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/ertekor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postatestor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postatestor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postanyugdijprogram', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postanyugdijprogram';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahozamhalmozo', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahozamhalmozo';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postaeletutprogram', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postaeletutprogram';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postagyogyir', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postagyogyir';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahitelor-20', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahitelor-20';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postafeszekor', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postafeszekor';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/casco', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/casco';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/takarek-ideal-hitelbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-ideal-hitelbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/takarek-konto-hitelbiztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-konto-hitelbiztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/kekszed', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/kekszed';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/kekszed-ultra', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/kekszed-ultra';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/lbh', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/lbh';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/tbbé', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/tbbé';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/TEB', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/TEB';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/takarek-biztositas/tkszmb', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/takarek-biztositas/tkszmb';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/dbhcsoportosbiztositasok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/dbhcsoportosbiztositasok/dbhelp', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok/dbhelp';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/dbhcsoportosbiztositasok/dbhalo', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok/dbhalo';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eon-biztositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eon-biztositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/termekek/eon-biztositas/utvonal', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/termekek/eon-biztositas/utvonal';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/corvinus-adas-vetel', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/corvinus-adas-vetel';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/jovotervezo-tavaszi-nyertesek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/jovotervezo-tavaszi-nyertesek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kozlemeny', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kozlemeny';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kezikonyv', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kezikonyv';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/izraelbe-utazok-figyelmebe', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/izraelbe-utazok-figyelmebe';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/telen-is-biztonsagban', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/telen-is-biztonsagban';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/csekknemelerheto', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/csekknemelerheto';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/lakasbiztositasi_akcio', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/lakasbiztositasi_akcio';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/2023_Q4_jovotervezo_nyertesei', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/2023_Q4_jovotervezo_nyertesei';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/ugyfelelegedettsegsorsolas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/ugyfelelegedettsegsorsolas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek-q2', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek-q2';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/Iranba-utazok-figyelmebe', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/Iranba-utazok-figyelmebe';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/utasbiztositas-telinyereményjatek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/utasbiztositas-telinyereményjatek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/mindenre-van-egy-jo-megoldasunk', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/mindenre-van-egy-jo-megoldasunk';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/biztonsagos-nyaralast-kivanunk', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/biztonsagos-nyaralast-kivanunk';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/boruban-is-derusen', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/boruban-is-derusen';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek-q3-2024', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek-q3-2024';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/atadtuk-a-10-millio-forintos-nyeremenyt-', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/atadtuk-a-10-millio-forintos-nyeremenyt-';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/tranzakcio-2024', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/tranzakcio-2024';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/a-biztonsag-kenyelme', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/a-biztonsag-kenyelme';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hirek/nyugdijbiztositasi-akcio-', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hirek/nyugdijbiztositasi-akcio-';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/kozerdeku-adatok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/kozerdeku-adatok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/felugyeleti-szervek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/felugyeleti-szervek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/eves-jelentesek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/eves-jelentesek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/munkatarsak', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/munkatarsak';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/alapadatok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/alapadatok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-69-2020', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-69-2020';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-15-2020', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-15-2020';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-84-2017', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-84-2017';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-29-2017', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-29-2017';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-49-2016', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-49-2016';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-30/2024', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-30/2024';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/vallalatunk', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/vallalatunk';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/papirmentesseg', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/papirmentesseg';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/mpb/cookie-tajekoztato', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/mpb/cookie-tajekoztato';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/adatkezeles', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/adatkezeles';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrier', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/elerhetosegek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/elerhetosegek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/penzugyi-navigator', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/ugyfelazonositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/nyeremenyjatekok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/nyeremenyjatekok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/dijfizetessel-kapcsolatos-informaciok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/dijfizetessel-kapcsolatos-informaciok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/kulfoldi-dijfizetes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/kulfoldi-dijfizetes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/honlap-kezelese-soran-okozott-kar', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/honlap-kezelese-soran-okozott-kar';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/panaszkezeles', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/panaszkezeles';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/marketing', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/marketing';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-II', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-II';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/nyero-nyar', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/nyero-nyar';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/tanulok-dolgozok-utasbiztositasa', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/tanulok-dolgozok-utasbiztositasa';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/lejart-nyeremenyjatekok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/lejart-nyeremenyjatekok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-q4', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-q4';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/aktualis-akciok/nyugdijbiztositasi-kampány', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/aktualis-akciok/nyugdijbiztositasi-kampány';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/biztositaskotes/otthonbiztositas/tanacsado', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas/tanacsado';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/elerhetosegek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/elerhetosegek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/alapadatok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/alapadatok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/dijfizetes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/dijfizetes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/vallalatunk', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/vallalatunk';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/akadalymentes/panaszkezeles', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/akadalymentes/panaszkezeles';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/panaszkezeles/panaszbejelentes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/panaszkezeles/panaszbejelentes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rest-api-frissitesek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rest-api-frissitesek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok_indulas/hozamfix2024julius', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok_indulas/hozamfix2024julius';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/base', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/base';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/bonus', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/bonus';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2018januarhozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2018januarhozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2018majushozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2018majushozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2018marciusrhozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2018marciusrhozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2021novemberhozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2021novemberhozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2022juniushozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniushozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2022juniusIIhozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniusIIhozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2022juniusIIIhozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniusIIIhozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2022szeptemberhozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2022szeptemberhozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/profit', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/profit';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/tokevedetteszkozalap', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/tokevedetteszkozalap';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2023szeptemberhozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2023szeptemberhozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/penzpiacieszkozalap', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/penzpiacieszkozalap';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/ingatlaneszkozalap', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/ingatlaneszkozalap';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/globalisvegyes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/globalisvegyes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/eszkozalapok/hozamfix2024juliushozamvedett', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/eszkozalapok/hozamfix2024juliushozamvedett';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/vallalatunk', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/vallalatunk';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/alapadatok', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/alapadatok';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/munkatarsak', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/munkatarsak';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/eves-jelentesek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/eves-jelentesek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/felugyeleti-szervek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/felugyeleti-szervek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrier', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrier';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/elerhetosegek', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/elerhetosegek';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/uzenetkuldes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/uzenetkuldes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/panaszkezeles', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/panaszkezeles';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/penzugyi-navigator', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/ugyintezes/ugyfelazonositas', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/karrendezes/karbejelentes', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/hello.hu', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/hello.hu';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/posta.hu', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/posta.hu';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/adatkezeles', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/adatkezeles';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/mpb/cookie-tajekoztato', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/mpb/cookie-tajekoztato';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/sitemap', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/sitemap';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/panaszkezeles', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/panaszkezeles';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});

describe('/honlap-kezelese-soran-okozott-kar', () => { 
  it('passes', () => {
    const fullPath = 'https://postabiztosito.hu/honlap-kezelese-soran-okozott-kar';

    // Ellenőrizzük a státuszkódot, és csak akkor folytatjuk a látogatást, ha 200-as a válasz
    cy.request({ url: fullPath, failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(200);
      cy.visit(fullPath);
    });
  });
});