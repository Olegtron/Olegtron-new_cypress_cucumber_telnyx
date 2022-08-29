class cartPage
{
    //buttons
    searchForNumbersButton(){
        cy.get('div.tx-Z1azstA > button').click()
    }
    emptyCartButton(){
        return cy.get('section:nth-child(2) > div.tx-1jfdru > button').should('be.visible')
    }

    //Page Elements
    emptyCartText(){
        cy.get('div.tx-ZvdLt4 > div.tx-Z1VR9ee').should('be.visible').should('have.text', "Your Cart Is Empty")
    }
    checkMark(){
        cy.get('tr:nth-child(2) > td:nth-child(1) > span > svg').should('be.visible')
    }
    totalCredit(){
        cy.get('tr:nth-child(4) > td:nth-child(1) > span').should('be.visible')
    }
}

module.exports = new cartPage();