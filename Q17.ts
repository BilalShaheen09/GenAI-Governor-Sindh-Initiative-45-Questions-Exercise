let guestList: string[] = ["Ruqia", "Bashir", "Shaheen"];

// One guest can't make it, replacing with another
let indexOfGuestCannotMakeIt: number = guestList.indexOf("Shaheen");
if (indexOfGuestCannotMakeIt !== -1) {
    guestList[indexOfGuestCannotMakeIt] = "Aisha"; // Replacing Shaheen with Aisha
}

// Add three more guests
guestList.push("Muhammad");
guestList.splice(2, 0, "Fatima"); // Adding Fatima to the middle of the array
guestList.push("Ali"); // Adding Ali using push to the end of the list

// Print invitation messages to each guest
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner. We would be honored to have your presence.\n\nBest regards,\n[KK 09]");
}

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table!");

