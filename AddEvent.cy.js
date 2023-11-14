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
    cy.get('button[title="month view"]').click();
    // cy.get('.fc-icon.fc-icon-chevron-left').click();
    // cy.get('.fc-icon.fc-icon-chevron-left').click();
    // cy.get('.fc-icon.fc-icon-chevron-left').click();
   
   
    const desiredDate = '2023-11-01';
    
    
    cy.wait(5000);
    cy.wait(5000);
    cy.get(`[data-date="${desiredDate}"]`).click();
    cy.get('input[placeholder="Enter Title"]').type("Test");
    
    cy.wait(5000);
    cy.get('div[name="appointmentServices"] div[class="ant-select-selector"]').click();
    const serviceName = 'AutomationService1-Direct';
    cy.wait(5000);
    cy.wait(5000);
    cy.wait(5000);
    cy.get('div[title="' + serviceName + '"] div[class="ant-select-item-option-content"]', { timeout: 10000 }).scrollIntoView() .click({ force: true });
    cy.get('div[name="locationTypeId"] div[class="ant-select-selector"]').click();
    cy.get('div[title="School"] div[class="ant-select-item-option-content"]').click({ force: true });
    cy.wait(5000);
    cy.get('div[name="customer"] div.ant-select-selector').should('exist').should('be.visible').click({ force: true });
    cy.get('div[title="Charter Schools USA"] div[class="ant-select-item-option-content"]').click({ force: true });
    cy.wait(5000);
    cy.get('div[name="appointmentDivisions"] div[class="ant-select-selection-overflow"]').click( {force: true});
    cy.get('div[title="All"] div[class="ant-select-item-option-content"]').click({ force: true });
    cy.wait(5000);
    cy.get('div[name="appointmentClients"] div[class="ant-select-selection-overflow"]').click( {force: true});
    cy.wait(5000);
    
    const student = 'Automation Testing00'; 
      
    
    cy.get('div[title="' + student + '"] div[class="ant-select-item-option-content"]').click({ force: true });
    cy.wait(5000);
    
    cy.contains('Save').click({ force: true });

     
      



      




    })
})