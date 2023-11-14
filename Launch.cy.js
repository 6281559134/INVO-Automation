describe('template first', () => {
    it('passes', () => {
      cy.wait(5000);
      cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
      cy.wait(5000);
      cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
      cy.get('input[name=password]').type("Tele@123");
      cy.get('button[type=submit]').click();
      cy.wait(5000);
      cy.get('a[href="/portal/schedule"]').click({ force: true });
      cy.wait(5000);
      cy.wait(5000);
      cy.wait(5000);
      cy.get('button[title="month view"]').click();
      cy.wait(5000);
      // cy.get('.fc-icon.fc-icon-chevron-left').click();
      // cy.get('.fc-icon.fc-icon-chevron-left').click();
      // cy.get('.fc-icon.fc-icon-chevron-left').click();
      const desiredDate = '2023-11-01';
      
      cy.wait(5000);
      cy.wait(5000);
      cy.get(`[data-date="${desiredDate}"]`).click();
    //   cy.contains('span', '12:00 AM', { normalizeWhitespace: true }).click({force: true});
      cy.get('div[class="ant-modal-footer"] button:nth-child(1)').click();
      //cy.contains('Notes').click();
      cy.get('textarea[name="sessionClients.0.notesPlan"]').type('None');
      cy.get('div[name="medicationId"] div[class="ant-select-selector"]').click();
      cy.get('div[title="Refused to take"] div[class="ant-select-item-option-content"]').click();
      cy.contains('Save & Document').click();
      cy.wait(5000);
      cy.wait(5000);
    
      cy.get('canvas[width="300"]').type('.');
      cy.wait(5000);
    //   cy.contains('Document').click( {force: true});
      cy.get('div[class="ant-modal-footer"] button:nth-child(2)').click( {force: true});
      cy.wait(5000);
      cy.wait(5000);

  


      
          
              
          
             
            
          
       
      


    })
})