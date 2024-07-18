var guestList = ["Waiza", "Fiza", "Maria", "Hania"];
var dontCome = guestList[0];
console.log(dontCome, "is not coming");
// splice method is use to add or remove elements fron the array
guestList.splice(0, 1, "Haseeb");
console.log("Good news we have found a bigger table for dinner");
guestList.unshift("Raza"); //we use unshift for add in theing a new value start of the array
guestList.push("Fahad"); //we use push method for adding a new value in the end of the array
var middleIndex = (guestList.length / 2); // for middle index of array
guestList.splice(middleIndex, 0, "Hadi");
console.log("Updated list of guests");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me")); });
console.log("Unfortunately, the new dinner table will not arrive, I can invite only two guest for dinner");
// We use while loop method for removing the guest from the  list
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, ", I can't invite you for dinner"));
}
console.log("Invitations to the last 2 Guest");
guestList.forEach(function (lasttwoGuest) { return console.log("Hi, ".concat(lasttwoGuest, " you are still invited for dinner")); });
//removing last 2 guest from list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
