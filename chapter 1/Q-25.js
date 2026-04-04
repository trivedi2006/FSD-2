// JSON in STRING format
const jsonString = `
[
  {
    "name": "Daksh",
    "age": "21",
    "city": "Ahmedabad"
  },
  {
    "name": "Aarav",
    "age": "21",
    "city": "Mumbai"
  },
  {
    "name": "Meera",
    "age": "21",
    "city": "Delhi"
  }
]
`;

// Convert string → object
const users = JSON.parse(jsonString);

// (1) User Details
console.log("User Details:");
console.log(users);

// (2) Name of 2nd person and age (in object form)
const secondPerson = {
  name: users[1].name,
  age: users[1].age
};

console.log("2nd Person Details:");
console.log(secondPerson);

console.log("Test Output");