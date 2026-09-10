var students = ["micheal", "john", "tony"]
var score = [320, 230, 480]
var totalMarks = 500
var percentage0 = (score[0]*100)/totalMarks
var percentage1 = (score[1]*100)/totalMarks
var percentage2 = (score[2]*100)/totalMarks
document.write (` Score of  ${students[0]} is ${ score[0]}. Percentage: ${percentage0} % <br> Score of  ${students[1]} is ${ score[1]}. Percentage: ${percentage1} % <br> Score of  ${students[2]} is ${ score[2]}. Percentage: ${percentage2} % <br>`)
var color = ["red", "yellow", "blue", "pink"]
document.write (color + "<br>")
var begin = prompt("Which color you like to put at the beginning?")
color.unshift (begin)
document.write (color+ "<br>")
var end = prompt("Which color you like to put at the end?")
color.push (end)
document.write (color+ "<br>")
color.unshift ("purple", "green")
document.write (color+ "<br>")