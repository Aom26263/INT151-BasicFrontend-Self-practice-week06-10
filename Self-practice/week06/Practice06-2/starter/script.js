// Lesson 1: Arrays, Objects, and Functions

// 1. Create an empty array to hold the quotes
const quotes = []

/*
  2. Function: addQuote
  - Accepts a quote object with id, content, and author
  - Adds it to the quotes array
*/
function addQuote(quote) {
  quotes.push(quote)
  // TODO: Add the quote object to the quotes array
}

/*
  3. Function: deleteQuote
  - Accepts an id
  - Removes the quote with that id from the array
*/
function deleteQuote(id) {
  const index = quotes.filter(q => q.id === id)
  if (index !== -1) {
    quotes.splice(index, 1)
  }
  // TODO: Remove the quote object from the array using the given id
}

/*
  4. Function: updateQuote
  - Accepts an id and an object with new content and/or author
  - Updates the quote with the given id
*/
function updateQuote(id, updatedQuote) {
  const index = quotes.filter(q => q.id === id)
    if (index !== -1) {
    quotes[index] = { ...quotes[index], ...updatedQuote }
  }
  // TODO: Find the quote by id and update its properties
}

/*
  5. Function: getAllQuotes
  - Returns all quotes in the array
*/
function getAllQuotes() {
  return quotes
  // TODO: Return the quotes array
}

// 6. Test your functions below
// TODO: Add 3 quotes using addQuote()
addQuote({id: 1, content: "AOM", author: "aom"})
console.log(quotes)

// TODO: Delete 1 quote using deleteQuote()

// TODO: Update 1 quote using updateQuote()

// TODO: Print all quotes using getAllQuotes()
