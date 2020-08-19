function squareDigits(num) {
  return parseInt(
      String(num)
          .split("")
          .map(digit => String(Math.pow(parseInt(digit), 2)))
          .join(""));
}


console.log(squareDigits(9119));