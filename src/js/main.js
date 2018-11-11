const randomizer = document.addEventListener('DOMContentLoaded', () => {
    let randomInput = document.getElementById('random');
    let generator = document.getElementById('generator');
    let fizz = document.getElementById('fizz');
    let buzz = document.getElementById('buzz');
    let fizzbuzz = document.getElementById('fizzbuzz');
    let neither = document.getElementById('neither');
    let fizzBuzz = new FizzBuzz;
    let score = document.getElementById('points');
    let counter = document.getElementById('counter');
    let startTimer = function(){
        counter.innerHTML = 60
    setInterval(function (){
        let i = parseInt(counter.innerHTML)
        i --
        if(i >= 0){
            counter.innerHTML = i
        } if(i === 0){
            clearInterval(i);
            alert(`Game over! Your score is ${score.innerHTML}`)
        }
        }, 1000);
    }
    let randomGenerator = function () {
        randomInput.innerHTML= Math.floor(Math.random() * 1000)
    };
    let increaseScore = function() {
        let points = parseInt(score.innerHTML)
        points += 1
        score.innerHTML = points
    };
    let resetScore = function (){
        score.innerHTML = 0
    }
    generator.addEventListener('click', () => {
        randomGenerator()
        startTimer()
    });
    fizz.addEventListener('click', function() {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "Fizz"){
            randomGenerator()
            increaseScore()
        }else{
            alert(`No sorry, it's ${anwser}`)
            resetScore()
            randomGenerator()
        };
    });
    buzz.addEventListener('click', function() {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "Buzz"){
            randomGenerator()
            increaseScore()
        }else{
            alert(`No sorry, it's ${anwser}`)
            resetScore()
            randomGenerator()
        };
    });
    fizzbuzz.addEventListener('click', function() {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser === "FizzBuzz"){
            randomGenerator()
            increaseScore()
        }else{
            alert(`No sorry, it's ${anwser}`)
            resetScore()
            randomGenerator()
        };;
    });
    neither.addEventListener('click', function() {
        let value = document.getElementById('random').innerHTML
        let anwser = fizzBuzz.check(value);
        if(anwser !== "Fizz" && anwser !== "Buzz" && anwser !=="FizzBuzz"){
            randomGenerator()
            increaseScore()
        }else{
            alert(`No sorry, it's neither of them.`)
            resetScore()
            randomGenerator()
        };;
    });
})