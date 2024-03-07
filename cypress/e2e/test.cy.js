describe('Is the home page accessible?', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Does the bright mode work?', () => {
        cy.get('[data-cy=bright-mode]').click()
        cy.get('[data-cy=bg]')
            .should('have.class', 'bg-red-700')
    })

    it('Does the dark mode work?', () => {
        cy.get('[data-cy=dark-mode]').click()
        cy.get('[data-cy=bg]')
            .should('have.class', 'bg-stone-800')
    })

    it('Does the form page accessible?', () => {
        cy.get('[data-cy=pizza-page]').click()
        cy.get('[data-cy=order-date]')
            .should('contain', 'Order Date')
    })

    it('Do pizza buttons work?', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('[data-cy=pizza]').click()
        cy.get('[data-cy=icon]')
            .should('have.class', 'text-green-600')
    })

    it('Do radio buttons work?', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('[data-cy=edge-classic]')
            .check().should('be.checked')
        cy.get('[data-cy=edge-feta]')
            .check().should('be.checked')
    })

    it('Do checkboxes work?', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('[data-cy=pizza-ing]').not('[disabled]')
            .check().should('be.checked')
        cy.get('[data-cy=extra-ing]')
            .should('contain', 'You can choose up to 5 ingredients!')
    })

    it('Does the e-mail part work?', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.get('[data-cy=e-mail]')
            .type('kaganberberogmail.com')
        cy.get('[data-cy=e-mail]')
            .should('contain', "Do not forget to add a symbol of '@'!")
        cy.get('input[name="emailAddress"]').clear()
        cy.get('[data-cy=e-mail]')
            .should('contain', 'The email field cannot be left blank!')
    })
})
