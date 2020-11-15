var clearBtn = document.getElementById("clear-btn");
var clearFunction = function() {
    var clearLists = document.getElementsByClassName("task");
    for(var i = 0; i < clearLists.length; i){
        clearLists[i].remove();
    }
}
clearBtn.addEventListener("click", clearFunction); 