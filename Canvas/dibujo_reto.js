var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var separacion = 10;


function dibujarLinea(color, x_init, y_init, x_fin, y_fin){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_init,y_init);
  lienzo.lineTo(x_fin,y_fin);
  lienzo.stroke();
  lienzo.closePath();

}
for (var i = 0; i < d.width/separacion; i++) {
    dibujarLinea("blue",0,i*separacion,separacion*(i+1),d.height);
    dibujarLinea("red",i*separacion,0,d.height,separacion*(i+1));
}
dibujarLinea("black", 1,1,1,299);
dibujarLinea("black", 1,299,299,299);
