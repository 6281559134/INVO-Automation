describe('template first', () => {
  it('passes', () => {
    cy.visit('https://invo.dev.teleteachers.us/portal/login.cypress.io');
    cy.wait(5000);
    cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
    cy.get('input[name=password]').type("Tele@123");
    cy.get('button[type=submit]').click();
    cy.wait(5000);
    cy.get('a[href="/portal/referral"]').click({ force: true });
    cy.get('button.ant-btn.css-ibennm.ant-btn-default').click();
    cy.get('#rc_select_4').click();
    cy.wait(4000);
    cy.get("div[title='Charter Schools USA'] div[class='ant-select-item-option-content']").click();
    cy.wait(3000);
    cy.get('#rc_select_5').click();
    cy.wait(3000);
    cy.get("div[title='A1 School1'] div[class='ant-select-item-option-content']").click();
    cy.wait(3000);
    
    
    cy.get('input[placeholder="Client First Name"]').type("Automation");
    cy.get('input[placeholder="Client Last Name"]').type("Testing00");
    
    
    cy.get('button.ant-btn.css-ibennm.ant-btn-primary').click();
    cy.wait(5000);
    cy.wait(3000);
    cy.get('#sq_134i').type("kjhgfd");
    cy.get('#sq_135i').type('lkjh');
    cy.wait(3000);
    cy.get('#sq_136i').type("kjhgfd@g.com");
    cy.get('#sq_137i').type("9876545678");
    cy.wait(3000);
    cy.get('#sq_138i').type("kjhoiuytrdfgh");
    cy.get('#sq_138i').type("kjhoiuytrdf");
    cy.wait(3000);
    cy.get('#sq_133i_0').click();
    cy.get('li[id="sq_133i_listAmerican Indian or Alaska Native"] span[class="sv-string-viewer"]').should('exist').click();
    cy.wait(3000);
    cy.get('#sq_132i_0').click();
    cy.get('li[id="sq_132i_listFemale"] div[class="sv-list__item-body sd-list__item-body"]').should('exist').click();
    cy.wait(3000);
    cy.get('#sq_131i_0').click();
    cy.get('li[id="sq_131i_listECSE"] div[class="sv-list__item-body sd-list__item-body"]').should('exist').click();
    cy.wait(3000);
    cy.get('#sq_140i_0').click();
    cy.get('li[id="sq_140i_listYES"] div[class="sv-list__item-body sd-list__item-body"]').should('exist').click();
    cy.wait(3000);
    cy.get('#sq_141i_0').click();
    cy.get('li[id="sq_141i_listNO"] div[class="sv-list__item-body sd-list__item-body"]').should('exist').click();
    cy.wait(10000);
    cy.wait(3000);
    const inputDate = "03/09/2023";
    const [month, day, year] = inputDate.split("/");
    const formattedDate = `${year}-${month}-${day}`;
    cy.get("#sq_127i").click().type(formattedDate);
    cy.get("#sq_130i").click().type(formattedDate);
    cy.get('.sd-boolean__switch').should('exist').click(); 
    cy.get('span.sd-item__decorator.sd-checkbox__decorator').should('exist').each(($checkbox) => {
    cy.wrap($checkbox).click();
    });
    cy.wait(3000);
    cy.get('#sq_146i').type("kjhoiuytrdfgh");
    cy.get('#sq_139i').type("kjhoiuytrdfgh");
    cy.wait(3000);
    cy.get('#sq_148i').type("kjhoiuh");
    cy.wait(3000);
    cy.get('#sq_149i').type("kjhoiu@h.com");
    cy.get('input[title="Save & Final"]').should('exist').click(); 




  })
})