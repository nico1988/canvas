var c = document.querySelector('#c')
var ctx = c.getContext("2d");
var img = new Image();
img.onload = function () {
    console.log('loging img');
    // ctx.drawImage(img,10,10,c.width,c.height);
    var savedate = c.toDataURL();
    // window.open(savedate)
    // console.log(savedate.length);
    ctx.fillStyle = 'green'; // 填充颜色
    ctx.fillRect(0,0,100,100) // 填充一个方块
    ctx.strokeRect(100,100,100,100) //画一个方块
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.lineTo(300,400);
    ctx.lineTo(400,400);
    ctx.lineTo(400,300);
    ctx.lineTo(300,300);
    ctx.strokeStyle = "yellow"
    ctx.strokeRect(100,100,200,200)
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.moveTo(125,125)
    ctx.lineTo(225,125)
    ctx.lineTo(225,225)
      ctx.lineTo(125,125)
    ctx.stroke()
    ctx.fill()
    ctx.fillStyle = 'white'
    ctx.strokeStyle = "black"
    ctx.font = '36px Impact'
    ctx.textAlign = 'center'
    ctx.strokeText("hello nico",c.width/2,50)
}
img.src = './daydayup.png'
