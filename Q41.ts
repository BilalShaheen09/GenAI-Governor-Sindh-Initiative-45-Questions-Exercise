function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician's names
const magicianNames: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];

// Call the function to show the names of magicians in the array
show_magicians(magicianNames);
