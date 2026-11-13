// var img = document.createElement("img")
// img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOwgV7YKOWPZEg85KbvUBwyvPa6fBfTZZ1x_fH4QX_hn4mKGKdSsG2flE&s=10")
// var caption = document.createTextNode("The cat")
// var p = document.createElement("p")
// p.appendChild(caption)
// document.body.appendChild(img)
// document.body.appendChild(p)
// p.style.fontSize = ("30px")

// to add any element , will come in last
var main = document.getElementById("main")

var h1 = document.createElement("h1")
var text = document.createTextNode("hello world")
h1.appendChild(text)
console.log(h1);
main.appendChild(h1)

// to add any element at any place , get inner html than copy elements to put tghem any where you want
// var mainText = main.innerHTML
// console.log(mainText);
// console.log(main.parentNode.children[0].innerHTML="<h1>Hello</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum, minus ex adipisci earum odio et totam autem asperiores non animi necessitatibus quos aperiam magni exercitationem quo vitae. Reprehenderit, veniam! Ipsa rem placeat aspernatur, quam veniam odit maxime accusamus hic dolores sapiente aliquam reprehenderit sed mollitia adipisci, fugiat, eius facere!</p>");
