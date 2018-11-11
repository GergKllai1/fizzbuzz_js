const { FizzBuzz } = require('../spec/spec.helper')
const BrowserHelpers = require ('e2e_training_wheels')
const browser = new BrowserHelpers()

describe('User can input a value and get FizzBuzz results', () => {
    before(async() => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
        fizzBuzz = new FizzBuzz
    });

    after(async () => {
        await browser.close();
    })

   /* beforeEach(async () => {
        await browser.page.reload();
    })*/

    it('starts timer when clicking on "Start Game" button', async () => {
        await browser.clickOnButton("button[id='generator']")
        let content = await browser.getContent("[id=counter")
        expect(content).to.eql('60')
    })

    it('generates random number when clicking on "Start Game" button', async () => {
        await browser.clickOnButton("button[id='generator']")
        let content = await browser.getContent("[id='random']")
        expect(content).not.to.eql(0)
    });

    it('increases score when anwsering right', async () => {
        let content = await browser.getContent("[id='random']")
        let number = parseInt(content)
        let anwser = fizzBuzz.check(number)
        if(anwser === 'Fizz'){
            await browser.clickOnButton("button[id='fizz']")
        }else if(anwser === 'Buzz'){
            await browser.clickOnButton("button[id='buzz']")
        } else if(anwser === 'FizzBuzz'){
            await browser.clickOnButton("button[id='fizzbuzz")
        } else if(anwser === 'neither of them'){
            await browser.clickOnButton("button[id='neither")
        }
        let score = await browser.getContent("[id='points']")
        expect(score).to.eql('1')
    });

    it('reset score when anwsering wrong', async () =>{
        let content = await browser.getContent("[id='random']")
        let number = parseInt(content)
        let anwser = fizzBuzz.check(number)
        if(anwser === 'Fizz'){
            await browser.clickOnButton("button[id='buzz']")
        }else{
            await browser.clickOnButton("button[id='fizz']")
        }
        let score = await browser.getContent("[id='points']")
        expect(score).to.eql('0')
    })


})