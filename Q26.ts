// Version 1: Running the if block
let alienColor: string = "green";

if (alienColor === "green") {
    console.log("You just earned 5 points for shooting the green alien.");
} else {
    console.log("You just earned 10 points.");
}

// Version 2: Running the else block
alienColor = "red"; // Change the alien's color for this version

if (alienColor === "green") {
    console.log("You just earned 5 points for shooting the green alien.");
} else {
    console.log("You just earned 10 points.");
}
