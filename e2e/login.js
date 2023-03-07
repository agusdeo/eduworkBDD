const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open login page', () => {
	cy.visit('http://zero.webappsecurity.com/login.html')
})
When('I submit login', () => {
    cy.get('#user_login').clear()
    cy.get('#user_login').type(username)
   
    cy.get('#user_password').clear()
    cy.get('#user_password').type(password)

    cy.get('input[name="submit"]').click()
})

Then('I should see homepage', () => {
	cy.get('h2').should('contain.text', 'Cash Accounts')
})
