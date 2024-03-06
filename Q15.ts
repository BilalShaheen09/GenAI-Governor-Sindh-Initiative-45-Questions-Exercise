let guestList: string[] = ["Ruqia", "Bashir", "Shaheen"];

// One guest can't make it, replacing with another
let indexOfGuestCannotMakeIt: number = guestList.indexOf("Shaheen");
if (indexOfGuestCannotMakeIt !== -1) {
    guestList[indexOfGuestCannotMakeIt] = "Aisha"; // Replacing Shaheen with Aisha
}

// Print invitation messages to each guest
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nYou are cordially invited to dinner. We would be honored to have your presence.\n\nBest regards,\n[KK 09]");
}

// Print the name of the guest who can't make it
console.log(guestList[indexOfGuestCannotMakeIt] + " can't make it to dinner.");
