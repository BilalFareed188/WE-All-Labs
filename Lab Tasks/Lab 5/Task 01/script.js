var addBtn = document.getElementById("add_button");
var input = document.getElementById("task_input");
var ul = document.querySelector("ul");

addBtn.addEventListener("click",function createListElement(){
    if(input.value.length > 0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        // Create a "close" button and append it to each list item
        var myNodelist = document.getElementsByTagName("li");
        var i;
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("span");
            span.className = "close";
            span.appendChild(document.createTextNode("x"));
            myNodelist[i].appendChild(span);
        }
        // Click on a close button to hide the current list item
        var close = document.getElementsByClassName("close");
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function dlt() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }
})

