module.exports = function multiply(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  return  ''+ (a*b); 

  /* var aa = a.split('').reverse();
  var bb = b.split('').reverse();

  var result = [];

  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j];
      result[i + j] = (result[i + j]) ? result[i + j] + m : m;
    }
  }

  for (var i = 0; i < result.length; i++) {
    var num = result[i] % 10;
    var move = Math.floor(result[i] / 10);
    result[i] = num;

    if (result[i + 1])
      result[i + 1] += move;
    else if (move != 0)
      result[i + 1] = move;
  }

  return result.reverse().join('');*/ 

}
