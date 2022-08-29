class homePage
{
    cartButton(){
        return cy.get('div.tx-Z12IMoF > button').click()
    }
}

module.exports = new homePage();