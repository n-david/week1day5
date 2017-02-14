function maxProfit(prices) {
  var lowest = prices[0];
  var highest = null;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i + 1] - prices[i] > 0) {
      if (prices[i + 1] > highest) {
        highest = prices[i + 1];
      }
      if (prices[i] < lowest) {
        lowest = prices[i];
      }
    }
  }
return highest - lowest > 0 ? highest - lowest : -1;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));