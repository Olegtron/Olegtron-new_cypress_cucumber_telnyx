import commonPage from "./commonPage"

const cart = 'react-title-bar>div>div>div>button'

class homePage
{
    cartButton(){
        commonPage.clickElement(cart)
    }
}

module.exports = new homePage();