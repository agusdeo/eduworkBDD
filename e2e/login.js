/// <reference types="cypress" />

describe('Login / Logout Test', () => {
	beforeEach(() => {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.url('include', 'index.html')
		cy.get('#signin_button').click()
	})
	it('Should login using invalid data', () => {
		cy.fixture('example').then((user) => {
			const username = user.invalidUser.username
			const password = user.invalidUser.password

			cy.loginZWA(username, password)

			cy.get('.btn').click()
			cy.get('.alert-error')
				.should('be.visible')
				.and('contain.text', 'Login and/or password are wrong.')
		})
	})

	it('Should login using valid data', () => {
		cy.fixture('example').then((user) => {
			const username = user.validUser.username
			const password = user.validUser.password

			cy.loginZWA(username, password)
			cy.get('h2').should('contain.text', 'Cash Accounts')
		})
	})
	it('Should Logout from the Application', () => {
		cy.fixture('example').then((user) => {
			const username = user.validUser.username
			const password = user.validUser.password

			cy.loginZWA(username, password)

			cy.contains('username').click()
			cy.get('#logout_link').click()

			cy.get('#signin_button').should('contain.text', 'Signin')
		})
	})
})
