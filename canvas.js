// alert("Hello")


const artis = () => {
      const cv = document.getElementById("canvas");
      let pen = cv.getContext("2d");
      pen.moveTo(0,0);
      pen.lineTo(500,200);
      pen.stroke();
      pen.moveTo(1000,0);
      pen.lineTo(500,200);
      pen.stroke();
      pen.moveTo(0,400);
      pen.lineTo(500,200);
      pen.stroke();
      pen.moveTo(1000,400);
      pen.lineTo(500,200);
      pen.stroke();
      pen.moveTo(0,200);
      pen.lineTo(1000,200);
      pen.stroke();
}
