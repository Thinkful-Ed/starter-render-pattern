const expect = chai.expect;

describe("Render Pattern", function () {
  describe("renderBook()", function () {
    const dom = document.createElement("div");
    const book = books[Math.floor(Math.random() * books.length)];

    before(function () {
      dom.innerHTML = renderBook(book);
    });

    after(function () {});

    it('should create div with class "title" for title', function () {
      expect(dom.querySelector(".title").innerHTML).to.contain(book.title);
      expect(dom.querySelector(".title").tagName).to.equal("DIV");
    });

    it('should create span with class "rating" for rating', function () {
      expect(dom.querySelector(".rating").innerHTML).to.contain(book.rating);
      expect(dom.querySelector(".rating").tagName).to.equal("SPAN");
    });

    it('should create div with class "authors" for authors', function () {
      expect(dom.querySelector(".authors").innerHTML).to.contain(
        book.authors[0]
      );
      expect(dom.querySelector(".authors").tagName).to.equal("DIV");
    });

    it("should include a delete button", function () {
      const button = dom.querySelector("button");
      expect(button).to.not.be.null;
      expect(button.className).to.equal("removeBtn");
      expect(button.innerHTML).to.equal("Remove from cart");
    });

    it('should create div with class "quantity" for quantity', function () {
      expect(dom.querySelector(".quantity").innerHTML).to.contain(
        book.quantity
      );
      expect(dom.querySelector(".quantity").innerHTML).to.contain(book.price);
      expect(dom.querySelector(".quantity").tagName).to.equal("DIV");
    });

    it('should create div with class "price" for price', function () {
      expect(dom.querySelector(".price").innerHTML).to.equal(
        `$${book.quantity * book.price}`
      );
      expect(dom.querySelector(".price").tagName).to.equal("DIV");
    });
  });

  describe("calculateTotal()", function () {
    before(function () {});

    after(function () {});

    it("should return 0 when cart is empty", function () {});

    it("should sum prices of single items", function () {});

    it("should sum prices * quantities for multiple items", function () {});
  });

  describe("render()", function () {
    before(function () {});

    after(function () {});

    it("should display 'Nothing in cart' when cart is empty", function () {});

    it("should display a total of 0 when nothing in cart", function () {});

    it("should display all items in cart", function () {});

    it("should display total price of items in cart", function () {});
  });

  describe("sortByPrice()", function () {
    before(function () {});

    after(function () {});

    it("should result in empty array when array is empty ", function () {});

    it("should sort books in ascending order of price", function () {});

    it("should render the sorted array", function () {});

    it("should be able to click on the sort button to sort", function () {});
  });

  describe("deleteBook()", function () {
    before(function () {});

    after(function () {});

    it("should be able to click on a delete button to delete a book", function () {});

    it("should remove the book with given id from the array", function () {});

    it("should render updated array", function () {});
  });
});
