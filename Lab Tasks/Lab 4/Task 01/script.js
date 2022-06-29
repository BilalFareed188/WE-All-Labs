var op,num1, num2;

num1 = prompt("Enter the First Number");
num2 = prompt("Enter the Second Number");
op = prompt("Enter the Operation (+,-,*,/)");

num1 = parseInt(num1);
num2 = parseInt(num2);
switch(op) {

  case "+":

    alert(num1+num2);

    break;

  case "-":

    alert(num1-num2);

    break;

  case "*":

    alert(num1*num2);

    break;
  case "/":

    alert(num1/num2);

    break;

  
default:

    alert("Please Enter Valid Inputs");

}