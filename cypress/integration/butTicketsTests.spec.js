import BuyTicketsStepsPage from "../pageObjects/buyTicketsPages/buyTicketsStepsPage";
import HomePage from "../pageObjects/homePage";
import dayjs from 'dayjs'

describe('User Visit careers page and validate filters and job openings', () => {
    const homePage = new HomePage();
    const buyTicketsStepsPage = new BuyTicketsStepsPage();

    const startTicketDate = dayjs().format('DD MMMM, YYYY');
    const returnDate = dayjs().add(3, 'days').format('DD MMMM, YYYY');
    const passengerClass = 'Comfort';
    const numberOfPassengers = 3;
    const ticketFrom = 'Abrantes';
    const ticketTo = 'Ademia';

    beforeEach(() => {
        homePage.visit().waitPageLoading();
    });

    it('User can view only  1 qa automation open job', () => {
        homePage.clickBuyTicket();
        buyTicketsStepsPage
            .inSearchTicketStep()
            .checkIfStepActiveAndLoaded()
            .fillSearchTicketForm(ticketFrom, ticketTo, startTicketDate, returnDate, passengerClass, `${numberOfPassengers} Passengers`)
            .clickSubmitButton()
            .buyTicketsStepsPage
            .inServiceStep()
            .checkIfStepActiveAndLoaded()
            .validateServiceTabInfoPerSearch(passengerClass, numberOfPassengers)
            .selectFirstAvilableOutward()
            .selectFirstAvilableInward()
            .acceptTravelTerms()
            .buyTicketsStepsPage
            .clickContinue()
            .loginFormLoadedInCurrentStep()
            .clickCancel()
            .inSearchTicketStep()
            .checkIfStepActiveAndLoaded()
            .validateSeachFieldValues(ticketFrom, ticketTo, startTicketDate, returnDate, passengerClass, `${numberOfPassengers} Passengers`)

    });

});
