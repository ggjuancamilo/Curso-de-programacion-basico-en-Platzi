//////// Variables


var lienzo = document.getElementById("dibujo");
var papel = lienzo.getContext("2d");

document.addEventListener("mousedown", dibujarMouse);
// lienzo.addEventListener("mousemove", dibujarMouse);
lienzo.addEventListener("mouseup", dibujarMouse);






//////Funciones

function dibujarMouse(event){
  colorcito = "blue";
  dibujando = false;
  x_init =0;
  y_init = 0;
  x_fin = 0;
  y_fin = 0;
  if (event.mousedown) {
    x_init = event.clientX;
    y_init = event.clientY;
  }
  if (event.mouseup) {
    x_fin = event.clientX;
    y_fin = event.clientY;
    dibujarLinea(colorcito, x_init, y_init, x_fin , y_fin, papel);
  }

  // while (dibujando == true) {
  //
  //   if (event.mouseup) {
  //     dibujando = false;
  //   }
  // }
  // movimiento = 5;
  console.log(x_init, y_init, x_fin , y_fin);

}

function dibujarLinea(color, x_init, y_init, x_fin, y_fin, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(x_init,y_init);
  lienzo.lineTo(x_fin,y_fin);
  lienzo.stroke();
  lienzo.closePath();

}
