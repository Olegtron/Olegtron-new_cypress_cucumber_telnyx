import commonPage from "./commonPage"

const searchToggle = '[role="switch"]'
const searchNumbers = 'react-buy-numbers>div>div:nth-child(2)>section>form>div>div>button'
const addProduct = 'react-buy-numbers>div>div:nth-child(2)>section:nth-child(2)>table>tbody>tr:nth-child(1)>td:nth-child(8)>button'
const cart = 'react-title-bar>div>div>div>div>div>button'

class searchNumbersPage
{
    exampleSearchesToggle(){
        commonPage.clickElement(searchToggle)
    }
    searchNumbersButton(){
        commonPage.clickElement(searchNumbers)
    }
    addProductButton(){
        commonPage.clickElement(addProduct)
    }
    cartButton(){
        commonPage.clickElement(cart)
    }
}

module.exports = new searchNumbersPage();