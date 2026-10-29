function getCity(){
    var zip = document.getElementById("zip").value
    console.log (zip)
    var city
    switch (zip) {
        case "1111":
            city = "karachi"
            break;
        case "2222":
            city = "islamabad"
            break;
        case "3333":
            city = "lahore"
            break;
        case "4444":
            city = "quetta"
            break;
        default:
            city = "invalid zip code"
        }
        document.getElementById("city").value = city
}
function getZip(){
    var cityName = document.getElementById("city").value.toLowerCase()
    console.log (cityName)
    var zip
    switch (cityName) {
        case "karachi":
            zip = "1111"
            break;
        case "islamabad":
            zip = "2222"
            break;
        case "lahore":
            zip = "3333"
            break;
        case "quetta":
           zip = "4444"
            break;
        default:
            zip = "invalid zip code"
        }
        document.getElementById("zip").value = zip
}

function expandText(){
    var expandedPara = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt ducimus veniam in atque debitis nam perferendis delectus alias? Nam accusamus voluptate fugit pariatur. Hic itaque optio assumenda dolorum dicta delectus mollitia quos dolore praesentium, neque corrupti beatae consequatur libero ad repellat? Fuga, tenetur maiores quis exercitationem at voluptate temporibus odio unde obcaecati illum a dolor? Sed error tempore nihil! Eius ea tenetur adipisci quae odio repudiandae dolore quasi harum libero facilis labore maiores mollitia, porro, aspernatur rerum minus totam tempora? Assumenda nihil expedita nesciunt impedit qui alias vitae, unde blanditiis et, illo ducimus illum ea praesentium mollitia libero? Dignissimos inventore nemo animi quis perspiciatis deleniti dolores pariatur eaque odio optio facilis, culpa repellendus beatae laboriosam nam, officia ratione. Molestias .."

    var contractedPara = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla quisquam delectus est numquam aut sed id dignissimos possimus neque."

    var link = getElementById("link").innerHTML
    if (link === "see more"){
    getElementById("expanded").innerHTML = expandedPara
    }
    else{
        getElementById("contracted").innerHTML = contractedPara
    }
}