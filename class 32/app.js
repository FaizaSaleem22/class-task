var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var left = 0
function animateChar(){
    if(event.keyCode === 39)
    char1.style.src="D:\class 32\assets\images\alicewf.gif"
    left += 10+"px"
}
window.onkeydown=animateChar