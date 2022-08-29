const random = Math.random().toString(36).substring(4,14);

class supportCenterPage
{
searchTextInputValid() {
    cy.get('body > header > div > div > form > input').type("faq").type('{enter}')
 }
 resultArticle1() {
    cy.get('div.container > div > section > div:nth-child(2) > a > div > h2').should('contain', 'Google Verified Calls FAQ')
 }
 resultArticle2() {
    cy.get('div.container > div > section > div:nth-child(3) > a > div > h2 > span').should('contain', 'Robocall Mitigation Database FAQ')
 }
 searchTextInputNotValid() {
   cy.get('body > header > div > div > form > input').type(random).type('{enter}')
 }
errorSearchText() {
   cy.get('div.container > div > section > div > div > span').should('contain', "We couldn't find any articles for:")
 }
}

module.exports = new supportCenterPage();