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
    let neither = document.getElementById('neither')
    let fizzBuzz = new FizzBuzz
    let score = document.getElementById('points')
    let points = parseInt(score.innerHTML)
    fizz.addEventListener('click', function() {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "Fizz"){
            randomInput.innerHTML = randomGenerator()
            score.innerHTML = points += 1
        }else{
            alert(`No sorry, it's ${anwser}`)
            score.innerHTML = 0
        };
    });
    buzz.addEventListener('click', function() {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "Buzz"){
            randomInput.innerHTML = randomGenerator()
            score.innerHTML = points += 1
        }else{
            alert(`No sorry, it's ${anwser}`)
            this.score.innerHTML = 0
        };
    });
    fizzbuzz.addEventListener('click', function() {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "FizzBuzz"){
            randomInput.innerHTML = randomGenerator()
            this.score.innerHTML = points += 1
        }else{
            alert(`No sorry, it's ${anwser}`)
            score.innerHTML = 0
        };;
    });
    neither.addEventListener('click', function() {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser !== "Fizz" && anwser !== "Buzz" && anwser !=="FizzBuzz" ){
            randomInput.innerHTML = randomGenerator()
            score.innerHTML = points += 1
        }else{
            alert(`No sorry, it was neither of them.`)
            this.score.innerHTML = 0
        };;
    });
})