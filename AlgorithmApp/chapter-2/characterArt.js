function drawLeftChars(num, char) {
  var output = "";
  for(var i = 1; i <= num; i++) {
    output+=char;
  }
  console.log(output);
}
drawLeftChars(20, 'f');

function drawRightChars(num, char) {
  var output = "";
  for(var i = 1; i <= 75-num; i++) {
    output+=" ";
  }
  for(var i = 0; i <= num; i++) {
    output+=char;
  }
  console.log(output);
}
drawRightChars(20, 'f');

function drawCenterChars(num, char) {
  var output = "";
  for(var i = 1; i <= Math.ceil(75/2-num/2); i++) {
    output+=" ";
  }
  for(var i = 0; i <= num; i++) {
    output+=char;
  }
  for(var i = 1; i <= Math.ceil(75/2-num/2); i++) {
    output+=" ";
  }
  console.log(output);
}
drawCenterChars(20, 'f');
