const { FizzBuzz } = require('../spec/spec.helper')
const BrowserHelpers = require ('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can input a value and get FizzBuzz results', () => {
    before(async() => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });
})