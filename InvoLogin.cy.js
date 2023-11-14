
describe('template first', () => {
    it('passes', () => {
      cy.visit('https://invo.dev.teleteachers.us/portal/');
      cy.wait(5000);
      cy.get('input[name=username]').type("madhulatha+invo@ensarsolutions.com");
      cy.get('input[name=password]').type("Tele@123");
      cy.get('button[type=submit]').click();
      
    })
     
})