// Obtenha o canvas e seu contexto
var canvas = document.getElementById('grafico-velocimetro');
var ctx = canvas.getContext('2d');

// Defina as propriedades do gráfico
var valorMaximo = 180;
var valorAtual = 0;
var espessuraMarcador = 4;
var tamanhoMarcador = 16;

// Desenhe o gráfico
function desenharVelocimetro() {
	// Limpe o canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// Defina as propriedades de desenho
	ctx.lineWidth = espessuraMarcador;
	ctx.lineCap = 'round';
	ctx.strokeStyle = '#000';

	// Desenhe o círculo
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, Math.PI * 2);
	ctx.stroke();

	// Desenhe os marcadores de velocidade
	for (var i = 0; i <= valorMaximo; i += 10) {
		var angulo = Math.PI * 2 / valorMaximo * i - Math.PI / 2;
		var x1 = canvas.width / 2 + Math.cos(angulo) * (canvas.width / 2 - tamanhoMarc);
    }
}