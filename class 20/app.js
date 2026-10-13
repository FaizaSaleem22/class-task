function greet(user,org){
    var str = `Welcome ${user} to ${org} <br>`
    return str
}
console.log(greet("faiza", "smit"));
document.write(greet("umra", "aptec"));

function hyp(base,perpen){
    function square(a){
        return a*a
    }
    var hypo=square(base)+square(perpen)
    return Math.sqrt(hypo)
}
document.write(hyp(3,6))


function palindrome(str){
    var reverse=""
for(var i=str.length-1; i>=0; i--){
    reverse=reverse+str[i]
}
if(str === reverse){
    console.log(str , "is a palindrome word");
}else{
    console.log(str, "is not a palindrome word");
}
}
var user= prompt("Enter a word").toLowerCase();
palindrome(user)
