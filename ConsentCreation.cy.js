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
      cy.get('span[title="ACTIVE"]').click(); 
      cy.get('div[title="SCHEDULING IN PROGRESS"] div[class="ant-select-item-option-content"]').click();
      
      const searchText = 'Automation';
      const buttonText = 'Automation Testing00';

      
      cy.get('input[placeholder="Search"]').type(`${searchText}{enter}`);
      cy.wait(5000);
      cy.wait(5000);
      cy.contains('div', buttonText).click();
      cy.get('#rc-tabs-0-tab-3').click();
      cy.wait(5000);
      cy.contains('button', 'Create Consent').click();
      cy.wait(5000);
      cy.wait(5000);
      cy.get('body div button:nth-child(2)').click();
      cy.wait(5000);
      cy.get('.ant-layout-content.sc-ezOQGI.jQEvsd.css-ibennm').scrollIntoView();
      cy.get('div[data-name="Address"] div[class="sd-text__content sd-question__content"]').type('ytfrdftgyhu');
      cy.get('div[data-name="City"] div[class="sd-text__content sd-question__content"]').type('ytfrdftgyhu');
      cy.wait(5000);
      cy.get('div[data-name="Guardian Phone"] div[class="sd-text__content sd-question__content"]').type('9898767898');
      cy.wait(5000);
      cy.get('div[data-name="State"] div[class="sd-question__content"]').click();
      cy.get('span.sv-string-viewer').contains('California').click();
      cy.wait(5000);
      cy.get('div[data-name="Zip Code"] div[class="sd-text__content sd-question__content"]').type('98989');
      cy.get('div[data-name="Primary Care Physician"] div[class="sd-text__content sd-question__content"]').type('ijhyuds');
      cy.get('div[data-name="question5"] div[class="sd-text__content sd-question__content sd-question__content--left"]').type('ijhyuds');
      cy.wait(5000);
      cy.get('div[data-name="Parent or Guardian Name"] div[class="sd-text__content sd-question__content"]').type('ytfrdftgyhu');
      cy.get('canvas[tabindex="0"]').type('.');
      cy.wait(5000);
      cy.get('div[data-name="Date-11page"] div[class="sd-text__content sd-question__content"]').click();
  
      const inputDate = "12/12/2023";
      
      const [month, day, year] = inputDate.split("/");
      const formattedDate = `${year}-${month}-${day}`;
      cy.get('div[data-name="Date-11page"] div[class="sd-text__content sd-question__content"]').click().type(formattedDate);
      cy.wait(5000);
      cy.wait(5000);
     
      cy.get('input[title="Save & Final"]').click();
})
})