// 
var urdu = prompt("Your marks in urdu?")
var eng = prompt("Your marks in eng?")
var math = prompt("Your marks in math?")
var totalMarks = 300
var obtainedMarks = urdu + eng + math
var percentage =( obtainedMarks * 100) / totalMarks
if (urdu >100 && eng >100 && math >100){
    console.log ("invaled numbers")
}else if (urdu <0 && eng <0 && math <0){
    console.log ("invaled numbers")
}
else {
    if (percentage >=80 && percentage <=100){
        grade = "A+"
    }
    else if (percentage >=70 && percentage <80){
        grade = "A"
    }
    else if (percentage >=60 && percentage <70){
        grade = "B"
    }
    else if (percentage >=50 && percentage <60){
        grade = "C"
    }
    else if (percentage <50 && percentage >=0){
        grade = "Fail"
    }
}
document.write(`
<table>
<tr>
    <th>Subject</th>
    <th>total marks</th>
    <th>Obtained Marks</th>
</tr>
<tr>
    <td>eng</td>
    <td>100</td>
    <td>${eng}</td>
</tr>
<tr>
    <td>urdu</td>
    <td>100</td>
    <td>${urdu}</td>
</tr>
<tr>
    <td>math</td>
    <td>100</td>
    <td>${math}</td>
</tr>
<tr>
    <td>total</td>
    <td>300</td>
    <td>${obtainedMarks}</td>
</tr>
</table>

`)

