const join = 'main>div>div>div>div:nth-child(4)>div>a'
const applyNow = '[type="submit"]'
const cookie = '[aria-label="close and deny"]'

class commonPage {
    //Actions
    clickElement(element) {
        this.getElement(element).click();
    }
    getElement(element) {
        return cy.get(element);
    }
    sliderDrag(element) {
        this.getElement(element).click({ multiple: true, force: true }).type("{rightarrow}{rightarrow}")
    }

    //Buttons
    joinWaitListButton() {
        this.clickElement(join)
    }
    applyNowButton() {
        this.clickElement(applyNow)
    }
    cookieCloseButton() {
        this.clickElement(cookie)
    }
}
module.exports = new commonPage();