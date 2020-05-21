class FizzBuzz {
  isDivisibleByThree(number) {
    return (number % 3 === 0);
  }
  isDivisibleByFive(number) {
    return (number % 5 === 0);
  }
  isDivisibleByFifteen(number) {
    return (number % 15 === 0);
  }
  play(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "FizzBuzz";
    }
    if (this.isDivisibleByThree(number)) {
      return "Fizz";
    }if (this.isDivisibleByFive(number)) {
      return "Buzz";
    }
    return number;
  }
}
