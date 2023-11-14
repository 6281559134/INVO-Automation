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
      cy.get('a[href="/portal/setup/users"]').click({ force: true });
      cy.get('button[type="button"] span:nth-child(2)').click();
      cy.get('input[placeholder="First Name"]').type('MadhuLatha');
      cy.get('input[placeholder="Last Name"]').type('Admin1');
      cy.get('input[placeholder="Email Address"]').type('madhulatha+invo+3@ensarsolutions.com');
      cy.wait(5000);
      cy.get('div[class="ant-form-item-control-input-content"] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1)').click();
      //cy.get('#rc_select_6').click({force: true});
      cy.get('div[title="Organization Admin"] div[class="ant-select-item-option-content"]').click();
      cy.wait(5000);
      cy.get('#rc_select_7').click({force: true});
      cy.get('div[title="Invo Organization Admin"] div[class="ant-select-item-option-content"]').click();
      cy.get('div[name="customerId"] div[class="ant-select-selection-overflow"]').click();
      cy.get('div[title="A2 IMPACT Program 1"] div[class="ant-select-item-option-content"]').click();
      cy.wait(5000);
      cy.wait(5000);
      cy.get('div[name="locationId"] div[class="ant-select-selection-overflow"]').click().then(() => {
        cy.get('div.ant-select-dropdown div.rc-virtual-list-holder div[title="All"] div[class="ant-select-item-option-content"]').click();
     });
      cy.get('button[class="ant-btn css-ibennm ant-btn-primary"]').scrollIntoView().should('be.visible').click();



  




      

      






})
})