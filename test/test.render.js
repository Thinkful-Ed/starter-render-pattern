const expect = chai.expect;

describe("Render Pattern", function () {
  after(function () {
    render();
  });

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
    let temp;
    beforeEach(function () {
      temp = [...books];
    });

    afterEach(function () {
      books.splice(0, books.length, ...temp);
    });

    it("should return 0 when cart is empty", function () {
      books.splice(0);
      const answer = calculateTotal();
      expect(answer).to.equal(0);
    });

    it("should sum prices of single items", function () {
      const updated = books.map((book) => ({
        ...book,
        quantity: 1,
        price: 10,
      }));
      books.splice(0, books.length, ...updated);
      const answer = calculateTotal();
      expect(answer).to.equal(50);
    });

    it("should sum price * quantity for multiple items", function () {
      const updated = books.map((book) => ({
        ...book,
        quantity: 2,
        price: 10,
      }));
      books.splice(0, books.length, ...updated);
      const answer = calculateTotal();
      expect(answer).to.equal(100);
    });
  });

  describe("render()", function () {
    describe("when cart is empty", function () {
      let temp;
      beforeEach(function () {
        temp = [...books];
        books.splice(0);
      });

      afterEach(function () {
        books.splice(0, books.length, ...temp);
      });

      it("should display 'Nothing in cart' when cart is empty", function () {
        render();
        const items = document.querySelector("#cartItems");
        expect(items.innerHTML).to.equal("Nothing in cart");
      });

      it("should display a total of 0 when nothing in cart", function () {
        render();
        const price = document.querySelector(".total-price");
        expect(price.innerHTML).to.contain("$0");
      });
    });

    describe("when cart is not empty", function () {
      let temp;
      beforeEach(function () {
        temp = [...books];
        const updated = books.map((book) => ({
          ...book,
          quantity: 2,
          price: 10,
        }));
        books.splice(0, books.length, ...updated);
      });

      afterEach(function () {
        books.splice(0, books.length, ...temp);
      });
      it("should display all items in cart", function () {
        render();
        const items = document.querySelectorAll("#cartItems .book");
        expect(items.length).to.equal(5);
      });

      it("should display total price of items in cart", function () {
        render();
        const price = document.querySelector(".total-price");
        expect(price.innerHTML).to.contain("$100");
      });
    });
  });

  describe("sortByPrice()", function () {
    before(function () {});

    after(function () {});

    it("should result in empty array when array is empty ", function () {});

    it("should sort books in ascending order of price", function () {});

    it("should render the sorted array", function () {});

    it("should be able to click on the sort button to sort", function () {});
  });
});
