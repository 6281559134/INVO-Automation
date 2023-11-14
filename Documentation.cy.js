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
      
      const searchText = 'Automation';
      const buttonText = 'Automation Testing00';

      
      cy.get('input[placeholder="Search"]').type(`${searchText}{enter}`);
      cy.wait(5000);
      cy.wait(5000);
      
      cy.contains('div', 'Automation Testing00').click();


      cy.get('#rc-tabs-0-tab-7').click();
     // cy.get('input[placeholder="Start Date"]').click();
      //cy.get('td[title="2023-08-09"] div[class="ant-picker-cell-inner"]').click();

    })
})