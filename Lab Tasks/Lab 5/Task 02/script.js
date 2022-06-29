var input = document.getElementById("radius_input");
var btn = document.getElementById("cal");
let pi = 3.147;
btn.addEventListener("click",function answer(){
    var radius = input.value;
    var volume = (4/3)*pi*Math.pow(radius,3);
    var output = document.getElementById("volume_output");
    output.value = volume;
})
