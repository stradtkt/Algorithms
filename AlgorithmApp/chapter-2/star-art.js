function drawLeftStars(num) {
  var stars = '';
  for(var i = 1; i <= num; i++) {
    stars += "*";
  }
  console.log(stars)
}
drawLeftStars(10);

function drawRightStars(num) {
  var stars = "";
  for(var i = 1; i <= 75-num; i++) {
    stars += " ";
  }
  for(var i = 1; i <= num; i++) {
    stars += "*";
  }
  console.log(stars);
}
drawRightStars(10);

function drawCenterStars(num) {
  var stars = "";
  for(var i = 1; i <= Math.ceil(75/2-num/2); i++) {
    stars += " ";
  }
  for(var i = 1; i <= num; i++) {
    stars += "*";
  }
  for(var i = 1; i <= Math.ceil(75/2-num/2); i++) {
    stars += " ";
  }
  console.log(stars);
}
drawCenterStars(30);