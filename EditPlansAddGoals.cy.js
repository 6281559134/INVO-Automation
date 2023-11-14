
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
      cy.get('li.ant-menu-overflow-item.ant-menu-overflow-item-rest.ant-menu-submenu.ant-menu-submenu-horizontal').first().click();
      cy.wait(5000);
      cy.get('ul[class="ant-menu ant-menu-sub ant-menu-vertical"]').find('li span').contains('Edit').click();
      cy.wait(5000);
      cy.contains('span', 'Add Goal').click({force: true} );
      cy.get('input[placeholder="Goal"]').type('10');
      cy.get('textarea[placeholder="Description"]').type('None');
      cy.wait(5000);
      cy.get('div[name="goalTypeId"] div[class="ant-select-selector"]').click();
      cy.wait(5000);
      cy.get('div[title="A1Discipline"] div[class="ant-select-item-option-content"]').click();
      cy.wait(5000);
      cy.get('div[name="dataCollectionTypeId"] div[class="ant-select-selector"]').click();
      cy.wait(5000);
      cy.get('div[title="Frequency"] div[class="ant-select-item-option-content"]').click();
      cy.wait(5000);
      cy.get('button.ant-btn.css-ibennm.ant-btn-primary span').click({force: true} );
      //cy.get('ul.ant-card-actions div:nth-child(2) button:nth-child(1)').click();
     // body > div:nth-child(1) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > span:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)
      cy.contains('button', 'Sign and Finalize').click();

      cy.get('canvas[width="450"]').type(".");
      cy.wait(5000);
      cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > button:nth-child(2)').click();
      cy.wait(5000);
      //cy.contains('button', 'Sign').click({force: true});
      //cy.contains('button', 'Save').click();
      cy.wait(5000);
      cy.wait(5000);

 
    })
})