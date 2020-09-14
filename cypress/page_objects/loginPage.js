class LoginPage {
    getEmailField() {
        return cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input')
    }

    getPasswordField() {
        return cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input')
    }

    getLoginButton() {
        return cy.get('.v-btn__content')
    }

    login(username, password) {
        this.getEmailField().type(username)
        this.getPasswordField().type(password)
        this.getLoginButton().click()
        return this
    }
}

export default LoginPage