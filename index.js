var canvas = document.getElementById('magic');
var ctx = canvas.getContext('2d');

canvas.addEventListener('click', function(e, x, y) {
  var ball = makeBall(e.offsetX, e.offsetY, 50);
  ball.draw();
});
ctx.fillStyle = '#000000';
ctx.clear = function() { this.clearRect(0, 0, canvas.width, canvas.height); };

var makeBall = function(x, y, r) {
  var x = x;
  var y = y;
  var r = r;
  
  var getx = function(   ) { return x; };
  var gety = function(   ) { return y; };
  var getr = function(   ) { return r; };
  var setx = function(n  ) { x = n; };
  var sety = function(n  ) { y = n; };
  var setr = function(n  ) { r = n; };
  var incx = function(n=1) { x += n; };
  var incy = function(n=1) { y += n; };
  var incr = function(n=1) { r += n; };
  var draw = function(   ) {
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
    incx : incx,
    incy : incy,
    incr : incr,
    draw : draw,
  };
};

