import commonPage from "./commonPage"

const random = Math.random().toString(36).substring(4,14);
const searchField = 'body > header > div > div > form > input'
const result1 = 'div.container > div > section > div:nth-child(2) > a > div > h2'
const result2 = 'div.container > div > section > div:nth-child(3) > a > div > h2 > span'
const searchErrText = 'div.container > div > section > div > div > span'

class supportCenterPage
{
clearInput() {
   commonPage.getElement(searchField).clear()
}   
searchTextInputValid() {
   commonPage.getElement(searchField).type("faq").type('{enter}')
}
resultArticle1() {
   commonPage.getElement(result1).should('contain', 'Google Verified Calls FAQ')
}
resultArticle2() {
   commonPage.getElement(result2).should('contain', 'Robocall Mitigation Database FAQ')
}
searchTextInputNotValid() {
   commonPage.getElement(searchField).type(random).type('{enter}')
}
 errorSearchText() {
   commonPage.getElement(searchErrText).should('contain', "We couldn't find any articles for:")
}
}

module.exports = new supportCenterPage();