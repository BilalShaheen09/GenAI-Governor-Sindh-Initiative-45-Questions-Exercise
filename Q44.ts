function makeSandwich(...items: string[]): void {
    console.log("Sandwich summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log("---------------------");
}

// Call the function three times with different numbers of arguments
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut Butter", "Jelly");
