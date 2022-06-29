function repeat_function(input_value) {
    input_value == 'S'? setTimeout(function(){
        val = prompt(" “ Alarm is ringing ”. Press ‘S’ to snooze and ‘D’ to dismiss");
        repeat_function(val);
    }, 1000) : (input_value == 'D'? alert("Good Morning!") : alert("Wrong Input!"));
}
input_value = prompt(" “ Alarm is ringing ”. Press ‘S’ to snooze and ‘D’ to dismiss");
repeat_function(input_value);