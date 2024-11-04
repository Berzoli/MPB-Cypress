
    describe('/karrier', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrier',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/fenntarthatosagi-politika', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/papirmentesseg', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/papirmentesseg',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/lejart-nyeremenyjatekok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/lejart-nyeremenyjatekok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyfelelegedettseg-nyeremenyjatek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyfelelegedettseg-nyeremenyjatek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-q4', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-q4',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/nyugdijbiztositasi-kampány', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/nyugdijbiztositasi-kampány',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/biztositaskotes/utasbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/biztositaskotes/utasbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/biztositaskotes/kotelezo_biztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/biztositaskotes/kotelezo_biztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/biztositaskotes/otthonbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrendezes/karbejelentes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrendezes/karbejelentes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrendezes/karstatusz_lekerdezes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrendezes/karstatusz_lekerdezes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/vallalatunk', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/vallalatunk',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/alapadatok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/alapadatok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/munkatarsak', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/munkatarsak',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eves-jelentesek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eves-jelentesek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/felugyeleti-szervek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/felugyeleti-szervek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/fenntarthatosagi-politika', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/kozerdeku-adatok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/kozerdeku-adatok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/utasbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/utasbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/gepjarmu-biztositasok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/lakasbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/lakasbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/baleset-es-betegsegbiztositasok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/dijak/atsorolt_dijak', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/dijak/atsorolt_dijak',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/dbhcsoportosbiztositasok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eon-biztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eon-biztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/elerhetosegek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/elerhetosegek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/uzenetkuldes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/uzenetkuldes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyfelszolgalat/dijhatralek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/panaszkezeles', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/panaszkezeles',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/elektronikus-ugyintezes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/penzugyi-navigator', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/en-postam-husegprogram', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/ugyfelazonositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/nyeremenyjatekok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/nyeremenyjatekok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/dijfizetessel-kapcsolatos-informaciok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/dijfizetessel-kapcsolatos-informaciok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/portal_szerzodeseim', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/portal_szerzodeseim',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/profilom', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/profilom',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyfelszolgalat/dijhatralek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrendezes/karbejelentes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrendezes/karbejelentes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/portal_szerzodeseim', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/portal_szerzodeseim',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/elerhetosegek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/elerhetosegek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/alapadatok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/alapadatok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/dijfizetes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/dijfizetes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/vallalatunk', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/vallalatunk',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/panaszkezeles', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/panaszkezeles',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/biztositaskotes/utasbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/biztositaskotes/utasbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/biztositaskotes/kotelezo_biztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/biztositaskotes/kotelezo_biztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/biztositaskotes/otthonbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrendezes/karbejelentes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrendezes/karbejelentes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrendezes/karstatusz_lekerdezes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrendezes/karstatusz_lekerdezes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/dijak/atsorolt_dijak', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/dijak/atsorolt_dijak',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/uzenetkuldes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/uzenetkuldes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyfelszolgalat/dijhatralek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/portal_szerzodeseim', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/portal_szerzodeseim',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/profilom', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/profilom',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyfelszolgalat/dijhatralek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyfelszolgalat/dijhatralek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrendezes/karbejelentes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrendezes/karbejelentes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/gepjarmu-biztositasok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/gepjarmu-biztositasok/autoor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/gepjarmu-biztositasok/autoor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/utasbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/utasbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/utasbiztositas/utasor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/utasbiztositas/utasor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/utasbiztositas/utasorbelfold', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/utasbiztositas/utasorbelfold',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/utasbiztositas/utasorhosszutav', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/utasbiztositas/utasorhosszutav',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/lakasbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/lakasbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/lakasbiztositas/postaedesotthon', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/lakasbiztositas/postaedesotthon',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/lakasbiztositas/tobblakasos', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/lakasbiztositas/tobblakasos',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/lakasbiztositas/biztosotthon', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/lakasbiztositas/biztosotthon',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/lakasbiztositas/postaotthon24', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/lakasbiztositas/postaotthon24',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postahozamfix', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postahozamfix',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postanyugdijpremium', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postanyugdijpremium',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postahozamor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postahozamor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postahaszonor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postahaszonor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postanyugdijaranytartalek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postanyugdijaranytartalek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postaszemunkfenye', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postaszemunkfenye',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postamozaikmegtakaritas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postamozaikmegtakaritas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postaeletor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postaeletor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postaorokhagyo', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postaorokhagyo',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postahaszonor2x0', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postahaszonor2x0',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postatrend', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postatrend',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eletbiztositasok/postatrendnyugdij', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eletbiztositasok/postatrendnyugdij',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/baleset-es-betegsegbiztositasok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/baleset-es-betegsegbiztositasok/posta-csaladi-biztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/mentoov', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/mentoov',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/feszekor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/feszekor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/vemoco', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/vemoco',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/takarekoskonyv', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/takarekoskonyv',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/horgasz', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/horgasz',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postahorizont', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahorizont',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postahitelor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahitelor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/cascolight', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/cascolight',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postapenzhalmozo', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postapenzhalmozo',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postahozamor-plusz', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahozamor-plusz',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/altalanoscsoportosbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/ertekor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/ertekor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postatestor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postatestor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postanyugdijprogram', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postanyugdijprogram',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postahozamhalmozo', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahozamhalmozo',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postaeletutprogram', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postaeletutprogram',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postagyogyir', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postagyogyir',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postahitelor-20', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postahitelor-20',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/postafeszekor', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/postafeszekor',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/nem-ertekesitett-termekek/casco', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/nem-ertekesitett-termekek/casco',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/takarek-ideal-hitelbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-ideal-hitelbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-ideal-ultra-hitelbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/takarek-konto-hitelbiztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/takarek-konto-hitelbiztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/kekszed', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/kekszed',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/kekszed-ultra', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/kekszed-ultra',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/lbh', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/lbh',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/tbbé', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/tbbé',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/TEB', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/TEB',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/takarek-biztositas/tkszmb', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/takarek-biztositas/tkszmb',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/dbhcsoportosbiztositasok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/dbhcsoportosbiztositasok/dbhelp', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok/dbhelp',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/dbhcsoportosbiztositasok/dbhalo', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/dbhcsoportosbiztositasok/dbhalo',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eon-biztositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eon-biztositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/termekek/eon-biztositas/utvonal', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/termekek/eon-biztositas/utvonal',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/corvinus-adas-vetel', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/corvinus-adas-vetel',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/jovotervezo-tavaszi-nyertesek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/jovotervezo-tavaszi-nyertesek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kozlemeny', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kozlemeny',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kezikonyv', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kezikonyv',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/jovotervezo-nyeremenyjatek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/izraelbe-utazok-figyelmebe', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/izraelbe-utazok-figyelmebe',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/sorsoltunk--jovotervezo-nyeremenyjatek-nyertesek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/telen-is-biztonsagban', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/telen-is-biztonsagban',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-kampany-szerencses-nyerteseit',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/csekknemelerheto', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/csekknemelerheto',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kisorsoltuk-a-postanyugdij-aranytartalek-dijkalkulaciohoz-kapcsolodo-nyeremenyjatek-nyerteset',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/lakasbiztositasi_akcio', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/lakasbiztositasi_akcio',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/2023_Q4_jovotervezo_nyertesei', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/2023_Q4_jovotervezo_nyertesei',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/ugyfelelegedettsegsorsolas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/ugyfelelegedettsegsorsolas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/jovotervezo-nyeremenyjatek-q2', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek-q2',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/Iranba-utazok-figyelmebe', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/Iranba-utazok-figyelmebe',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/utasbiztositas-telinyereményjatek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/utasbiztositas-telinyereményjatek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/mindenre-van-egy-jo-megoldasunk', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/mindenre-van-egy-jo-megoldasunk',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/biztonsagos-nyaralast-kivanunk', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/biztonsagos-nyaralast-kivanunk',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q1-1',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/boruban-is-derusen', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/boruban-is-derusen',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/jovotervezo-nyeremenyjatek-q3-2024', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/jovotervezo-nyeremenyjatek-q3-2024',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/atadtuk-a-10-millio-forintos-nyeremenyt-', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/atadtuk-a-10-millio-forintos-nyeremenyt-',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/tranzakcio-2024', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/tranzakcio-2024',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-2024-q2',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/kisorsoltuk-a-jovotervezo-nyeremenyjatek-nyerteseit-q2',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/oszi-folyamatos-dijas-eletbiztositasi-akcio',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/a-biztonsag-kenyelme', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/a-biztonsag-kenyelme',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hirek/nyugdijbiztositasi-akcio-', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hirek/nyugdijbiztositasi-akcio-',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/kozerdeku-adatok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/kozerdeku-adatok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/felugyeleti-szervek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/felugyeleti-szervek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/eves-jelentesek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/eves-jelentesek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/munkatarsak', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/munkatarsak',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/alapadatok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/alapadatok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/Hatarozatok/H-FK-II-B-69-2020', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-69-2020',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/Hatarozatok/H-FK-II-B-15-2020', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-15-2020',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/Hatarozatok/H-FK-II-B-84-2017', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-84-2017',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/Hatarozatok/H-FK-II-B-29-2017', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-29-2017',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/Hatarozatok/H-FK-II-B-49-2016', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-49-2016',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/Hatarozatok/H-FK-II-B-30/2024', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/Hatarozatok/H-FK-II-B-30/2024',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/fenntarthatosagi-politika', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/vallalatunk', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/vallalatunk',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/papirmentesseg', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/papirmentesseg',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/mpb/cookie-tajekoztato', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/mpb/cookie-tajekoztato',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/adatkezeles', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/adatkezeles',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrier', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrier',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/elerhetosegek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/elerhetosegek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/elektronikus-ugyintezes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/penzugyi-navigator', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/ugyfelazonositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/en-postam-husegprogram', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/nyeremenyjatekok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/nyeremenyjatekok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/dijfizetessel-kapcsolatos-informaciok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/dijfizetessel-kapcsolatos-informaciok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/kulfoldi-dijfizetes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/kulfoldi-dijfizetes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/honlap-kezelese-soran-okozott-kar', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/honlap-kezelese-soran-okozott-kar',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/panaszkezeles', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/panaszkezeles',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/marketing', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/marketing',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-II', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-II',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/nyerjen-500000-ft-erteku-utalvanyt',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/nyero-nyar', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/nyero-nyar',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/tanulok-dolgozok-utasbiztositasa', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/tanulok-dolgozok-utasbiztositasa',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/lejart-nyeremenyjatekok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/lejart-nyeremenyjatekok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/ugyfelelegedettseg-nyeremenyjatek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/jovotervezo-nyeremenyjatek-q4', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/jovotervezo-nyeremenyjatek-q4',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/aktualis-akciok/nyugdijbiztositasi-kampány', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/aktualis-akciok/nyugdijbiztositasi-kampány',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/biztositaskotes/otthonbiztositas/tanacsado', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/biztositaskotes/otthonbiztositas/tanacsado',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/elerhetosegek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/elerhetosegek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/alapadatok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/alapadatok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/dijfizetes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/dijfizetes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/vallalatunk', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/vallalatunk',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/akadalymentes/panaszkezeles', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/akadalymentes/panaszkezeles',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/panaszkezeles/panaszbejelentes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/panaszkezeles/panaszbejelentes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rest-api-frissitesek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rest-api-frissitesek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok_indulas/hozamfix2024julius', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok_indulas/hozamfix2024julius',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/base', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/base',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/bonus', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/bonus',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2018januarhozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2018januarhozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2018majushozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2018majushozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2018marciusrhozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2018marciusrhozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2021novemberhozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2021novemberhozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2022juniushozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniushozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2022juniusIIhozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniusIIhozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2022juniusIIIhozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2022juniusIIIhozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2022szeptemberhozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2022szeptemberhozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/profit', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/profit',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/tokevedetteszkozalap', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/tokevedetteszkozalap',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2023szeptemberhozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2023szeptemberhozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/penzpiacieszkozalap', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/penzpiacieszkozalap',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/ingatlaneszkozalap', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/ingatlaneszkozalap',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/globalisvegyes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/globalisvegyes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/eszkozalapok/hozamfix2024juliushozamvedett', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/eszkozalapok/hozamfix2024juliushozamvedett',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/vallalatunk', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/vallalatunk',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/alapadatok', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/alapadatok',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/munkatarsak', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/munkatarsak',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/eves-jelentesek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/eves-jelentesek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/felugyeleti-szervek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/felugyeleti-szervek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/rolunk/fenntarthatosagi-politika', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/rolunk/fenntarthatosagi-politika',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrier', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrier',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/elerhetosegek', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/elerhetosegek',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/uzenetkuldes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/uzenetkuldes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/panaszkezeles', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/panaszkezeles',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/elektronikus-ugyintezes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/elektronikus-ugyintezes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/penzugyi-navigator', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/penzugyi-navigator',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/en-postam-husegprogram', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/en-postam-husegprogram',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/ugyintezes/ugyfelazonositas', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/ugyintezes/ugyfelazonositas',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/karrendezes/karbejelentes', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/karrendezes/karbejelentes',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/hello.hu', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/hello.hu',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/posta.hu', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/posta.hu',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/adatkezeles', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/adatkezeles',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/mpb/cookie-tajekoztato', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/mpb/cookie-tajekoztato',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/sitemap', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/sitemap',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/panaszkezeles', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/panaszkezeles',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });

    describe('/honlap-kezelese-soran-okozott-kar', () => {
        it('should return 404 status', () => {
          cy.request({
            url: 'https://postabiztosito.hu/honlap-kezelese-soran-okozott-kar',
            failOnStatusCode: false
          }).then((response) => {
            expect(response.status).not.to.eq(404)
          });
        });
      });