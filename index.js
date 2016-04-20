var canvas = document.getElementById('magic');
var ctx = canvas.getContext('2d');
ctx.fillstyle = ?

var makeBall = function() {
  var x = 0;
  var y = 0;
  var r = 1;
  var draw = function() {
    ctx.arc(x, y, r, 0, Math.PI * 2);
  };
  
  return {
    draw : draw,
  };
}
