var Home_Expenses = {
    transport: 1000,
    food: 5000,
    family: [
        { name: 'father', expense: 2000 },
        { name: 'mother', expense: 3000 },
        { name: 'sister', expense: 1000 },
        { name: 'brother', expense: 1500 }
    ]
}
console.log("father expense:",Home_Expenses.family[0].expense)