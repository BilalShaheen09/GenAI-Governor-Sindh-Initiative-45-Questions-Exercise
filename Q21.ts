// Object representing information about fruits
let fruitInfo = {
    apple: {
        color: "red",
        taste: "sweet",
        origin: "multiple regions"
    },
    banana: {
        color: "yellow",
        taste: "sweet",
        origin: "tropical regions"
    },
    orange: {
        color: "orange",
        taste: "citrusy",
        origin: "tropical and subtropical regions"
    }
};

// Print information about each fruit
console.log("Information about Fruits:");
for (let fruit in fruitInfo) {
    console.log(fruit + ":");
    console.log("Color:", fruitInfo[fruit].color);
    console.log("Taste:", fruitInfo[fruit].taste);
    console.log("Origin:", fruitInfo[fruit].origin);
    console.log("-------------------------");
}
