var canDrive = document.getElementById("canDrive");

//click event listener to show the power
canDrive.addEventListener("click", function canDrive(){
    var age = prompt("Enter Your Age: ");
    (age > 18) ? alert("You Are Allowed to Drive") : alert("You Are Not Allowed to Drive");
});
