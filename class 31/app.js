// method1
// function hideImg(e){
//     e.style.display="none"
// }

// method2
// function hideImg(){
//     var sun = document.getElementById("sun")
//     sun.style.display="none"
// }

// method3
// function  hideImg(){
//     var sun = document.getElementById("sun")
//     sun.className="hide"
// }

// if img has already class given, use this so latter class won't update former class.
function  hideImg(){
    var sun = document.getElementById("sun")
    sun.className +=" hide"
 }

 function changePic (picId, url){
    document.getElementById(picId).src=url
    
 }