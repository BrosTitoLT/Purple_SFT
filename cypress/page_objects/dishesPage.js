class DishesPage {
    getWeekDay(weekDay) {
        return cy.get(`:nth-child(${weekDay}) > .v-list__group__header > .v-list__group__header__append-icon > .v-icon`)
    }

    clickWeekDay(weekDay) {
        this.getWeekDay(weekDay).click()
        return this
    }

    getFirstAvailableDeliveryCompany (weekDay) {
        return cy.get(`:nth-child(${weekDay}) > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title`)
    }

    clickFirstAvailableDeliveryCompany (weekDay) {
        this.getFirstAvailableDeliveryCompany(weekDay).click()
        return this
    }

    getFirstItem() {
        return cy.get(':nth-child(2) > .layout > :nth-child(1) > :nth-child(1) > :nth-child(1) > .grey--text')
    }

    clickFirstItem() {
        this.getFirstItem().click()
        return this
    }

    getSecondItem() {
        return cy.get(':nth-child(4) > .layout > .dish-card > :nth-child(1) > .mx-1 > .grey--text')
    }

    clickSecondItem() {
        this.getSecondItem().click()
        return this
    }

    getOrderButton() {
        return cy.get('.orders-list-button')
    }

    clickOrderButton() {
        this.getOrderButton().click()
        return this
    }

    getOrderHistory() {
        return cy.get(':nth-child(3) > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title')
    }

    clickOrderHistory() {
        this.getOrderHistory().click()
        return this
    }

    getFirstItemCancel() {
        return cy.get(':nth-child(1) > :nth-child(1) > .v-chip > .v-chip__content > .v-icon')
    }

    clickFirstItemCancel() {
        this.getFirstItemCancel().click()
        return this
    }

    getSecondItemCancel() {
        return cy.get('.v-chip__content > .v-icon')
    }

    clickSecondItemCancel() {
        this.getSecondItemCancel().click()
        return this
    }
}

export default DishesPage