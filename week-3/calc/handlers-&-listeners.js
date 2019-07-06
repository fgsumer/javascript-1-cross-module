function print_vals_handler() {
    print_vals (a,b);
  }

  function a_handler() {
    var newInputA = document.getElementById("input-a")
    var inputA = newInputA.value;
    a = inputA;
    console.log(a);
  }

  function b_handler() {
      var newInputB = document.getElementById("input-b")
      var inputB = newInputB.value;
      b = inputB; 
      console.log(b);
  }

  function add_handler() {
    do_math(a, b, add);
  
  }

  function subtract_handler(){
    do_math(a, b, subtract);
  }

  function multiply_handler() {
    do_math(a, b, multiply);
  };

  function divide_handler () {
    do_math(a, b, divide);
  };

  //event listeners
var printVals = document.getElementById("print_v");
printVals.addEventListener("click", print_vals_handler);

var printA = document.getElementById ("inputAButton");
printA.addEventListener("click", a_handler); 

var printB = document.getElementById("inputBButton");
printB.addEventListener("click", b_handler); 

var addAdd = document.getElementById("print_add");
  addAdd.addEventListener("click", add_handler);
 
var subSubtract = document.getElementById("print_sub");
subSubtract.addEventListener("click", do_math(a, b, subtract_handler));

var mulMultiply = document.getElementById("print_mul");
mulMultiply.addEventListener("click", do_math(a, b, multiply_handler));

var divDivide = document.getElementById("print_div");
divDivide.addEventListener("click", do_math(a, b, divide_handler));



  


    
