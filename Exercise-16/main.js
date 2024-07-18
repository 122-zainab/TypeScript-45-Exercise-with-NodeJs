var guestList = ["Waiza", "Fiza", "Maria", "Hania"];
var dontCome = guestList[0];
console.log(dontCome, "is not coming");
guestList.splice(0, 1, "Haseeb");
console.log("Good news we have found a bigger table for dinner");
guestList.unshift("Raza"); //we use unshift for add in theing a new value start of the array
guestList.push("Fahad"); //we use push method for adding a new value in the end of the array
var middleIndex = (guestList.length / 2); // for middle index of array
guestList.splice(middleIndex, 0, "Hadi");
console.log("Updated list of guests");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me")); });
