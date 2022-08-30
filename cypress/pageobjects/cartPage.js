import commonPage from "./commonPage"

const searchForNumbers = 'react-my-cart>div>div>div>button'
const emptyCart = 'react-my-cart>div>div>section:nth-child(2)>div>button'
const emptyText = 'react-my-cart>div>div>div:nth-child(1)'
const checkbox = 'tr:nth-child(2) > td:nth-child(1) > span > svg'
const credit = 'tr:nth-child(4) > td:nth-child(1) > span'

class cartPage
{
    //Buttons
    searchForNumbersButton(){
        commonPage.clickElement(searchForNumbers)
    }
    emptyCartButton(){
        commonPage.clickElement(emptyCart)
    }

    //Page Elements
    emptyCartText(){
        commonPage.getElement(emptyText).should('be.visible').should('have.text', "Your Cart Is Empty")
    }
    checkMark(){
        commonPage.getElement(checkbox).should('be.visible')
    }
    totalCredit(){
        commonPage.getElement(credit).should('be.visible')
    }
}

module.exports = new cartPage();