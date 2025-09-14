const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    read: true
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    read: false
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    read: true
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
    read: false
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: true
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    pages: 635,
    read: false
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    pages: 1225,
    read: false
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 214,
    read: true
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    pages: 268,
    read: true
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    pages: 671,
    read: false
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1178,
    read: true
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 197,
    read: true
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    pages: 863,
    read: false
  },
  {
    title: "The Odyssey",
    author: "Homer",
    pages: 541,
    read: true
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    pages: 194,
    read: false
  }
];


function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const book2 = new Book("1984", "George Orwell", 328, false);
const bookContainer = document.querySelector(".book-container");

function addBookToLibrary(book) {
  // take params, create a book then store it in the array
    let div = document.createElement("div");
    div.className = "book-box"

    let titleP = document.createElement("p");
    let authorP = document.createElement("p");
    let pagesP = document.createElement("p");
    let readP = document.createElement("p");

    titleP.innerText = "Title: " + book.title;
    authorP.innerText = "Author: " +book.author;
    pagesP.innerText = "Pages: " +book.pages;
    readP.innerText = "Read Status: " +book.read;

    div.appendChild(titleP);
    div.appendChild(authorP);
    div.appendChild(pagesP);
    div.appendChild(readP);

    bookContainer.appendChild(div);
}


myLibrary.forEach(function(book){
  addBookToLibrary(book);
})

const addBookBtn = document.getElementById("add-book-btn");
const dialog = document.getElementById("add-book-dialog");
const closeDialog = document.getElementById("close-add-book-dialog");


addBookBtn.addEventListener("click", () => dialog.showModal());
closeDialog.addEventListener("click", () => dialog.close());