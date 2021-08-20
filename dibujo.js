  const form = document.getElementById('form');
  const canvas = document.getElementById("canvas");
  const canvasType = canvas.getContext("2d");

  const drawLine = (color, x_initial, y_initial, x_final, y_final) => {
    canvasType.beginPath();
    canvasType.strokeStyle = color;
    canvasType.moveTo(x_initial, y_initial);
    canvasType.lineTo(x_final, y_final);
    canvasType.stroke();
    canvasType.closePath();
  }

  form.addEventListener("submit", evt => {
    const numberOfLines = parseInt(form.NumberLines.value);
  if (numberOfLines && numberOfLines > 0 && numberOfLines !== "") {
    const totalCanvas = canvas.width / numberOfLines;
    const colorLines = '#FAA';
    const colorFrame = '#eee';

  for (let i = 0; i < numberOfLines; i++) {
      let x_i = 0;
      let y_i = totalCanvas * i;
      let x_f = totalCanvas * (i + 1);
      let y_f = 500;
      drawLine(colorLines ,y_i, x_i, y_f, x_f);
      drawLine(colorLines ,x_i, y_i, x_f, y_f);
  }
  // Picture frame
    drawLine(colorFrame, 0, 0, 500, 0 );
    drawLine(colorFrame, 0, 0, 0, 500 );
    drawLine(colorFrame, 500, 0, 500, 500 );
    drawLine(colorFrame, 0, 500, 500, 500 );
    evt.preventDefault()
  }
});
