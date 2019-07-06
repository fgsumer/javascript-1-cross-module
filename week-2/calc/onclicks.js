
var aB = document.getElementById("print_v");
    aB.onclick = function() {
        print_vals(a,b);
    }

var addAdd = document.getElementById("print_add");
    addAdd.onclick = function() {
        do_math(a, b, add);
    }
var subSubtract = document.getElementById("print_sub");
    subSubtract.onclick = function() {
        do_math(a, b, subtract) ;
    }
var mulMultiply = document.getElementById("print_mul");
    mulMultiply.onclick = function() {
        do_math(a, b, multiply);
    }
var divDivide = document.getElementById("print_div");
    divDivide.onclick = function() {
        do_math(a, b, divide);
    }


