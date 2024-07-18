let guestList = ["Waiza", "Fiza", "Maria", "Hania"];

let dontCome = guestList[3];

console.log(dontCome, "is not coming");

guestList.splice(3, 3, "Haseeb" );

guestList.forEach(guest => console.log(`Hi ${guest} would you like to dinner with me?`));