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

// Call the make_great function to modify the magicianNames array
const greatMagicians = make_great(magicianNames);

// Call show_magicians to see the modified list
show_magicians(greatMagicians);
