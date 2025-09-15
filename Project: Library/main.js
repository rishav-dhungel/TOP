const myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: "Read" },
  { title: "1984", author: "George Orwell", pages: 328, read: "Not Read" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, read: "Read" },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 279, read: "Not Read" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, read: "Read" },
  { title: "Moby-Dick", author: "Herman Melville", pages: 635, read: "Not Read" },
  { title: "War and Peace", author: "Leo Tolstoy", pages: 1225, read: "Not Read" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 214, read: "Read" },
  { title: "Brave New World", author: "Aldous Huxley", pages: 268, read: "Read" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", pages: 671, read: "Not Read" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pages: 1178, read: "Read" },
  { title: "The Alchemist", author: "Paulo Coelho", pages: 197, read: "Read" },
  { title: "Don Quixote", author: "Miguel de Cervantes", pages: 863, read: "Not Read" },
  { title: "The Odyssey", author: "Homer", pages: 541, read: "Read" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", pages: 194, read: "Not Read" }
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
const addBookForm = document.getElementById("add-book-form");

addBookBtn.addEventListener("click", () => dialog.showModal());
addBookForm.addEventListener("submit", function(event){
  event.preventDefault();

  console.log(event);


})

closeDialog.addEventListener("click", () => dialog.close());