describe('Fizzbuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });
  describe('knows when a number IS', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisbleByThree(3)).toBe(true);
    });
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });
    it('divisble by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });
  describe('knows when a number IS NOT', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisbleByThree(5)).toBe(false);
    });
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(8)).toBe(false);
    });
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(12)).toBe(false);
    });
  });
  describe('says', function() {
    it('Fizz', function() {
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    });
    it('Fizzbuzz', function() {
      expect(fizzbuzz.play(15)).toEqual("Fizzbuzz");
    });
    it('Buzz', function() {
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    });
    it('the non divisble number', function() {
      expect(fizzbuzz.play(8)).toEqual(8);
    });
  });
});
