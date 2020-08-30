/*
 The books array contain the list of books in the shopping cart.
*/
const books = [];

/*
 Create and return the HTML to render a single book.
 The `book` parameter is an object representing a single book. 
*/
function renderBook(book) {}

/*
  Calculate and return the total price of all items in the cart.
 */
function calculateTotal() {}

/*
  Render the array of books and the cart total and insert them on the DOM.
  The books should be rendered in the `section` with id "cartItems".
  The total should be rendered in the `section` with id "cartTotal".
*/
function render() {}

/*
  Sort the books array by price in ascending order then call render()
*/
function sortByPrice() {}

/*
  Accepts the id of a book to be removed from cart.
  Remove the book with the corresponding id from the books array then call render()
*/
function deleteBook(book_id) {}

/*
  Perform all startup tasks here. Use this function to attach the required event listeners
  then call render()
*/
function main() {}

window.addEventListener("DOMContentLoaded", main);
