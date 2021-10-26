class SearchTicketStepPage {
    buyTicketsStepsPage;

    constructor(parentContext) {
        this.buyTicketsStepsPage = parentContext
    }

    checkIfStepActiveAndLoaded() {
        cy.xpath('//td[contains(@class,"cp-crumbs-step-active")]').contains("Service").should("be.visible");

        return this;
    }

    /**
     * @param {string} passClass - destination name pass {downarrow}{enter} at the end of string to select first option
     */
    typeInFromDestination(fromDestination) {
        cy.get('[name="textBoxPartida"]').type(fromDestination);

        return this;
    }

    /**
     * @param {string} passClass - destination name pass {downarrow}{enter} at the end of string to select first option
     */
    typeInToDestination(toDestination) {
        cy.get('[name="textBoxChegada"]').type(toDestination);

        return this;
    }

    /**
     * @param {string} date format should be DD MMMM, YYYY eg 22 October, 2021
     */
    typeAndClearInStartDate(date) {
        cy.get('#datepicker-first').clear().type(date);

        return this;
    }

    /**
     * @param {string} date format should be DD MMMM, YYYY eg 22 October, 2021
     */
    typeAndClearInReturnDate(date) {
        cy.get('#datepicker-second').clear().type(date);

        return this;
    }

    /**
     * @param {string} passClass - must be either 'Comfort / 1st' or 'Tourist / 2nd'
     */
    selectPassengerClass(passClass) {
        cy.xpath(`//label[text()=${passClass}]/input`);

        return this;
    }

    /**
     * @param {string} passClass - number of passengers eg 1,2,3,4
     */
    selectNumberOfPassengers(numberOfPassengers) {
        cy.get("#nr_passageiros").select(`${numberOfPassengers} Passenger`);

        return this;
    }

    clickSubmitButton() {
        cy.get('input[type="submit"]').click()

        return this;
    }

    acceptTravelTerms() {
        cy.get('[name="travelTerms"]').click( {force: true})

        return this;
    }

    validateServiceTabInfoPerSearch(passengerClass, numberOfPassengers) {
        cy.get(".info-geral").as("serviceInfo");
        cy.get("@serviceInfo").contains(`${numberOfPassengers} Passenger(s)`);
        cy.get("@serviceInfo").contains(passengerClass);
        // Can do a lot more but got no time

     return this;
    }

    selectFirstAvilableOutward(){
     cy.xpath("//table[contains(@class ,'table-search-results')]//input[@name='GO']").first().check();

     return this;
    }

    selectFirstAvilableInward(){
     cy.xpath("//table[contains(@class ,'table-search-results')]//input[@name='BACK']").first().check();

     return this;
    }
}

export default SearchTicketStepPage;
