describe('Fizzbuzz', function() {
  var fizzbuzz

  beforeAll(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number IS divisble by', function() {
    it('3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    })
    it('5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    })
    it('15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    })
  })
  describe('knows when a number is NOT divisible by', function() {
    it('3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    })
    it('5', function() {
      expect(fizzbuzz.isDivisibleByFive(9)).toBe(false);
    })
    it('15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(7)).toBe(false);
    })
  })
  describe('says', function() {
    it('Fizz', function() {
      expect(fizzbuzz.play(3)).toEqual("Fizz");
    })
    it('Buzz', function() {
      expect(fizzbuzz.play(5)).toEqual("Buzz");
    })
    it('FizzBuzz', function() {
      expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    })
    it('other number', function() {
      expect(fizzbuzz.play(1)).toEqual(1);
    })
  })
})
