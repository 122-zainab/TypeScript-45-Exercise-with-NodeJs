let userNames = ["Ali", "Zowairiya", "Nahil", "Fahad", "Admin"];

userNames = []
if(userNames.length === 0) {
    console.log("your array is empty, we need to find some users!");
}
else {
userNames.forEach(oneUser =>{
    if(oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see status report`);
    }
    else{
        console.log(`Hello ${oneUser}, thank you for logging in again`);
    }
    
    
})
}