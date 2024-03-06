function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You've ordered a ${size} shirt with the message: "${message}".`);
}

// Make a large shirt with the default message
make_shirt();

// Make a medium shirt with the default message
make_shirt("Medium");

// Make a shirt of any size with a different message
make_shirt("Small", "Keep coding!");
