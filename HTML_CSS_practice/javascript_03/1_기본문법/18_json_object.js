let user1 = { userName: "John", age: 30 };
console.log(user1, typeof user1);

// object -> json
let user1JSON = JSON.stringify(user1);
console.log(user);

// JSON --> object
let user2 = JSON.parse(user1_json);
console.log(typeof user2, user2);

if (user1 == user2) console.log(true);
else console.log(false);

if (user1 === user2) console.log(true);
else console.log(false);
