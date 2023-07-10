function displayBooksForOfLoop(books) {
    for (var book of books) {
    console.log(book);
    }
    }
    // Example usage:
    var favoriteBooks = ["To Kill a Mockingbird", "Pride and Prejudice", "The GreatGatsby"];
    displayBooksForOfLoop(favoriteBooks);