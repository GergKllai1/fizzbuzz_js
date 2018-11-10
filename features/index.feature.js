const { FizzBuzz } = require('../spec/spec.helper')
const BrowserHelpers = require ('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can input a value and get FizzBuzz results', () => {
    before(async() => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();
    });

    after(async () => {
        await browser.close();
    })

    it('clicking on "Check" button', async () => {
        await browser.fillIn("input[id='value']", { with: '3'})
        await browser.clickOnButton("input[value='Check']")
        let content = await browser.getContent("[id='display_anwser']")
        expect(content).to.eql('Fizz');
    })

})