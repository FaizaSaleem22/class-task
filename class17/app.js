
var today = new Date();
var stringtoday = today.toString();
console.log(stringtoday)
stringtoday = stringtoday.split(" ");
console.log(stringtoday)
var day = stringtoday.slice(0,1);
console.log(day)
var date = stringtoday.slice(1, 2)
console.log(date)
var time = stringtoday.slice(2, 3)
console.log(time)

var ramadan = new Date(2027,1,7)
console.log(ramadan)
var today = new Date()
console.log(today)
var todayMilli = today.getTime()
console.log(todayMilli)
var ramadanMilli = ramadan.getTime()
console.log(ramadanMilli)
var milliLeft = ramadanMilli - todayMilli;
console.log(milliLeft)
var secLeft = milliLeft/ 1000;
console.log(secLeft)
var minLeft = secLeft/60
console.log(secLeft)
var hourLeft = minLeft/60
console.log(hourLeft)
var daysLeft = hourLeft/24
console.log(daysLeft)
var monthleft = daysLeft/30
console.log(monthleft)
monthleft = Math.floor()
console.log(monthleft)


