var canvas = document.getElementById('magic');
var ctx = canvas.getContext('2d');
//JS Array to keep track of balls in canvas
var balls = [];

canvas.addEventListener('click', function(e, x, y) {
		var ball = makeBall(e.offsetX, e.offsetY, 50);
		balls.push(ball);
		ball.draw();
});


var id = 0;
		
var animate = function(){
		ctx.clear();
		for (i in balls) {
				//console.log(balls[i]);
				var x = balls[i].getx();
				var y = balls[i].gety();
				var r = balls[i].getr();
				if (x - r <= 0 || x + r >= canvas.width){
						balls[i].oppvx();
				}
				if (y - r <= 0 || y + r >= canvas.height){
						balls[i].oppvy();
				}
				
				balls[i].incx();
				balls[i].incy();
				balls[i].draw();
		};
		id = window.requestAnimationFrame(animate);	
};

var stoop = function(){
		window.cancelAnimationFrame(id);
};

var staart = function(){
		stoop();
		animate();
};

var start = document.getElementById("start");
start.addEventListener('click',staart);

var stop = document.getElementById("stop");
stop.addEventListener('click',stoop);

ctx.fillStyle = '#000000';
ctx.clear = function() { this.clearRect(0, 0, canvas.width, canvas.height); };

var makeBall = function(x, y, r) {
		var x = x;
		var y = y;
		var r = r;
		var vx = 1;
		var vy = 1;

		
		var getx = function(   ) { return x; };
		var gety = function(   ) { return y; };
		var getr = function(   ) { return r; };
		var getvx = function(   ) { return vx; };
		var getvy = function(   ) { return vy; };

		var setx = function(n  ) { x = n; };
		var sety = function(n  ) { y = n; };
		var setr = function(n  ) { r = n; };
		var setvx = function(n  ) { vx = n; };
		var setvy = function(n  ) { vy = n; };

		var oppvx = function() {vx *= -1};
		var oppvy = function() {vy *= -1};
		
		var incx = function(n=vx) { x += n; };
		var incy = function(n=vy) { y += n; };
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
				getvx : getvx,
				getvy : getvy,
				
				setx : setx,
				sety : sety,
				setr : setr,
				setvx : setvx,
				setvy : setvy,

				oppvx: oppvx,
				oppvy: oppvy,
				
				incx : incx,
				incy : incy,
				incr : incr,
				draw : draw,
		};
};

