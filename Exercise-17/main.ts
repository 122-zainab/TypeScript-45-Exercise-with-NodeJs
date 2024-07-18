let guestList = ["Waiza", "Fiza", "Maria", "Hania"];

let dontCome = guestList[0];

console.log(dontCome, "is not coming");

// splice method is use to add or remove elements fron the array
guestList.splice(0 , 1, "Haseeb");

console.log("Good news we have found a bigger table for dinner");


guestList.unshift("Raza");   //we use unshift to add a new value start of the array

guestList.push("Fahad");  //we use push method to add a new value in the end of the array
 
let middleIndex:number = (guestList.length / 2); // for middle index of array

guestList.splice(middleIndex, 0, "Hadi");

console.log("Updated list of guests");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me`));

console.log("Unfortunately, the new dinner table will not arrive, I can invite only two guest for dinner");

// We use while loop method for removing the guest from the  list
while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you for dinner`);
}

console.log("Invitations to the last 2 Guest");

guestList.forEach(lasttwoGuest => console.log(`Hi, ${lasttwoGuest} you are still invited for dinner`));
 
//removing last 2 guest from list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);