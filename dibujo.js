// id de html
  const texto = document.getElementById("texto_lineas");
  const btn = document.getElementById("button");
  const canvas = document.getElementById("canvas");
  const lienzo = canvas.getContext("2d");
  const anchoCanvas = canvas.width;
  

  function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath()
  }

  btn.addEventListener("click", function dibujoporClick() {
    const cantidadLineas = parseInt(texto.value);
    var l = 0;
    var y_i, x_f, x_i, y_f;
    const colorLineas = "#FAA";
    var espacioCanvas = anchoCanvas / cantidadLineas;

  for (l = 0; l < cantidadLineas; l++)
    {
      x_i = 0
      y_i = espacioCanvas * l;
      x_f = espacioCanvas * (l + 1);
      y_f = 500
      dibujarLinea(colorLineas ,y_i, x_i, y_f, x_f);
      dibujarLinea(colorLineas ,x_i, y_i, x_f, y_f);
    }

    dibujarLinea("Black", 0, 0, 500, 0 )
    dibujarLinea("Black", 0, 0, 0, 500 )
    dibujarLinea("Black", 500, 0, 500, 500 )
    dibujarLinea("Black", 0, 500, 500, 500 )
    dibujarLinea("Black", 0, 0, 500, 500 )
    dibujarLinea("Black", 0, 0, 500, 500 )
  });
