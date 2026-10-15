let users = [];
/*
  Task Answers:
  1- B. 10
  2- A. undefined
  3- D. error
  4- D. error
  5- B. "Hello"
  6- A. undefined
  7- A. undefined - 2
  8- A. 30 - 20 - 10
  9- D. 10 - error
*/
function createUser(username, password) {
    let newUser = {
        id: users.length + 1,
        username: username,
        password: password
    };
    users.push(newUser);
    console.log("User created successfully:", newUser);
}

function getUsers() {
    console.log("Current users list:", users);
}

function updateUser(id, newUsername, newPassword) {
    let user = users.find(u => u.id === id);
    if (user) {
        user.username = newUsername;
        user.password = newPassword;
        console.log("User updated successfully:", user);
    } else {
        console.log("User not found!");
    }
}

function deleteUser(id) {
    let index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        let deletedUser = users.splice(index, 1);
        console.log("User deleted successfully:", deletedUser[0]);
    } else {
        console.log("User not found!");
    }
}

console.log("--- 1. Create ---");
createUser("Ahmed", "123456");
createUser("Mohamed", "abcdef");

console.log("\n--- 2. Read ---");
getUsers();

console.log("\n--- 3. Update ---");
updateUser(1, "Ahmed_Ali", "new_password_789");

console.log("\n--- 4. Delete ---");
deleteUser(2);

console.log("\n--- Final List ---");
getUsers();