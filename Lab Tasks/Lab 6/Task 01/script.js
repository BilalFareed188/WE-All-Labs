var power = document.getElementById("power");

//click event listener to show the power
power.addEventListener("click", function power(){
    let num1 = prompt("Enter the Base Number: ");
    let num2 = prompt("Enter the Power Value: ");
    let ans = Math.pow(num1,num2);
    alert(ans);
});
