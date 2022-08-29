class searchNumbersPage
{
    exampleSearchesToggle(){
        cy.get('div.BuyNumbers__RightActionsContainer-hbrWqZ.bPPPxc > div > button').click()
    }
    searchNumbersButton(){
        cy.get('div.SearchFilterForm__SubmitContainer-dHQiFa.ePanDY > button').click()
    }
    addProductButton(){
        cy.get('tr:nth-child(1) > td:nth-child(8) > button').click()
    }
    cartButton(){
        cy.get('.Button_withBadge-tx-Z1XU7xF > div > .Button_button-tx-22oxFy').click()
    }
}

module.exports = new searchNumbersPage();