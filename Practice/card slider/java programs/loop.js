//for loop 
for(var i=1;i<=10;i++)
{
    document.write(i+"<br>");
    
}
document.write("<br>");
//convert to odd numbers
var n=10;
for (var i=0; i<n;i++){
    document.write(2*i+1);
}
document.write("<br>");
document.write("<br>");
//conver to even numbers
var n=10;
for (var i=0; i<n;i++){
    document.write(2*i);
}
document.write("<br>");
document.write("<br>");

//decrement of numbers
for (var i=5; i>0; i--){
    document.write(i);
}

document.write("<br>");
document.write("<br>");

//natural numbers
for (var i=5; i!=0; i--){
    document.write(i);
}

document.write("<br>");
document.write("<br>");
//while loop//


var i = 1;

while (i <= 9) {
    document.write("<br>The number is " + i);
    i++;
}

document.write("<br>");
document.write("<br>");


let strawberryCount = 0;

if(strawberryCount){
  document.write("Congrats!");
} else {
  document.write("Value is too small to process.");
}


 strawberryCount = 5;
while (strawberryCount <= 10){
  document.write("There are " + strawberryCount + " strawberries.<br>");
  strawberryCount++;
}