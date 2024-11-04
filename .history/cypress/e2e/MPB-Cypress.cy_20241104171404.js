
describe('/karrier', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrier';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/papirmentesseg', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/papirmentesseg';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/lejart-nyeremenyjatekok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/lejart-nyeremenyjatekok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyfelelegedettseg-nyeremenyjatek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyfelelegedettseg-nyeremenyjatek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-q4', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-q4';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/nyugdijbiztositasi-kampány', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/nyugdijbiztositasi-kampány';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/biztositaskotes/utasbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/biztositaskotes/utasbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/biztositaskotes/kotelezo_biztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/biztositaskotes/kotelezo_biztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/biztositaskotes/otthonbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrendezes/karbejelentes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrendezes/karstatusz_lekerdezes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrendezes/karstatusz_lekerdezes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/vallalatunk', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/vallalatunk';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/alapadatok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/alapadatok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/munkatarsak', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/munkatarsak';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eves-jelentesek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eves-jelentesek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/felugyeleti-szervek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/felugyeleti-szervek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/kozerdeku-adatok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/kozerdeku-adatok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/utasbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/utasbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/gepjarmu-biztositasok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/lakasbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/lakasbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/dijak/atsorolt_dijak', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/dijak/atsorolt_dijak';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/dbhcsoportosbiztositasok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eon-biztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eon-biztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/elerhetosegek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/elerhetosegek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/uzenetkuldes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/uzenetkuldes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/panaszkezeles', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/panaszkezeles';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/penzugyi-navigator', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/ugyfelazonositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/nyeremenyjatekok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/nyeremenyjatekok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/dijfizetessel-kapcsolatos-informaciok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/dijfizetessel-kapcsolatos-informaciok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/portal_szerzodeseim', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/portal_szerzodeseim';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/profilom', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/profilom';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrendezes/karbejelentes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/portal_szerzodeseim', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/portal_szerzodeseim';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/elerhetosegek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/elerhetosegek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/alapadatok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/alapadatok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/dijfizetes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/dijfizetes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/vallalatunk', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/vallalatunk';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/panaszkezeles', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/panaszkezeles';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/biztositaskotes/utasbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/biztositaskotes/utasbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/biztositaskotes/kotelezo_biztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/biztositaskotes/kotelezo_biztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/biztositaskotes/otthonbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrendezes/karbejelentes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrendezes/karstatusz_lekerdezes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrendezes/karstatusz_lekerdezes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/dijak/atsorolt_dijak', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/dijak/atsorolt_dijak';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/uzenetkuldes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/uzenetkuldes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/portal_szerzodeseim', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/portal_szerzodeseim';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/profilom', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/profilom';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrendezes/karbejelentes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/gepjarmu-biztositasok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/gepjarmu-biztositasok/autoor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok/autoor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/utasbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/utasbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/utasbiztositas/utasor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/utasbiztositas/utasor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/utasbiztositas/utasorbelfold', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/utasbiztositas/utasorbelfold';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/utasbiztositas/utasorhosszutav', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/utasbiztositas/utasorhosszutav';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/lakasbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/lakasbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/lakasbiztositas/postaedesotthon', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/lakasbiztositas/postaedesotthon';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/lakasbiztositas/tobblakasos', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/lakasbiztositas/tobblakasos';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/lakasbiztositas/biztosotthon', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/lakasbiztositas/biztosotthon';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/lakasbiztositas/postaotthon24', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/lakasbiztositas/postaotthon24';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postahozamfix', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postahozamfix';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postanyugdijpremium', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postanyugdijpremium';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postahozamor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postahozamor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postahaszonor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postahaszonor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postanyugdijaranytartalek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postanyugdijaranytartalek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postaszemunkfenye', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postaszemunkfenye';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postamozaikmegtakaritas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postamozaikmegtakaritas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postaeletor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postaeletor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postaorokhagyo', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postaorokhagyo';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postahaszonor2x0', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postahaszonor2x0';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postatrend', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postatrend';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eletbiztositasok/postatrendnyugdij', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eletbiztositasok/postatrendnyugdij';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/mentoov', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/mentoov';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/feszekor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/feszekor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/vemoco', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/vemoco';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/takarekoskonyv', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/takarekoskonyv';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/horgasz', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/horgasz';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahorizont', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahorizont';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahitelor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahitelor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/cascolight', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/cascolight';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postapenzhalmozo', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postapenzhalmozo';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahozamor-plusz', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahozamor-plusz';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/ertekor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/ertekor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postatestor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postatestor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postanyugdijprogram', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postanyugdijprogram';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahozamhalmozo', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahozamhalmozo';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postaeletutprogram', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postaeletutprogram';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postagyogyir', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postagyogyir';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahitelor-20', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahitelor-20';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/postafeszekor', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postafeszekor';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/nem-ertekesitett-termekek/casco', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/casco';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/takarek-ideal-hitelbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-ideal-hitelbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/takarek-konto-hitelbiztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-konto-hitelbiztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/kekszed', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/kekszed';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/kekszed-ultra', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/kekszed-ultra';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/lbh', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/lbh';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/tbbé', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/tbbé';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/TEB', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/TEB';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/takarek-biztositas/tkszmb', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/takarek-biztositas/tkszmb';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/dbhcsoportosbiztositasok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/dbhcsoportosbiztositasok/dbhelp', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok/dbhelp';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/dbhcsoportosbiztositasok/dbhalo', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok/dbhalo';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eon-biztositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eon-biztositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/termekek/eon-biztositas/utvonal', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/termekek/eon-biztositas/utvonal';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/corvinus-adas-vetel', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/corvinus-adas-vetel';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/jovotervezo-tavaszi-nyertesek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/jovotervezo-tavaszi-nyertesek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kozlemeny', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kozlemeny';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kezikonyv', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kezikonyv';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/izraelbe-utazok-figyelmebe', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/izraelbe-utazok-figyelmebe';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/telen-is-biztonsagban', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/telen-is-biztonsagban';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/csekknemelerheto', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/csekknemelerheto';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/lakasbiztositasi_akcio', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/lakasbiztositasi_akcio';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/2023_Q4_jovotervezo_nyertesei', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/2023_Q4_jovotervezo_nyertesei';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/ugyfelelegedettsegsorsolas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/ugyfelelegedettsegsorsolas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek-q2', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek-q2';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/Iranba-utazok-figyelmebe', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/Iranba-utazok-figyelmebe';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/utasbiztositas-telinyereményjatek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/utasbiztositas-telinyereményjatek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/mindenre-van-egy-jo-megoldasunk', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/mindenre-van-egy-jo-megoldasunk';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/biztonsagos-nyaralast-kivanunk', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/biztonsagos-nyaralast-kivanunk';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/boruban-is-derusen', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/boruban-is-derusen';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek-q3-2024', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek-q3-2024';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/atadtuk-a-10-millio-forintos-nyeremenyt-', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/atadtuk-a-10-millio-forintos-nyeremenyt-';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/tranzakcio-2024', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/tranzakcio-2024';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/a-biztonsag-kenyelme', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/a-biztonsag-kenyelme';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hirek/nyugdijbiztositasi-akcio-', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hirek/nyugdijbiztositasi-akcio-';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/kozerdeku-adatok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/kozerdeku-adatok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/felugyeleti-szervek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/felugyeleti-szervek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/eves-jelentesek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/eves-jelentesek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/munkatarsak', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/munkatarsak';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/alapadatok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/alapadatok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-69-2020', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-69-2020';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-15-2020', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-15-2020';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-84-2017', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-84-2017';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-29-2017', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-29-2017';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-49-2016', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-49-2016';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-30/2024', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-30/2024';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/vallalatunk', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/vallalatunk';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/papirmentesseg', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/papirmentesseg';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/mpb/cookie-tajekoztato', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/mpb/cookie-tajekoztato';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/adatkezeles', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/adatkezeles';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrier', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrier';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/elerhetosegek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/elerhetosegek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/penzugyi-navigator', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/ugyfelazonositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/nyeremenyjatekok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/nyeremenyjatekok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/dijfizetessel-kapcsolatos-informaciok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/dijfizetessel-kapcsolatos-informaciok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/kulfoldi-dijfizetes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/kulfoldi-dijfizetes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/honlap-kezelese-soran-okozott-kar', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/honlap-kezelese-soran-okozott-kar';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/panaszkezeles', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/panaszkezeles';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/marketing', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/marketing';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-II', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-II';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/nyero-nyar', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/nyero-nyar';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/tanulok-dolgozok-utasbiztositasa', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/tanulok-dolgozok-utasbiztositasa';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/lejart-nyeremenyjatekok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/lejart-nyeremenyjatekok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-q4', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-q4';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/aktualis-akciok/nyugdijbiztositasi-kampány', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/aktualis-akciok/nyugdijbiztositasi-kampány';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/biztositaskotes/otthonbiztositas/tanacsado', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas/tanacsado';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/elerhetosegek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/elerhetosegek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/alapadatok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/alapadatok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/dijfizetes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/dijfizetes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/vallalatunk', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/vallalatunk';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/akadalymentes/panaszkezeles', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/akadalymentes/panaszkezeles';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/panaszkezeles/panaszbejelentes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/panaszkezeles/panaszbejelentes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rest-api-frissitesek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rest-api-frissitesek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok_indulas/hozamfix2024julius', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok_indulas/hozamfix2024julius';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/base', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/base';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/bonus', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/bonus';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2018januarhozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2018januarhozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2018majushozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2018majushozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2018marciusrhozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2018marciusrhozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2021novemberhozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2021novemberhozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2022juniushozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniushozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2022juniusIIhozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniusIIhozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2022juniusIIIhozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniusIIIhozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2022szeptemberhozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2022szeptemberhozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/profit', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/profit';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/tokevedetteszkozalap', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/tokevedetteszkozalap';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2023szeptemberhozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2023szeptemberhozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/penzpiacieszkozalap', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/penzpiacieszkozalap';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/ingatlaneszkozalap', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/ingatlaneszkozalap';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/globalisvegyes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/globalisvegyes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/eszkozalapok/hozamfix2024juliushozamvedett', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/eszkozalapok/hozamfix2024juliushozamvedett';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/vallalatunk', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/vallalatunk';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/alapadatok', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/alapadatok';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/munkatarsak', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/munkatarsak';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/eves-jelentesek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/eves-jelentesek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/felugyeleti-szervek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/felugyeleti-szervek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrier', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrier';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/elerhetosegek', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/elerhetosegek';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/uzenetkuldes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/uzenetkuldes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/panaszkezeles', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/panaszkezeles';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/penzugyi-navigator', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/ugyintezes/ugyfelazonositas', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/karrendezes/karbejelentes', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/karrendezes/karbejelentes';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/hello.hu', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/hello.hu';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/posta.hu', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/posta.hu';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/adatkezeles', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/adatkezeles';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/mpb/cookie-tajekoztato', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/mpb/cookie-tajekoztato';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/sitemap', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/sitemap';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/panaszkezeles', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/panaszkezeles';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});

describe('/honlap-kezelese-soran-okozott-kar', () => {
  it('Check 404', () => {
    const url = 'https://postabiztosito.hu/honlap-kezelese-soran-okozott-kar';

    cy.visit(url);

    cy.get('p')
      .contains('Úgy tűnik porszem került a gépezetbe.')
      .should('not.exist');
  });
});