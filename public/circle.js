$(document).on("click mousemove","body",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 60;
    var newposY = y - 60; $(".circle").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
    var newposY = y - 30; $(".circle2").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
    
});