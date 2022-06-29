var table = document.getElementById("table");
var power = document.getElementById("power");
var sequence = document.getElementById("sequence");
var odd_even = document.getElementById("odd_even");

//click event listener to form a table
table.addEventListener("click", function table(){
    let num = prompt("Enter a Number:");
    let table_array = [];
    for(var i = 0;i<=10;i++){
        table_array.push(num+" x "+i+" = " +i*num+"\n");

    }
    alert(table_array);
});

//click event listener to show the power
power.addEventListener("click", function power(){
    let num1 = prompt("Enter the Base Number: ");
    let num2 = prompt("Enter the Power Value: ");
    let ans = Math.pow(num1,num2);
    alert(ans);
});


//click event listener to print the sequence
sequence.addEventListener("click", function sequence(){
    let num = prompt("Enter a Number:");
    let sequence_array = [];
    for(var i = 0;i<=num;i++){
        sequence_array.push(i);
    }
    alert(sequence_array);
});


//click event listener to show the power
odd_even.addEventListener("click", function odd_even(){
    let input = prompt("Enter 'E' to print Even Number And 'O' to print Odd Numbers");
    if(input=="E"){
        let even_array = [];
        for(var i = 0;i<=20;i+=2){
            even_array.push(i);
        }
        alert(even_array);
    }
    else if(input=="O"){
        let odd_array = [];
        for(var i = 1; i<=20 ;i+=2){
            odd_array.push(i);
        }
        alert(odd_array);
    }
    else{
        alert("Please Enter a Correct Input!");
    }
});
