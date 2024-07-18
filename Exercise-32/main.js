// Array of current users
var current_users = ["Zowairiya", "Ali", "Fahad", "Nahil", "Zainab"];
//Array of new users
var new_users = ["Nurhan", "Hafsa", "Zainab", "Nahil", "Daniyal"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using If Else ststement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
