var slider = document.getElementById('slider');
function right_pic () {
    var newLeft;
    if(slider.style.left === "-7200px"){
        newLeft = -2400;
    }else{
        newLeft = parseInt(slider.style.left)-1200;
    }
    slider.style.left = newLeft + "px";
}
function left_pic () {
    var newLeft;
    if(slider.style.left === "0px"){
        newLeft = -4800;
    }else{
        newLeft = parseInt(slider.style.left)+1200;
    }
    slider.style.left = newLeft + "px";
}
var timer = null;
function autoPlay () {
    timer = setInterval(function () {
        right_pic();
    },1000);
}
autoPlay();