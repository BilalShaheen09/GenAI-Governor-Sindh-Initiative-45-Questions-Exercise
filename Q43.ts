function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }
    return greatMagicians;
}

// Define an array of magician's names
const magicianNames: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];

// Make a copy of the array
const magicianNamesCopy: string[] = [...magicianNames];

// Call the make_great function with the copy of the array
const greatMagicians = make_great(magicianNamesCopy);

// Call show_magicians to show the original array
console.log("Original magicians:");
show_magicians(magicianNames);

// Call show_magicians to show the modified array with "the Great" added
console.log("\nGreat magicians:");
show_magicians(greatMagicians);
