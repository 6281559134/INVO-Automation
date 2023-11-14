describe('template first', () => {
    it('passes', () => {
      cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
      cy.wait(5000);
      cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
      cy.get('input[name=password]').type("Tele@123");
      cy.get('button[type=submit]').click();
      cy.wait(5000);
      cy.get('.ant-menu-submenu-title').invoke('attr', 'style', 'visibility: visible;');
      cy.get('.ant-menu-submenu-title').click( {force: true});
      cy.get('a[href="/portal/setup/discipline"]').click({ force: true });
      cy.contains('Create').click();
      cy.get('input[placeholder="Discipline Name"]').type('A1Discipline5');
      cy.contains('Save').click();




    })
})