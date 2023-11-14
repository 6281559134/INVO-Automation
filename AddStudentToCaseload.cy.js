describe('template first', () => {
    it('passes', () => {
      cy.wait(5000);
      cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
      cy.wait(5000);
      cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
      cy.get('input[name=password]').type("Tele@123");
      cy.get('button[type=submit]').click({force: true});
      cy.wait(5000);
      cy.get('a[href="/portal/caseload"]').click({ force: true });
      cy.wait(5000);
      cy.contains('button', 'Add Clients').click({force: true});

      //cy.get('button.ant-btn.css-ibennm.ant-btn-primary span').should('exist').click();
      cy.get('.ant-form.ant-form-vertical.css-ibennm').should('exist').click();
      cy.wait(5000);
      
      
      cy.get('div[name="clients"] div[class="ant-select-selection-overflow"]').type('Automation Testing00');
      cy.get('div[class="rc-virtual-list-holder-inner"]').should('be.visible');
      cy.get('.ant-select-item-option-content') .contains("Automation Testing00").click();
      
      
      cy.wait(5000);
      cy.get('body div button:nth-child(2)').should('exist').click({ force: true });
 
 
    })
})