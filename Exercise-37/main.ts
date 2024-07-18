function make_shirt (size: string = "large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt, with message ${printMessage} print on it`);
}
//calling function
make_shirt();

//calling funcon for medium size

make_shirt("Medium");

//calling function for small size & for different message

make_shirt("Small", "Stay Positive");