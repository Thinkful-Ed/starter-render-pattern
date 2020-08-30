# Render Pattern Starter

_Starter project for the Render Pattern Practice_

## Introduction

You are helping your local bookstore build a shopping cart for their website. The list of books, prices and quantities are stored in an array named `books`. You wish to create a few helper functions to display the cart, sort the books and make small modifications to the cart.

## The HTML and CSS

The HTML page is named index.html. It contains a form and a list of articles. The form contain a single input field. When the form is submitted the articles are filtered by the search term entered on the form.

_You should not edit the HTML file in any way_.

Some CSS is included in the `index.css` file to provide basic layout for the page. This exercise is not concerned with CSS so there is no need to edit the CSS.

## The JavaScript

The JavaScript code is to be written in the file index.js. This is the only file that you need to edit. You will find the `books` array declared in this file. Write the required functions in this file.

## The Tests

Additionally there are some tests in the test directory. You may ignore these if you wish. It contains some test code that will provide some feedback on your progress. When you first open the web page in the browser you should see a series of messages indicating failed tests at the bottom of the HTML page.

As you write your code these tests should all pass. You have completed the assignment when all tests pass.

## Getting started

To get started fork this repository. Clone your copy of the repository to your local machine.

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/starter-render-pattern.git
```

You may want to start a local server to load the page in the browser. Navigate to the folder in which the repository was cloned and run the command:

```bash
npx lite-serve
```

## The Tasks

The books array contain books in the following format:

```json
{
  "title": "",
  "authors": ["", ""],
  "description": "",
  "price": 0,
  "rating": 5,
  "quantity": 1
}
```

Write the following functions in the `index.js` file.

#### `renderBook()`

This function accepts a book object in the format described above.
Create and return the HTML to render a single book. The HTML for a single book should look like this:

```html

```

#### `calculateTotal()`

Calculate the total price of all items in the cart. Take into consideration that some items have a quantity > 1. return the total price.

#### `render()`

Render the array of books and the cart total and insert them into the DOM.
The books should be rendered in the `section` with id "cartItems".
The total should be rendered in the `section` with id "cartTotal".

The HTML for the cart total should look like this:

```html

```

#### `sortByPrice()`

Sort the books array by price in ascending order then call render()

#### `deleteBook(book_id)`

Accepts a parameter `book_id` representing the id of a book to be removed from cart.
Remove the book with the corresponding id from the books array then call render()

## License

This is [MIT Licensed](LICENSE)
