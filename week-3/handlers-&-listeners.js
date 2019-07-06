/*   handlers  */

  function button_handler() {
    print_deets (projectObjects);
  }

  
  /*   event listeners  */
  
  var set_a_button = document.getElementById("printprojectdetails");
  set_a_button.addEventListener('click', button_handler);
  
