let countriesToVisit: string[] = ["Turkey", "Dubai", "Switzerland", "Canada", "Thailand"];
console.log(countriesToVisit);

// printing array in Alphabetical Order without modifying actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

console.log("still in its orignal order:", countriesToVisit);

// print array in reverse alphabetical order withour modifying actual array
console.log("Reverse Alphabetical Order Without Changing Actual Array:", [...countriesToVisit].sort().reverse());

console.log("still in its orignal order:", countriesToVisit);

// changed orignal array
console.log("Orignal Array Reversed", countriesToVisit.reverse());


//print array to its orignal order
console.log("Back to Orignal Order:", countriesToVisit.reverse());

// print array to show that its order has been changed in Alphabetical Order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

//changed orignal array in reverse order again
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());