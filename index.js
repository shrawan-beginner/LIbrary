const myLibrary = [];

function Book(title, author, pages, completed) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.completed = completed;
}

Book.prototype.info = function () {
    return `${this.id} ${this.title} which was written by ${this.author} has ${this.pages} pages and is ${this.completed}.`
}

function addBookToLibrary(title, author, pages, read) {
    let completed
    if (read) {
        completed = "read";
    } else {
        completed = "not read";
    }
    const book = new Book(title, author, pages, completed);
    myLibrary.push(book);
}