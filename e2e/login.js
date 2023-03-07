import loginPage from './loginPage'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open login page', () => {
	loginPage.visit()
})
When('I submit login', () => {
	loginPage.fillUsername('username')
	loginPage.fillPassword('password')
	loginPage.sign_in()
})

Then('I should see homepage', () => {
	cy.get('h2').should('contain.text', 'Cash Accounts')
})
