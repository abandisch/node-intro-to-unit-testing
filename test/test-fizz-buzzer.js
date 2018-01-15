// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizz buzzer', function() {
  it('should return buzz when input is only divisible by 5', function () {
    const buzzNumbers = [
      {num: 5, expected: 'buzz'},
      {num: 10, expected: 'buzz'},
      {num: 25, expected: 'buzz'},
    ];
    buzzNumbers.forEach(function(input) {
      let ans = fizzBuzzer(input.num);
      expect(ans).to.equal(input.expected);
    });
  });

  it('should return fizz when input is only divisible by 3', function () {
    const fizzNumbers = [
      {num: 3, expected: 'fizz'},
      {num: 6, expected: 'fizz'},
      {num: 9, expected: 'fizz'},
    ];
    fizzNumbers.forEach(function(input) {
      let ans = fizzBuzzer(input.num);
      expect(ans).to.equal(input.expected);
    });
  });

  it('should return fizz-buzz when input is divisible by 3 & 5', function () {
    const fizzBuzzNumbers = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'},
      {num: 45, expected: 'fizz-buzz'},
    ];
    fizzBuzzNumbers.forEach(function(input) {
      let ans = fizzBuzzer(input.num);
      expect(ans).to.equal(input.expected);
    });
  });

  it('should return the same number when input is not divisible by 3 or 5', function () {
    const nonFizzBuzzNumbers = [
      {num: 2, expected: 2},
      {num: 4, expected: 4},
      {num: 8, expected: 8},
    ];
    nonFizzBuzzNumbers.forEach(function(input) {
      let ans = fizzBuzzer(input.num);
      expect(ans).to.equal(input.expected);
    });
  });  

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [ 'a', {}, [], false ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});