
var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");




// Metodos

function dibujoPorClick(){
  borrarDibujo();
  var separacion;
  var lineas = parseInt(texto.value);
  separacion = parseInt(d.height/lineas)


  for (var i = 0; i < d.width/separacion; i++) {
      dibujarLinea("blue",0,i*separacion,separacion*(i+1),d.height);
  }
  dibujarLinea("black", 1,1,1,299);
  dibujarLinea("black", 1,299,299,299);

  }
function borrarDibujo(){
  lienzo.clearRect(0 , 0, d.width, d.height);
}

function dibujarLinea(color, x_init, y_init, x_fin, y_fin){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_init,y_init);
  lienzo.lineTo(x_fin,y_fin);
  lienzo.stroke();
  lienzo.closePath();

}


// console.log(d)
// document.write(ancho)
