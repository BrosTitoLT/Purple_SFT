import LoginPage from '../../page_objects/loginPage.js'
import DishesPage from '../../page_objects/dishesPage.js'
import OrderHistoryPage from '../../page_objects/orderHistoryPage.js'
/// <reference types="cypress"/>

const loginPage = new LoginPage()
const dishesPage = new DishesPage()
const orderHistoryPage = new OrderHistoryPage()

const weekDay = 5;

describe('Cost calculations', () => {
    beforeEach('Login as user', () => {
        cy.visit('/login-password')
        loginPage.login('titas@purple.kns', 'Grape100')
    })
    it('Add two dishes, navigate to order history and check if the total amounts to pay match', () => {
        dishesPage.clickWeekDay(weekDay)
        .clickFirstAvailableDeliveryCompany(weekDay)
        .clickFirstItem()
        .clickSecondItem()
        .clickOrderButton()
        .clickOrderHistory()

        orderHistoryPage.getTotalAmountToPay()
        .then(($elem) => {
            let totalAmountToPay = $elem.text()
            orderHistoryPage.getGrandTotalAmountToPay().should('contain', totalAmountToPay)
        })
    })
})

after('Deletes added orders', () => {
    dishesPage.clickWeekDay(weekDay)
    .clickFirstAvailableDeliveryCompany(weekDay)
    .clickFirstItemCancel()
    .clickSecondItemCancel()
    .clickOrderButton()
})
