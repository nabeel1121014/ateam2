class HomePage {

   visit() {
      cy.visit('/',{failOnStatusCode: false});

      return this;
   }

   waitPageLoading(){
      cy.get('a[href="/passageiros/en/buy-tickets"]').should("be.visible");
      return this;
   }

   clickBuyTicket(){
      cy.get('a[href="/passageiros/en/buy-tickets"]').dblclick({force: true});
      return this;
   }
}

export default HomePage
