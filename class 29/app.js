// function deleteRow(e){
//     var row = e.parentNode.parentNode
//     row.remove()
// }
// function updateForm(b){
//     var row = b.parentNode.parentNode
//     console.log(row.innerHTML)
// }
// var form = document.getElementById("form")
// form.style.display="none"
function formAction(event){
    event.preventDefault()
}
function studentTableBody(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var roll = document.getElementById("roll").value
    var studentTableBody = document.getElementById("studentTableBody")
    var row = document.createElement("tr")
    row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${roll}</td>
    <td><button onclick= "editRow(this)">Edit</button></td>
    <td><button onclick= "deleteRow(this)">Delete</button></td>
    `
    studentTableBody.appendChild(row)
}
function deleteRow(e){
    var row = e.parentNode.parentNode
        row.remove()
}
function editRow(e){
    var rowToChange = e.parentNode
    console.log(rowToChange)
}