function parseDate(str) {
    var mdy = str.split('/'); return new Date(mdy[2], mdy[0]-1, mdy[1]); 
}

function weekDiff(first, second) {
    return Math.round((second-first));
}

var bday = prompt("Enter birthday", "mm/dd/yyyy");

if (bday == null || bday == "") {
    bday = "User cancelled the prompt.";
}
else
{
    bdayDate = parseDate(bday);
}

var death = prompt("What age will you die?", "100");

if (death == null || death == "") {
    death = "User cancelled the prompt.";
}

window.prompt("bday:", bdayDate);

var deathDate = new Date(bdayDate);
deathDate.setFullYear(deathDate.getFullYear() + parseInt(death));

window.prompt("death day:", deathDate);

var weeksLeft = (deathDate - bdayDate);

console.log(bdayDate);
console.log(deathDate);
console.log(deathDate - bdayDate);
console.log(Math.ceil(deathDate - bdayDate) / (1000 * 3600 * 24 * 7));

window.prompt("you have", weeksLeft, "left");