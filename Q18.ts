let guestList: string[] = ["Ruqia", "Bashir", "Aisha", "Muhammad", "Fatima", "Ali"];

// Inform that only two people can be invited
console.log("Unfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest: string = guestList.pop()!;
    console.log("Sorry, " + removedGuest + ", we won't be able to invite you to dinner.");
}

// Print invitation messages to the remaining two guests
for (let i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ",\nYou are still invited to dinner. We look forward to seeing you!\n");
}

// Remove the last two names
guestList.pop();
guestList.pop();

// Print to confirm the list is empty
console.log("Current guest list:", guestList);
