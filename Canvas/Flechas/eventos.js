//////// Variables
var x = dibujo.width/2;
var y = dibujo.height/2;
var teclas = {
  LEFT:   37,
  UP:     38,
  RIGHT:  39,
  DOWN: 40
};
var lienzo = document.getElementById("dibujo");
var papel = lienzo.getContext("2d");

document.addEventListener("keydown", dibujarTeclado);


dibujarLinea("red",149,149,150,150,papel);



//////Funciones

function dibujarTeclado(evento){
  colorcito = "blue";
  movimiento = 5;
  switch (evento.keyCode) {
    case teclas.UP:
         dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
         y-=movimiento;
    break;
    case teclas.DOWN:
        dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
        y+=movimiento;
    break;
    case teclas.LEFT:
        dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
        x-=movimiento;
    break;
    case teclas.RIGHT:
        dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
        x+=movimiento;
    break;
    default:
        console.log("otra tecla");
  }
  // console.log(evento);
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
