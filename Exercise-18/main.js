var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["Turkey", "Dubai", "Switzerland", "Canada", "Thailand"];
console.log(countriesToVisit);
// printing array in Alphabetical Order without modifying actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
console.log("still in its orignal order:", countriesToVisit);
// print array in reverse alphabetical order withour modifying actual array
console.log("Reverse Alphabetical Order Without Changing Actual Array:", __spreadArray([], countriesToVisit, true).sort().reverse());
console.log("still in its orignal order:", countriesToVisit);
// changed orignal array
console.log("Orignal Array Reversed", countriesToVisit.reverse());
//print array to its orignal order
console.log("Back to Orignal Order:", countriesToVisit.reverse());
// print array to show that its order has been changed in Alphabetical Order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
//changed orignal array in reverse order again
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());
