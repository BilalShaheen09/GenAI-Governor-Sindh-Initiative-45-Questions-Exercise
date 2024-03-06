let personName: string = "Bilal Shaheen";

// Lowercase
console.log("Lowercase: " + personName.toLowerCase());

// Uppercase
console.log("Uppercase: " + personName.toUpperCase());

// Titlecase
console.log("Titlecase: " + personName.replace(/\b\w/g, (char) => char.toUpperCase()));
