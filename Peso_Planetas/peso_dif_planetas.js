//Variables

var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupyter = 24.8;
var planeta;
var planeta1;
var peso;
var peso_final;

var usuario = prompt("Cual es tu peso?:");
var planeta = parseInt(prompt("Planeta. \n  1 es Marte 2 es Jupiter :"))
peso = parseInt(usuario);

//Funciones

function pesoFinal(peso, planeta){
  if (planeta == 1) {
    peso_final = parseInt(peso * g_marte / g_tierra);
    planeta1 = "Marte";
    document.write("Tu peso en <strong> " + planeta1 + "</strong> " + peso_final + " Kilos " );
  }
  else if (planeta == 2){
    peso_final = pars(peso * g_jupyter / g_tierra);
    planeta1 = "Jupyter";
    document.write("Tu peso en <strong> " + planeta1 + "</strong> " + peso_final + " Kilos " );
  }
  else{document.write("Idiota")}
}


pesoFinal(peso,planeta);
