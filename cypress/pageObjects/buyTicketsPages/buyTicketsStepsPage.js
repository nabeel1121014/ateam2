import SearchTicketStep from "./searchTicketStep";
import ServiceStepPage from "./serviceStep";

class BuyTicketsStepsPage {

 searchTicketsStep;
 serviceStep;

 constructor() {
  this.searchTicketsStep = new SearchTicketStep(this);
  this.serviceStep = new ServiceStepPage(this);
 }
 waitPageLoading(){
  cy.get('[name="textBoxPartida"]').should("be.visible");
  return this;
 }

 clickContinue(){
  cy.get("#buttonNext").click();

  return this;
 }

 clickCancel(){
  cy.get("#exitButton").click();

  return this;
 }

 // Added here not in the step Option as it might change in the future to different step
 loginFormLoadedInCurrentStep(){
  cy.get("div.login-form").should("exist");

  return this;
 }

 inSearchTicketStep = () => this.searchTicketsStep;
 inServiceStep = () => this.serviceStep;

}
export default BuyTicketsStepsPage;
