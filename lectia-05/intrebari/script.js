
const bookShelf = {
    books: ["The Last Kingdom", "Dream Guardian"],
    // Este o metodă de obiect
    getBooks: function() {
      console.log("Această metodă va returna toate cărțile - proprietatea books");
    },
    // Este o metodă de obiect
    addBook(bookName) {
      console.log("Această metodă va adăuga o carte nouă în proprietatea books");
    },
  };

  bookShelf.getBooks()
  bookShelf.addBook('argument')

  console.log(bookShelf.books)

