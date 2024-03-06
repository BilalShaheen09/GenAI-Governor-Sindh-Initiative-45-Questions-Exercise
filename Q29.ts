// Define the array of favorite fruits
let favoriteFruits: string[] = ["apple", "banana", "strawberry"];

// Check if specific fruits are in the array
if (favoriteFruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favoriteFruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favoriteFruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

// Additional checks
if (favoriteFruits.includes("orange")) {
    console.log("You really like oranges!");
} else {
    console.log("Oranges are not in your list of favorite fruits.");
}

if (favoriteFruits.includes("grape")) {
    console.log("You really like grapes!");
} else {
    console.log("Grapes are not in your list of favorite fruits.");
}
