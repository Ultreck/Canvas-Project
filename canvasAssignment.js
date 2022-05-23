// alert("Hello")

// Canvas environment setup
const canvas = document.getElementById("canvas");
const freeForm = document.getElementById("freeForm");
canvas.width = window.innerWidth-60;
canvas.height = "600";

// Canvas context setup
const ctx = canvas.getContext("2d");
let canvasBackgroundColor = "white"
ctx.fillStyle = canvasBackgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height)

// Pre defined variables
let penColor = "black";
let penWidth = "2";
let isDrawing = false;
let sx, sy, ex, ey;

// Start free form functions........
const startFreeForm = (event) =>
{
ctx.moveTo(event.clientX - canvas.offsetLeft, 
      event.clientY-canvas.offsetTop);
ctx.beginPath();
event.preventDefault();
}
// Draw free form function 
const drawFreeForm = (event) => {
      if (isDrawing)
      {
            ctx.lineTo(event.clientX - canvas.offsetLeft, 
                  event.clientY - canvas.offsetTop);
                  ctx.strokeStyle = penColor;
                  ctx.lineWidth = penWidth;
                  ctx.lineCap = "round";
                  ctx.lineJoin = "round";
                  ctx.stroke();
}
}
// Stop free form function
const stopFreeForm = () => {
  if (isDrawing)
  {
        ctx.stroke();
        ctx.closePath();
        isDrawing = false;
  }
}


// Free form event listener function........
const freeButton = () => {
      isDrawing = true;
      canvas.addEventListener("mousedown", startFreeForm, false);
      canvas.addEventListener("mousemove", drawFreeForm, false);
      canvas.addEventListener("mouseup", stopFreeForm, false);
}

// line start functions .......
let lineStart = (event) => {
      ctx.beginPath();
      sx = event.x;
      sy = event.y;
}
// Line stop function
let lineStop = (event) => {
     if (isDrawing)
     {
      ex = event.x;
      ey = event.y;
      lineDraw();
      // ctx.closePath();
     }
}
// Line draw function
let lineDraw = () => {
     if (isDrawing)
     {
      ctx.moveTo(sx, sy);
      ctx.lineTo(ex, ey);
      ctx.strokeStyle = penColor;
      ctx.lineWidth = penWidth;
      ctx.stroke();
     }
}
// Line event listener function
const lineButton = () => {
      isDrawing = true;
      canvas.addEventListener("mousedown", lineStart, false);
      canvas.addEventListener("mouseup", lineStop, false);
}
// Start Circle function
const startCircle = (event) => {
      ctx.moveTo(event.clientX - canvas.offsetLeft, 
            event.clientY-canvas.offsetTop);
      ctx.beginPath();
      event.preventDefault();
}
// Circle draw function
const circleDraw = (event) => {
     if (isDrawing)
     {
            ctx.arc(event.clientX , 
            event.clientY, event.clientX, 
            event.clientY, event.clientX, 
            event.clientY, 2*Math.PI);
            ctx.strokeStyle = penColor;
            ctx.lineWidth = penWidth;
            ctx.stroke();
     }
     
      }
      // Circle event listener function
      const circleButton = () => {
            // isDrawing = true;
            canvas.addEventListener("mousedown", startCircle, false);
            canvas.addEventListener("mouseup", circleDraw, false);
      }
      // Clear function
      const clearCanvas = () => {
            ctx.fillStyle = canvasBackgroundColor;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            isDrawing = false;
      }
      // Drop pen function
      const dropPen = () => {
            if (isDrawing)
            {
                  ctx.stroke();
                  ctx.closePath();
                  isDrawing = false;
            }
            // isDrawing = false;
            // sx = "";
            // sy = "";
            // ex = "";
            // ey = "";
      }