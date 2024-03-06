// Define the current users and new users arrays
let currentUsers: string[] = ["john", "emma", "alice", "bob", "sam"];
let newUsers: string[] = ["emma", "charlie", "sarah", "MIKE", "john"];

// Convert all usernames in currentUsers to lowercase for case-insensitive comparison
let currentUsersLowercase: string[] = currentUsers.map(username => username.toLowerCase());

// Loop through the new users list
for (let newUser of newUsers) {
    // Convert the new username to lowercase for case-insensitive comparison
    let newUserLowercase: string = newUser.toLowerCase();
    
    // Check if the lowercase version of the new username exists in the lowercase current users list
    if (currentUsersLowercase.includes(newUserLowercase)) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}
