var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisbleByThree = function(number) {
  return (this._isDivisibleBy(number, 3));
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return (this._isDivisibleBy(number, 5));
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return (this._isDivisibleBy(number, 15));
};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0)
};

Fizzbuzz.prototype.play = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return ("Fizzbuzz");
  }if (this.isDivisbleByThree(number)) {
    return ("Fizz");
  }if (this.isDivisibleByFive(number)) {
    return ("Buzz");
  }
  return number;
};
