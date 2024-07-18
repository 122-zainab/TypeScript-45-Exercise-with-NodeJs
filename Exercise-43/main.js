function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ["Max Maven", "David Blaine", "Eugene Burger"];
var copy_magicians_names = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("Orignal Array\n");
show_magicians(magicians_names);
console.log("\nCopied Array");
show_magicians(copy_great_magicians);
