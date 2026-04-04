// JSON string storing book details
const bookData = `
[
  {
    "id": 1,
    "topic": "Artificial Intelligence",
    "edition": "3rd",
    "author": "Stuart Russell"
  },
  {
    "id": 2,
    "topic": "Web Development",
    "edition": "2nd",
    "author": "Jon Duckett"
  },
  {
    "id": 3,
    "topic": "Data Structures",
    "edition": "1st",
    "author": "Mark Allen Weiss"
  }
]
`;

// Convert to object
const books = JSON.parse(bookData);

// Print all books
console.log("Book Details:");
console.log(books);