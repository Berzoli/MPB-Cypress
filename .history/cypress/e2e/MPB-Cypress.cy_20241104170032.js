
describe('/karrier', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrier";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrier"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/fenntarthatosagi-politika";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/fenntarthatosagi-politika"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/papirmentesseg', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/papirmentesseg";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/papirmentesseg"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/lejart-nyeremenyjatekok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/lejart-nyeremenyjatekok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=lejart-nyeremenyjatekok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyfelelegedettseg-nyeremenyjatek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyfelelegedettseg-nyeremenyjatek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyfelelegedettseg-nyeremenyjatek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-q4', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-q4";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/jovotervezo-nyeremenyjatek-q4"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/nyugdijbiztositasi-kampány', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/nyugdijbiztositasi-kampány";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=nyugdijbiztositasi-kampány"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/biztositaskotes/utasbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/biztositaskotes/utasbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=biztositaskotes/utasbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/biztositaskotes/kotelezo_biztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/biztositaskotes/kotelezo_biztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=biztositaskotes/kotelezo_biztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/biztositaskotes/otthonbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/biztositaskotes/otthonbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=biztositaskotes/otthonbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrendezes/karbejelentes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrendezes/karbejelentes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrendezes/karbejelentes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrendezes/karstatusz_lekerdezes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrendezes/karstatusz_lekerdezes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrendezes/karstatusz_lekerdezes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/vallalatunk', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/vallalatunk";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/vallalatunk"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/alapadatok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/alapadatok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/alapadatok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/munkatarsak', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/munkatarsak";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/munkatarsak"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eves-jelentesek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eves-jelentesek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eves-jelentesek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/felugyeleti-szervek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/felugyeleti-szervek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/felugyeleti-szervek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/fenntarthatosagi-politika";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/fenntarthatosagi-politika"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/kozerdeku-adatok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/kozerdeku-adatok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=kozerdeku-adatok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/utasbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/utasbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/utasbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/gepjarmu-biztositasok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/gepjarmu-biztositasok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/gepjarmu-biztositasok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/lakasbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/lakasbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/lakasbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/baleset-es-betegsegbiztositasok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/dijak/atsorolt_dijak', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/dijak/atsorolt_dijak";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=dijak/atsorolt_dijak"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/dbhcsoportosbiztositasok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/dbhcsoportosbiztositasok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eon-biztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eon-biztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eon-biztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/elerhetosegek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/elerhetosegek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/elerhetosegek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/uzenetkuldes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/uzenetkuldes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/uzenetkuldes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyfelszolgalat/dijhatralek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyfelszolgalat/dijhatralek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/panaszkezeles', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/panaszkezeles";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=panaszkezeles"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/elektronikus-ugyintezes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/penzugyi-navigator', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/penzugyi-navigator";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/penzugyi-navigator"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/en-postam-husegprogram";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/en-postam-husegprogram"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/ugyfelazonositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/ugyfelazonositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/ugyfelazonositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/nyeremenyjatekok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/nyeremenyjatekok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/nyeremenyjatekok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/dijfizetessel-kapcsolatos-informaciok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/dijfizetessel-kapcsolatos-informaciok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/dijfizetessel-kapcsolatos-informaciok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/portal_szerzodeseim', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/portal_szerzodeseim";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=portal_szerzodeseim"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/profilom', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/profilom";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=profilom"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyfelszolgalat/dijhatralek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyfelszolgalat/dijhatralek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrendezes/karbejelentes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrendezes/karbejelentes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrendezes/karbejelentes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/portal_szerzodeseim', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/portal_szerzodeseim";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=portal_szerzodeseim"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/elerhetosegek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/elerhetosegek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/elerhetosegek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/alapadatok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/alapadatok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/alapadatok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/dijfizetes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/dijfizetes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/dijfizetes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/vallalatunk', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/vallalatunk";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/vallalatunk"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/panaszkezeles', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/panaszkezeles";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/panaszkezeles"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/biztositaskotes/utasbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/biztositaskotes/utasbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=biztositaskotes/utasbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/biztositaskotes/kotelezo_biztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/biztositaskotes/kotelezo_biztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=biztositaskotes/kotelezo_biztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/biztositaskotes/otthonbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/biztositaskotes/otthonbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=biztositaskotes/otthonbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrendezes/karbejelentes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrendezes/karbejelentes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrendezes/karbejelentes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrendezes/karstatusz_lekerdezes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrendezes/karstatusz_lekerdezes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrendezes/karstatusz_lekerdezes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/dijak/atsorolt_dijak', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/dijak/atsorolt_dijak";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=dijak/atsorolt_dijak"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/uzenetkuldes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/uzenetkuldes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/uzenetkuldes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyfelszolgalat/dijhatralek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyfelszolgalat/dijhatralek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/portal_szerzodeseim', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/portal_szerzodeseim";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=portal_szerzodeseim"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/profilom', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/profilom";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=profilom"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyfelszolgalat/dijhatralek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyfelszolgalat/dijhatralek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyfelszolgalat/dijhatralek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrendezes/karbejelentes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrendezes/karbejelentes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrendezes/karbejelentes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/gepjarmu-biztositasok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/gepjarmu-biztositasok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/gepjarmu-biztositasok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/gepjarmu-biztositasok/autoor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/gepjarmu-biztositasok/autoor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/gepjarmu-biztositasok/autoor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/utasbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/utasbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/utasbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/utasbiztositas/utasor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/utasbiztositas/utasor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/utasbiztositas/utasor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/utasbiztositas/utasorbelfold', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/utasbiztositas/utasorbelfold";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/utasbiztositas/utasorbelfold"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/utasbiztositas/utasorhosszutav', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/utasbiztositas/utasorhosszutav";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/utasbiztositas/utasorhosszutav"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/lakasbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/lakasbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/lakasbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/lakasbiztositas/postaedesotthon', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/lakasbiztositas/postaedesotthon";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/lakasbiztositas/postaedesotthon"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/lakasbiztositas/tobblakasos', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/lakasbiztositas/tobblakasos";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/lakasbiztositas/tobblakasos"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/lakasbiztositas/biztosotthon', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/lakasbiztositas/biztosotthon";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/lakasbiztositas/biztosotthon"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/lakasbiztositas/postaotthon24', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/lakasbiztositas/postaotthon24";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/lakasbiztositas/postaotthon24"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postahozamfix', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postahozamfix";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postahozamfix"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postanyugdijpremium', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postanyugdijpremium";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postanyugdijpremium"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postahozamor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postahozamor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postahozamor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postahaszonor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postahaszonor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postahaszonor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postanyugdijaranytartalek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postanyugdijaranytartalek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postanyugdijaranytartalek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postaszemunkfenye', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postaszemunkfenye";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postaszemunkfenye"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postamozaikmegtakaritas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postamozaikmegtakaritas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postamozaikmegtakaritas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postaeletor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postaeletor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postaeletor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postaorokhagyo', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postaorokhagyo";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postaorokhagyo"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postahaszonor2x0', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postahaszonor2x0";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postahaszonor2x0"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postatrend', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postatrend";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postatrend"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eletbiztositasok/postatrendnyugdij', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eletbiztositasok/postatrendnyugdij";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eletbiztositasok/postatrendnyugdij"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/baleset-es-betegsegbiztositasok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/mentoov', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/mentoov";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/mentoov"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/feszekor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/feszekor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/feszekor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/vemoco', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/vemoco";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/vemoco"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/takarekoskonyv', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/takarekoskonyv";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/takarekoskonyv"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/horgasz', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/horgasz";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/horgasz"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahorizont', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahorizont";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postahorizont"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahitelor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahitelor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postahitelor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/cascolight', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/cascolight";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/cascolight"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postapenzhalmozo', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postapenzhalmozo";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postapenzhalmozo"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahozamor-plusz', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahozamor-plusz";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postahozamor-plusz"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/ertekor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/ertekor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/ertekor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postatestor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postatestor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postatestor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postanyugdijprogram', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postanyugdijprogram";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postanyugdijprogram"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahozamhalmozo', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahozamhalmozo";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postahozamhalmozo"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postaeletutprogram', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postaeletutprogram";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postaeletutprogram"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postagyogyir', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postagyogyir";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postagyogyir"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postahitelor-20', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahitelor-20";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postahitelor-20"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/postafeszekor', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postafeszekor";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/postafeszekor"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/nem-ertekesitett-termekek/casco', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/casco";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/nem-ertekesitett-termekek/casco"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/takarek-ideal-hitelbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/takarek-ideal-hitelbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/takarek-ideal-hitelbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/takarek-konto-hitelbiztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/takarek-konto-hitelbiztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/takarek-konto-hitelbiztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/kekszed', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/kekszed";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/kekszed"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/kekszed-ultra', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/kekszed-ultra";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/kekszed-ultra"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/lbh', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/lbh";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/lbh"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/tbbé', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/tbbé";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/tbbé"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/TEB', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/TEB";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/TEB"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/takarek-biztositas/tkszmb', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/takarek-biztositas/tkszmb";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/takarek-biztositas/tkszmb"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/dbhcsoportosbiztositasok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/dbhcsoportosbiztositasok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/dbhcsoportosbiztositasok/dbhelp', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok/dbhelp";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/dbhcsoportosbiztositasok/dbhelp"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/dbhcsoportosbiztositasok/dbhalo', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok/dbhalo";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/dbhcsoportosbiztositasok/dbhalo"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eon-biztositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eon-biztositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eon-biztositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/termekek/eon-biztositas/utvonal', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/termekek/eon-biztositas/utvonal";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=termekek/eon-biztositas/utvonal"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/corvinus-adas-vetel', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/corvinus-adas-vetel";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/corvinus-adas-vetel"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/jovotervezo-tavaszi-nyertesek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/jovotervezo-tavaszi-nyertesek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/jovotervezo-tavaszi-nyertesek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kozlemeny', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kozlemeny";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kozlemeny"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kezikonyv', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kezikonyv";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kezikonyv"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/jovotervezo-nyeremenyjatek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/izraelbe-utazok-figyelmebe', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/izraelbe-utazok-figyelmebe";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/izraelbe-utazok-figyelmebe"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/telen-is-biztonsagban', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/telen-is-biztonsagban";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/telen-is-biztonsagban"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/csekknemelerheto', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/csekknemelerheto";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/csekknemelerheto"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/lakasbiztositasi_akcio', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/lakasbiztositasi_akcio";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/lakasbiztositasi_akcio"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/2023_Q4_jovotervezo_nyertesei', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/2023_Q4_jovotervezo_nyertesei";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/2023_Q4_jovotervezo_nyertesei"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/ugyfelelegedettsegsorsolas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/ugyfelelegedettsegsorsolas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/ugyfelelegedettsegsorsolas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek-q2', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek-q2";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/jovotervezo-nyeremenyjatek-q2"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/Iranba-utazok-figyelmebe', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/Iranba-utazok-figyelmebe";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/Iranba-utazok-figyelmebe"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/utasbiztositas-telinyereményjatek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/utasbiztositas-telinyereményjatek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/utasbiztositas-telinyereményjatek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/mindenre-van-egy-jo-megoldasunk', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/mindenre-van-egy-jo-megoldasunk";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/mindenre-van-egy-jo-megoldasunk"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/biztonsagos-nyaralast-kivanunk', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/biztonsagos-nyaralast-kivanunk";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/biztonsagos-nyaralast-kivanunk"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/boruban-is-derusen', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/boruban-is-derusen";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/boruban-is-derusen"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/jovotervezo-nyeremenyjatek-q3-2024', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek-q3-2024";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/jovotervezo-nyeremenyjatek-q3-2024"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/atadtuk-a-10-millio-forintos-nyeremenyt-', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/atadtuk-a-10-millio-forintos-nyeremenyt-";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/atadtuk-a-10-millio-forintos-nyeremenyt-"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/tranzakcio-2024', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/tranzakcio-2024";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/tranzakcio-2024"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/a-biztonsag-kenyelme', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/a-biztonsag-kenyelme";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/a-biztonsag-kenyelme"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hirek/nyugdijbiztositasi-akcio-', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hirek/nyugdijbiztositasi-akcio-";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hirek/nyugdijbiztositasi-akcio-"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/kozerdeku-adatok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/kozerdeku-adatok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/kozerdeku-adatok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/felugyeleti-szervek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/felugyeleti-szervek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/felugyeleti-szervek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/eves-jelentesek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/eves-jelentesek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/eves-jelentesek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/munkatarsak', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/munkatarsak";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/munkatarsak"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/alapadatok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/alapadatok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/alapadatok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-69-2020', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-69-2020";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/Hatarozatok/H-FK-II-B-69-2020"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-15-2020', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-15-2020";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/Hatarozatok/H-FK-II-B-15-2020"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-84-2017', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-84-2017";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/Hatarozatok/H-FK-II-B-84-2017"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-29-2017', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-29-2017";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/Hatarozatok/H-FK-II-B-29-2017"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-49-2016', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-49-2016";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/Hatarozatok/H-FK-II-B-49-2016"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/Hatarozatok/H-FK-II-B-30/2024', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-30/2024";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/Hatarozatok/H-FK-II-B-30/2024"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/fenntarthatosagi-politika";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/fenntarthatosagi-politika"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/vallalatunk', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/vallalatunk";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/vallalatunk"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/papirmentesseg', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/papirmentesseg";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/papirmentesseg"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/mpb/cookie-tajekoztato', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/mpb/cookie-tajekoztato";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=mpb/cookie-tajekoztato"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/adatkezeles', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/adatkezeles";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=adatkezeles"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrier', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrier";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrier"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/elerhetosegek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/elerhetosegek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/elerhetosegek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/elektronikus-ugyintezes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/penzugyi-navigator', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/penzugyi-navigator";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/penzugyi-navigator"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/ugyfelazonositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/ugyfelazonositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/ugyfelazonositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/en-postam-husegprogram";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/en-postam-husegprogram"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/nyeremenyjatekok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/nyeremenyjatekok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/nyeremenyjatekok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/dijfizetessel-kapcsolatos-informaciok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/dijfizetessel-kapcsolatos-informaciok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/dijfizetessel-kapcsolatos-informaciok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/kulfoldi-dijfizetes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/kulfoldi-dijfizetes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/kulfoldi-dijfizetes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/honlap-kezelese-soran-okozott-kar', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/honlap-kezelese-soran-okozott-kar";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=honlap-kezelese-soran-okozott-kar"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/panaszkezeles', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/panaszkezeles";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=panaszkezeles"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/marketing', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/marketing";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=marketing"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-II', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-II";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/jovotervezo-nyeremenyjatek-II"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/nyero-nyar', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/nyero-nyar";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/nyero-nyar"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/tanulok-dolgozok-utasbiztositasa', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/tanulok-dolgozok-utasbiztositasa";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/tanulok-dolgozok-utasbiztositasa"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/lejart-nyeremenyjatekok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/lejart-nyeremenyjatekok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/lejart-nyeremenyjatekok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-q4', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-q4";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/jovotervezo-nyeremenyjatek-q4"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/aktualis-akciok/nyugdijbiztositasi-kampány', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/aktualis-akciok/nyugdijbiztositasi-kampány";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=aktualis-akciok/nyugdijbiztositasi-kampány"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/biztositaskotes/otthonbiztositas/tanacsado', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/biztositaskotes/otthonbiztositas/tanacsado";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=biztositaskotes/otthonbiztositas/tanacsado"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/elerhetosegek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/elerhetosegek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/elerhetosegek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/alapadatok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/alapadatok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/alapadatok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/dijfizetes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/dijfizetes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/dijfizetes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/vallalatunk', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/vallalatunk";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/vallalatunk"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/akadalymentes/panaszkezeles', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/akadalymentes/panaszkezeles";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=akadalymentes/panaszkezeles"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/panaszkezeles/panaszbejelentes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/panaszkezeles/panaszbejelentes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=panaszkezeles/panaszbejelentes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rest-api-frissitesek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rest-api-frissitesek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rest-api-frissitesek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok_indulas/hozamfix2024julius', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok_indulas/hozamfix2024julius";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok_indulas/hozamfix2024julius"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/base', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/base";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/base"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/bonus', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/bonus";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/bonus"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2018januarhozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2018januarhozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2018januarhozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2018majushozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2018majushozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2018majushozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2018marciusrhozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2018marciusrhozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2018marciusrhozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2021novemberhozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2021novemberhozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2021novemberhozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2022juniushozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2022juniushozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2022juniushozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2022juniusIIhozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2022juniusIIhozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2022juniusIIhozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2022juniusIIIhozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2022juniusIIIhozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2022juniusIIIhozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2022szeptemberhozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2022szeptemberhozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2022szeptemberhozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/profit', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/profit";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/profit"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/tokevedetteszkozalap', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/tokevedetteszkozalap";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/tokevedetteszkozalap"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2023szeptemberhozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2023szeptemberhozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2023szeptemberhozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/penzpiacieszkozalap', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/penzpiacieszkozalap";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/penzpiacieszkozalap"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/ingatlaneszkozalap', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/ingatlaneszkozalap";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/ingatlaneszkozalap"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/globalisvegyes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/globalisvegyes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/globalisvegyes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/eszkozalapok/hozamfix2024juliushozamvedett', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/eszkozalapok/hozamfix2024juliushozamvedett";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=eszkozalapok/hozamfix2024juliushozamvedett"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/vallalatunk', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/vallalatunk";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/vallalatunk"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/alapadatok', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/alapadatok";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/alapadatok"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/munkatarsak', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/munkatarsak";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/munkatarsak"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/eves-jelentesek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/eves-jelentesek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/eves-jelentesek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/felugyeleti-szervek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/felugyeleti-szervek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/felugyeleti-szervek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/rolunk/fenntarthatosagi-politika', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/rolunk/fenntarthatosagi-politika";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=rolunk/fenntarthatosagi-politika"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrier', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrier";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrier"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/elerhetosegek', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/elerhetosegek";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/elerhetosegek"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/uzenetkuldes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/uzenetkuldes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/uzenetkuldes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/panaszkezeles', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/panaszkezeles";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/panaszkezeles"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/elektronikus-ugyintezes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/elektronikus-ugyintezes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/penzugyi-navigator', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/penzugyi-navigator";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/penzugyi-navigator"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/en-postam-husegprogram', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/en-postam-husegprogram";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/en-postam-husegprogram"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/ugyintezes/ugyfelazonositas', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/ugyintezes/ugyfelazonositas";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=ugyintezes/ugyfelazonositas"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/karrendezes/karbejelentes', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/karrendezes/karbejelentes";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=karrendezes/karbejelentes"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/hello.hu', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/hello.hu";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=hello.hu"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/posta.hu', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/posta.hu";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=posta.hu"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/adatkezeles', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/adatkezeles";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=adatkezeles"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/mpb/cookie-tajekoztato', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/mpb/cookie-tajekoztato";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=mpb/cookie-tajekoztato"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/sitemap', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/sitemap";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=sitemap"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/panaszkezeles', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/panaszkezeles";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=panaszkezeles"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});

describe('/honlap-kezelese-soran-okozott-kar', () => {
  it("should check for error message in div and API response", () => {
    const fullPath = "https://postabiztosito.hu/honlap-kezelese-soran-okozott-kar";

    cy.intercept(
      "GET",
      "/cms/umbraco/customer/components/v1/generic-page?path=honlap-kezelese-soran-okozott-kar"
    ).as("getGenericPage");

    cy.visit(fullPath);

    cy.wait("@getGenericPage").then((interception) => {
      expect(interception.response.statusCode).not.to.eq(404);
    });
  });
});