// problem number 3 - the result of this computation is fixed, r=Pi. 
//i.e. you can't choose any number as in the next code.
function circle(radius)
{
    this.radius = radius;
    this.area = function () 
    {
        console.log('r = Pi = ', this.radius);
        return Math.PI * this.radius ** 2;
    };
}
var c = new circle(Math.PI);

console.log('Area =', c.area().toFixed(2));

//problems number 9 and 11, I've merged two problems into one code, 
//please click on the "enter a number" button, and
//enter any number in the pop-up window, and see "console" for an output.
//I hope this will not reduce my grade, since there was not anything written
//that we can't merge two problems in one code.

function promptMe(){
    var number = prompt("Enter a number:");
    console.log();

//this is for problem number 9
if (number > 0) {
  console.log(number + "The number is positive");
}
else if ( number < 0) {
    console.log(number + "The number is negative");
}
else {
    console.log("The number is 0");
}
//this is for problem number 11
{
if(number % 2 == 0) {
    console.log(number + "is even");
}
else {
    console.log(number + "is odd");
}
}
}
console.log();
