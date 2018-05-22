function generateCoinChange(cents) {
  const coins = [100,50,25,10,5,1];
  let result = [];
  for(let i = 0; i < coins.length; i++) {
    // let currentNumber = Math.floor(cents/coins[i]);
    result.push(Math.floor(cents/coins[i]));
    // cents -= currentNumber * coins[i];
    cents %= coins[i];
  }
  return result;
}
console.log(generateCoinChange(12394));