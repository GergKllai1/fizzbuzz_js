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