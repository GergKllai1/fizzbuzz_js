class FizzBuzz {
    check(number) {
        if(number === ' ' ){
            return 'Please choose a number'
        } else if(number % 15 === 0) {
            return 'FizzBuzz'
        } else if(number % 5 === 0) {
            return 'Buzz'
        } else if(number % 3 === 0) {
            return 'Fizz'
        } else {
            return 'neither of them'
        }
    }
}

