var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisbleByThree = function(number) {
  return (this._isDivisibleBy(number, 3));
}

Fizzbuzz.prototype.isDivisbleByFive = function(number) {
  return (this._isDivisibleBy(number, 5));
}

Fizzbuzz.prototype.isDivisbleByFifteen = function(number) {
  return (this._isDivisibleBy(number, 15));
}

Fizzbuzz.prototype._isDivisibleBy = function(number, numerator) {
  return (number % numerator === 0);
}

Fizzbuzz.prototype.play = function(number) {
  if(this.isDivisbleByFifteen(number)) {
    return "Fizzbuzz";
  }
  if (this.isDivisbleByThree(number)) {
    return "Fizz";
  }
  if(this.isDivisbleByFive(number)) {
    return "Buzz";
  }
  return number;
}
