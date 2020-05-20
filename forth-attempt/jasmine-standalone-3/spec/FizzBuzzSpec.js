describe('FizzBuzz', function() {
  var thermostat;

  beforeAll(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('knows when a number is divisble by', function() {
    it('3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
    it('5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    })
    it('15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });
  describe('when a number is not divisible by', function() {
    it('3', function() {
      expect(fizzbuzz.isDivisibleByThree(7)).toBe(false);
    })
    it('5', function() {
      expect(fizzbuzz.isDivisibleByFive(11)).toBe(false);
    });
    it('15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(17)).toBe(false);
    });
  });
  describe('when playing says', function() {
    it('Fizz', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
    it('Buzz', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
    it('FizzBuzz', function() {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    })
    it('the non-3-5-15 number', function() {
      expect(fizzbuzz.play(8)).toEqual(8);
    })
  })
});
