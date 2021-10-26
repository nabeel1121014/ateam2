class SearchTicketStep {
 buyTicketsStepsPage;

 constructor(parentContext) {
  this.buyTicketsStepsPage = parentContext
 }

 checkIfStepActiveAndLoaded(){
  cy.get('[name="textBoxPartida"]').should("be.visible");

  return this;
 }
 /**
  * @param {string} fromDestination - destination name pass {downarrow}{enter} at the end of string to select first option
  */
 typeInFromDestination(fromDestination){
  cy.get('[name="textBoxPartida"]').type(fromDestination).parent("div").contains("li",fromDestination).click()

  return this;
 }

 /**
  * @param {string} toDestination - to destination name pass {downarrow}{enter} at the end of string to select first option
  */
 typeInToDestination(toDestination){
  cy.get('[name="textBoxChegada"]')
      .type(toDestination)
      .parent("div")
      .contains("li",toDestination)
      .click()

  return this;
 }

 /**
  * @param {string} date format should be DD MMMM, YYYY eg 22 October, 2021
  */
 typeAndClearInStartDate(date){
  cy.get('#datepicker-first').invoke('val', date).type(" ");


  return this;
 }

 /**
  * @param {string} returnDate format should be DD MMMM, YYYY eg 22 October, 2021
  */
 typeAndClearInReturnDate(returnDate){
  cy.get('#datepicker-second').invoke('val', returnDate).type(" ");

  return this;
 }

 /**
  * @param {string} passClass - must be either 'Comfort / 1st' or 'Tourist / 2nd'
  */
 selectPassengerClass(passClass){
  cy.xpath(`//label[contains(text(),'${passClass}')]/input`).click({force: true});

  return this;
 }

 /**
  * @param {numbber} numberOfPassengers - number of passengers eg 1,2,3,4
  */
 selectNumberOfPassengers(numberOfPassengers){
  cy.get('[data-id="nr_passageiros"]').click();
  cy.contains("li",numberOfPassengers).click();

  return this;
 }

 /**
  * @param {string} passClass - must be either 'Comfort / 1st' or 'Tourist / 2nd'
  * @param {number} numberOfPassengers - number of passengers eg 1,2,3,4
  * @param {string} fromDestination - from destination name pass {downarrow}{enter} at the end of string to select first option
  * @param {string} toDestination - to destination name pass {downarrow}{enter} at the end of string to select first option
  * @param {string} returnDate format should be DD MMMM, YYYY eg 22 October, 2021
  * @param {string} fromDate format should be DD MMMM, YYYY eg 22 October, 2021
  */
 fillSearchTicketForm = (fromDestination,toDestination, fromDate, returnDate, passengerClass, numberOfPassengers) =>
  this.typeInFromDestination(fromDestination )
      .typeInToDestination(toDestination)
      .typeAndClearInStartDate(fromDate)
      .typeAndClearInReturnDate(returnDate)
      .selectPassengerClass(passengerClass)
      .selectNumberOfPassengers(numberOfPassengers);



 clickSubmitButton(){
  cy.get('input[type="submit"]').click()

  return this;
 }

 validateSeachFieldValues(fromDestination,toDestination, fromDate, returnDate, passengerClass, numberOfPassengers){
  cy.get('[name="textBoxChegada"]').should('have.value',toDestination);
  cy.get('[name="textBoxPartida"]').should('have.value',fromDestination);
  cy.get('#datepicker-first').should('have.value',fromDate)
  cy.get('#datepicker-second').should('have.value',returnDate)
  cy.xpath(`//label[contains(text(),'${passengerClass}')]`).should('have.class','active');
  cy.get('[data-id="nr_passageiros"]').should('have.attr','title').and('contain',numberOfPassengers)

 }
}
export default SearchTicketStep;
