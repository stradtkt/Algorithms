function rockingDojoSweatshirt(num) {
  var cost = 20;
  var discount = [
    [2, 0.09],
    [3, 0.19],
    [4, 0.35]
  ];
  for(var i = 0; i < discount.length; i++) {
    if(num == discount[i][0]) {
      return num * cost * (1 - discount[i][1]);
    }
  }
  return num * cost;
}
console.log(rockingDojoSweatshirt(2));