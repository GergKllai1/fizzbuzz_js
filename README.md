# FizzBuzz Game
###### Created by Gregory Kallai

##### We all know and love the kids' game fizzbuzz. The rules are quite simple:
- If you say a number divisible by 3 you say Fizz
- If you say a number divisible by 5 you say Buzz
- If you say a number divisible by both 3 and 5 you say FizzBuzz

##### Normally you would start at 1 and go upwards, however in this game I changed up a little. 

- You will get a random number between 1 and 1000 and you have to say according to the rules Fizz, Buzz, FizzBuzz or neither.
- You have 60 seconds to get as many as you can, but beware! If you make a mistake your score will be reset.
- Good luck!


### Anwsers to the questions:
1. In your README to the best of your knowledge please explain what the following lines of code do
```js
let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
- With this code we import the modules from the fizz_buzz.js which we can use in the tests.

2. In your README to the best of your knowledge please explain why we are placing the

``` js
let fizzBuzz = new FizzBuzz
```

outside the it block?

- Because we are creating a describe block where we create the fizzBuzz as an instance of the FizzBuzz class and we can use it in all of the it blocks.

3. n your README to the best of your knowledge please explain the difference between using `===` and `==` in JS?

- `===` means the 2 types and values are equal to each other, the `==` means the 2 variable are equal to each other in a broader sense for instance ` 50 == '50' ` would return true, where `50 === '50'` would return false.

4. In your README to the best of your knowledge please explain why we are moving `(number % 5 === 0)` to the top?

- The if else statement evaluates in order, meaning when the first arguments return true it stops. I see no reason to move up this argument to the top, the important argument is `(number % 15 === 0)` because that has to be evaluated first. The only reason I can think of is the code looks cleaner and nicer that it is descending all the way.

5. In your README to the best of your knowledge please explain the difference between feature and unit test

- Unit test is to check whether the code is performing the functions we want them to. The feature test is to check what would the user see when using our application, here we check that our code is communicating the way we want it with the DOM.

6. In your README to the best of your knowledge please explain what expectations in the context of testing are

- Expectation is the result we want to see after the test runs. We expect one part of the DOM to equal or not to equal to something.

7. In your README to the best of your knowledge please write a line to line explanation of what is happening in this code
```js
<script src="src/js/fizz-buzz.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let button = document.getElementById('button')
            let displayDiv = document.getElementById('display_answer')
            button.addEventListener('click', () =>{
                let value = document.getElementById('value').value
                let fizzBuzz = new FizzBuzz
                let result = fizzBuzz.check(value)
                displayDiv.innerHTML = result;
            })
        })
    </script>
```

- It waits for the DOM to load, search for the button and the anwser div element. When we click on the button we get the value out of the value input element, run the FizzBuzz check method on it and display the return value of this method on the anwser div element.

8. In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?

- It is a source for content which we can implement to our code. For instance we can use a cdn for tailwind to have most of its functionality available in our code.