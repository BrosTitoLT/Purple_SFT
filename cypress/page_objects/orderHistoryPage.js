class OrderHistoryPage {
    getTotalAmountToPay() {
        return cy.get('tbody > tr > :nth-child(4)')
    }

    getGrandTotalAmountToPay() {
        return cy.get('strong')
    }
}

export default OrderHistoryPage