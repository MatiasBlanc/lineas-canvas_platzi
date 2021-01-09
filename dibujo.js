// id de html
  var texto = document.getElementById("texto_lineas")
  var boton = document.getElementById("botoncito")
  boton.addEventListener("click", dibujoporClick );

  var d = document.getElementById("dibujito");
  var ancho = d.width;
  var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath()
  }

  function dibujoporClick()
  {
    var lineas = parseInt(texto.value);
    var l = 0
    var y_i, x_f, x_i, y_f;
    var colorsito = "#FAA";
    var espacio = ancho / lineas;

  for (l = 0; l < lineas; l++)
    {
      x_i = 0
      y_i = espacio * l;
      x_f = espacio * (l + 1);
      y_f = 500
      dibujarLinea(colorsito ,y_i, x_i, y_f, x_f);
      dibujarLinea(colorsito ,x_i, y_i, x_f, y_f);
    }

    dibujarLinea("Black", 0, 0, 500, 0 )
    dibujarLinea("Black", 0, 0, 0, 500 )
    dibujarLinea("Black", 500, 0, 500, 500 )
    dibujarLinea("Black", 0, 500, 500, 500 )
    dibujarLinea("Black", 0, 0, 500, 500 )
    dibujarLinea("Black", 0, 0, 500, 500 )
  }
