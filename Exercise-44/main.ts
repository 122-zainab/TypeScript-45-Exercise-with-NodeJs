
function makeSandwich(...items: string[]){
    console.log("\n Making a sandwich with the following items");
    
    items.forEach(singleItem  => console.log(singleItem));
    console.log("\n Now Enjoy sandwich");

}



makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter")

makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "lettuce", "Tomato");