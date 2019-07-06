// data (variables)
var projectObjects = {
    name:"Adopt an Animal",
    link:"https://www.adopteereendier.be/",
    description:"an official website of the Flemish government that you can adopt a pet from a recognized animal shelter"};

        



// functions
function print_deets (projectObjects){
    for (let key in projectObjects) {
        console.log(projectObjects[key]);
    }
    
  }



  let print = document.getElementById("printButton");
    print.onclick = function () {
    print_deets (projectObjects);
}
