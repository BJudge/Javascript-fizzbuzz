var FizzBuzz = function () {};

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return (this._isDivisibleBy(number, 3));
};

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return (this._isDivisibleBy(number, 5));
}

FizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return (this._isDivisibleBy(number, 15));
}

FizzBuzz.prototype._isDivisibleBy = function(number, denominator) {
  return (number % denominator === 0);
}

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return 'FizzBuzz';
  } if (this.isDivisibleByThree(number)) {
    return 'Fizz';
  } if (this.isDivisibleByFive(number)) {
    return 'Buzz';
  }
  return (number);
}
