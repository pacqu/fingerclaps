var canvas = document.getElementById('magic');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#000000';
ctx.clear = function() { this.clearRect(0, 0, canvas.width, canvas.height); };

var makeBall = function() {
  var x = 250;
  var y = 250;
  var r = 50;
  
  var getx = function( ) { return x; };
  var gety = function( ) { return y; };
  var getr = function( ) { return r; };
  var setx = function(n) { x = n; };
  var sety = function(n) { y = n; };
  var setr = function(n) { r = n; };
  var draw = function( ) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  };
  
  return {
    getx : getx,
    gety : gety,
    getr : getr,
    setx : setx,
    sety : sety,
    setr : setr,
    draw : draw,
  };
};

var ball = makeBall();
var animate = function() {
  ctx.clear();
  ball.draw();
  window.requestAnimationFrame(animate);
};

animate();
