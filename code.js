function Mostrartexto(textCifrado) {
	document.getElementById("imagen1").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("texto1").innerHTML = textCifrado;
	document.getElementById("copiar").style.display = "show";
	document.getElementById("copiar").style.display = "inherit";
}
function encriptar() {
	var texto = document.getElementById("inpuText").value.toLowerCase();
	var textCifrado = texto.replace(/e/igm,"enter");
	var textCifrado = textCifrado.replace(/o/igm,"ober");
	var textCifrado = textCifrado.replace(/i/igm,"imes");
	var textCifrado = textCifrado.replace(/a/igm,"ai");
	var textCifrado = textCifrado.replace(/u/igm,"ufat");
	Mostrartexto(textCifrado);
}
function desencriptar() {
	var texto = document.getElementById("inpuText").value.toLowerCase();
	var textCifrado = texto.replace(/enter/igm,"e");
	var textCifrado = textCifrado.replace(/ober/igm,"o");
	var textCifrado = textCifrado.replace(/imes/igm,"i");
	var textCifrado = textCifrado.replace(/ai/igm,"a");
	var textCifrado = textCifrado.replace(/ufat/igm,"u");
	Mostrartexto(textCifrado);
}
function copiar() {
	var frases = document.querySelector("#texto1");
	frases.select();
	document.execCommand("copy");
}