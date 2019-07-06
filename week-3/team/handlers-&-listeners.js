function team_name_handler() {
    print_team_name(a);
  }

function team_members_handler () {
    print_team_members (b);
}

function introduction_handler () {
    introduce (a,b);
}

function new_member_handler () {
    var newMemberInput= document.getElementById("new-member-input").value;
        b.push(newMemberInput);
        print_team_members (b);
}
  
  /*   event listeners  */
  
var teamNameButton = document.getElementById("nameofteam");
teamNameButton.addEventListener('click', team_name_handler);
  
var teamMembersButton = document.getElementById("membersofteam");
    teamMembersButton.addEventListener('click', team_members_handler);

var introductionButton = document.getElementById("introductionforboth");
    introductionButton.addEventListener('click', introduction_handler);

var newMemberButoon = document.getElementById("add-new-member");
    newMemberButoon.addEventListener('click', new_member_handler);

    
