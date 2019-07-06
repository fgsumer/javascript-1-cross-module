var a = "Team Leuven";
var b = ["Fatma", "Moon", "Nadine"];

// functions
function print_team_name(a) {
    console.log("Team of the year is " + a);
}

function print_team_members (b){
console.log("The members of the team are ");
for(let i=0; i<b.length ;i++){
    console.log(b[i]);
}
}
function introduce (a,b) {
print_team_name(a);
print_team_members (b);
}
