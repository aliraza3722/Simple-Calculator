document.querySelector("button").addEventListener("click", function() {
    
    var firstNum = document.getElementById("first").value;
    var secondNum = document.getElementById("second").value;
    var ope = document.getElementById("ion").value;
    if (ope == "+") {
       var result = parseInt(firstNum) + parseInt(secondNum);
    }
    if (ope == "-") {
        var result = parseInt(firstNum) - parseInt(secondNum);
    }
    if (ope == "*") {
        var result = parseInt(firstNum) * parseInt(secondNum);
    }
    if (ope == "/") {
        var result = parseInt(firstNum) / parseInt(secondNum);
    }
    document.getElementById("res").value = result;
})

function clearDisplay() {
    document.getElementById("res").value = "";
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
}
