$(document).ready(function(){
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	
	var cw = 10;
	var posicao = 0;
	var px = [0, 20, 40, 40, 40, 20, 0, 0];
	var py = [0, 0, 0, 20, 40, 40, 40, 20];

	ctx.fillStyle = "#336699";
	ctx.strokeStyle = "#252527";

	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			ctx.fillRect(i * 20, j * 20, 20, 20);
			ctx.strokeRect(i * 20, j * 20, 20, 20);
		}
	};

	setInterval(play, 150);

	function play() {
		ctx.fillStyle = "#252527";
		ctx.fillRect(px[posicao], py[posicao], 20, 20);
		ctx.fillStyle = "#336699";

		if (posicao == 0) {
			ctx.fillRect(px[px.length - 1], py[py.length - 1], 20, 20);
			ctx.strokeRect(px[px.length - 1], py[py.length - 1], 20, 20);				
		} else {
			ctx.fillRect(px[posicao - 1], py[posicao - 1], 20, 20);
			ctx.strokeRect(px[posicao - 1], py[posicao - 1], 20, 20);	
		}

		posicao++;

		if (posicao > 7) { 
			posicao = 0 
		};
	}
});