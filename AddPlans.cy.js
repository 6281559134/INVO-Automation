describe('template first', () => {
    it('passes', () => {
        cy.wait(5000);
      cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
      cy.wait(5000);
      cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
      cy.get('input[name=password]').type("Tele@123");
      cy.get('button[type=submit]').click();
      cy.wait(5000);
      cy.get('a[href="/portal/caseload"]').click({ force: true });
      //cy.get('span[title="ACTIVE"]').click(); 
      //cy.get('div[title="SCHEDULING IN PROGRESS"] div[class="ant-select-item-option-content"]').click();
      
      const searchText = 'Automation';
      const buttonText = 'Automation Testing00';

      
      cy.get('input[placeholder="Search"]').type(`${searchText}{enter}`);
      cy.wait(5000);
      cy.wait(5000);
      cy.contains('div', 'Automation Testing00').click();
      
      
      cy.get('#rc-tabs-0-tab-5').click();
      cy.wait(5000);
      cy.contains('button', 'Add Plan').click();
      cy.get('div[name="planTypeId"] div[class="ant-select-selector"]').click();
      cy.get('.ant-select-item-option-content').click();
      cy.get('input[placeholder="Start Date"]').click();
      cy.get('td[title="2023-11-09"] div[class="ant-picker-cell-inner"]').click();
      cy.contains('button', 'Create').click();
      cy.wait(5000);
      cy.wait(5000);
      cy.get('body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > button:nth-child(2)').click({fource:true});
      cy.contains('button', 'Add Discipline').click({force: true});
      cy.get('div.ant-col.ant-col-md-6.css-ibennm span.ant-select-selection-search').click();
      cy.get('div[title="A1Discipline"] div[class="ant-select-item-option-content"]').click({force: true});
      cy.wait(5000);
      cy.wait(5000);
      cy.get('input[placeholder="Minutes Per Session"]').should('be.visible').type('45');
      cy.wait(5000);
      cy.get('input[placeholder="Number Of Sessions"]').type('6');
      cy.get('div.ant-col.ant-col-md-5.css-ibennm div.ant-select-selector').click({force: true} );
      cy.wait(5000);
      cy.get('div[title="Weekly"] div[class="ant-select-item-option-content"]').click({force: true} );
      cy.wait(5000);
      cy.contains('button', 'Create').click({force: true} );



      cy.get('body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)').click();

     //cy.get('button.ant-btn.css-ibennm.ant-btn-primary span').click({force: true} );

    })
})