const { FizzBuzz } = require('../spec/spec.helper')
const BrowserHelpers = require ('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can input a value and get FizzBuzz results', () => {
    before(async() => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    after(async () => {
        await browser.close();
    })

    it('starts timer when clicking on "Start Game" button', async () => {
        await browser.clickOnButton("button[id='generator']")
        let content = await browser.getContent("[id=counter")
        expect(content).to.eql('60')
    })

    it('generates random number when clicking on "Start Game" button', async () => {
        await browser.clickOnButton("button[id='generator']")
        let content = await browser.getContent("[id=random")
        expect(content).not.to.eql(0)
    });

    it('increases score when anwsering right', async () => {
        let content = await browser.getContent("[id=random")
        let score = await browser.getContent("[id=points]")

        await browser.clickOnButton("button[id='fizz']", setNumber())
        expect(score).to.eql('1')
    });


})