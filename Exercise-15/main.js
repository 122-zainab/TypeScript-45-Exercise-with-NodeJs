var guestList = ["Waiza", "Fiza", "Maria", "Hania"];
var dontCome = guestList[3];
console.log(dontCome, "is not coming");
guestList.splice(3, 3, "Haseeb");
guestList.forEach(function (guest) { return console.log("Hi ".concat(guest, " would you like to dinner with me?")); });
