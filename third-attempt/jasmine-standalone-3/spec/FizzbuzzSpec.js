describe('Fizzbuzz', function() {
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  })
  describe('knows when a number IS', function() {
    it('divisble by 3', function() {
      expect(fizzbuzz.isDivisbleByThree(3)).toBe(true);
    });
    it('divisble by 5', function() {
      expect(fizzbuzz.isDivisbleByFive(5)).toBe(true);
    });
    it('divisble by 15', function() {
      expect(fizzbuzz.isDivisbleByFifteen(15)).toBe(true);
    });
  });
  describe('knows when a number IS NOT', function() {
    it('divisble by 3', function() {
      expect(fizzbuzz.isDivisbleByThree(5)).toBe(false);
    });
    it('divisble by 5', function() {
      expect(fizzbuzz.isDivisbleByFive(12)).toBe(false);
    });
    it('divisble by 15', function() {
      expect(fizzbuzz.isDivisbleByFifteen(96)).toBe(false);
    });
  });
  describe('when playing the game', function() {
    it('says Fizz', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
    it('says Fizzbuzz', function() {
      expect(fizzbuzz.play(15)).toEqual('Fizzbuzz');
    });
    it('says Buzz', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
    it('says number', function() {
      expect(fizzbuzz.play(82)).toEqual(82);
    });
  });
});
