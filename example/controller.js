$(function(){
  var canvas = document.getElementById('canvas');
  canvas.width = 1000;
  canvas.height = 1000;
  var ctx = canvas.getContext('2d');
  var stick = joystick();
  stick.setBox(0,0,1000,1000);
  stick.setStickLength(25);
  $(canvas).mousedown(function(event){
    stick.press(event.pageX, event.pageY);
    $(canvas).mousemove(function(event){
        stick.press();
	stick.updatePosition(event.pageX,event.pageY);
    });
  })

  $(canvas).mouseup(function(event){
    stick.unpress();
    $(canvas).unbind('mousemove');
  })

  setInterval(function(){
    ctx.clearRect(0,0,canvas.width,canvas.height); 
    stick.draw(ctx);
    /*
     * stick.getValue() 
     * returns [power, radians]
     */
  },100)

})
