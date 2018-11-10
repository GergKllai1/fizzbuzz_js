class FizzBuzz {
    check(number) {
        if(number === ''){
            return 'Please choose a number'
        } else if(number % 15 === 0) {
            return 'FizzBuzz'
        } else if(number % 5 === 0) {
            return 'Buzz'
        } else if(number % 3 === 0) {
            return 'Fizz'
        } else {
            return number
        }
    }
}

const randomizer = document.addEventListener('DOMContentLoaded', () => {
    let randomInput = document.getElementById('random')
    let randomGenerator = function () {
        return Math.floor(Math.random() * 10)
    }
    let generator = document.getElementById('generator')
    generator.addEventListener('click', () => {
        randomInput.innerHTML = randomGenerator();
    })
    let fizz = document.getElementById('fizz');
    let buzz = document.getElementById('buzz');
    let fizzbuzz = document.getElementById('fizzbuzz');
    let fizzBuzz = new FizzBuzz
    let points = parseInt(document.getElementById('points').innerHTML)
    fizz.addEventListener('click', () => {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "Fizz"){
            randomInput.innerHTML = randomGenerator()
            
        }else{
            alert(`No sorry, it's ${anwser}`)
        };
    });
    buzz.addEventListener('click', () => {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "Buzz"){
            randomInput.innerHTML = randomGenerator()
        }else{
            alert(`No sorry, it's ${anwser}`)
        };
    });
    fizzbuzz.addEventListener('click', () => {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "FizzBuzz"){
            randomInput.innerHTML = randomGenerator()
        }else{
            alert(`No sorry, it's ${anwser}`)
        };;
    })
})