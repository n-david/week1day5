function check(cardNumber) {
  var cardNumberArray = String(cardNumber).split('');
  var sumOfDigits;
  var i = cardNumberArray.length;
  while (i > 0 && i !== 1) {
    i -= 2;
    cardNumberArray[i] = cardNumberArray[i] * 2;
    if (cardNumberArray[i] >= 9) {
      cardNumberArray[i] = String(cardNumberArray[i]).split('').reduce(function(a, b) { return Number(a) + Number(b); }, 0);
    }
  }
  sumOfDigits = cardNumberArray.reduce(function(a, b) { return Number(a) + Number(b); }, 0);
  console.log(cardNumberArray);
  console.log(sumOfDigits);
  return (sumOfDigits % 10 === 0);
}

module.exports = check;
