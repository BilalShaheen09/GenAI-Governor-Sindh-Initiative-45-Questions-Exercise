const favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print pizza names
console.log("My favorite pizzas:");
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

// Print sentences about liking each pizza
console.log("\nStatements about my favorite pizzas:");
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional statement
console.log("\nI really love pizza!");
