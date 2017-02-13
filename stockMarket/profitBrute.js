function maxProfit(stockPrices) {
  var profitArray = [];
  for (var i = 0; i < stockPrices.length; i++) {
    var j = i + 1;
    while (j < stockPrices.length) {
      profitArray.push(stockPrices[j] - stockPrices[i]);
      j++;
    }
  }
  var max = Math.max.apply(this, profitArray);

  return max < 1 ? max = -1 : max;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
