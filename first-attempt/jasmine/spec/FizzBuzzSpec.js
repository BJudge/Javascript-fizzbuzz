describe('Fizzbuz', function() {
  var fizzbuzz = new Fizzbuzz();
    beforeEach(function() {
      var fizzbuzz = new Fizzbuzz();
    });

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisible bt 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(7)).toBe(false);
    });
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(2)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });
  describe('says', function(){
    it('"Fizz"', function() {
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });
    it('Buzz', function() {
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });
    it('FizzBuzz', function() {
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });
  });
});
