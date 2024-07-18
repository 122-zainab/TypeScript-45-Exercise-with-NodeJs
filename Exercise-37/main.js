function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creating a ".concat(size, " shirt, with message ").concat(printMessage, " print on it"));
}
//calling function
make_shirt();
//calling funcon for medium size
make_shirt("Medium");
//calling function for small size & for different message
make_shirt("Small", "Stay Positive");
