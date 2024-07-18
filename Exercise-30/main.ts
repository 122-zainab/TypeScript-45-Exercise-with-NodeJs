let userNames = ["Ali", "Zowairiya", "Nahil", "Fahad", "Admin"];

// Using forEach loop on Array
userNames.forEach(oneUser => {
if (oneUser === "Admin"){
    console.log(`Hello ${oneUser}, would you like to see  status report`);
}
else{
    console.log(`Hello ${oneUser}, thank you for logging in again`);
}
    
})


