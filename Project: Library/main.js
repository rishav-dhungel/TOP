const myLibrary = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, read: true, id: crypto.randomUUID() },
  { title: "1984", author: "George Orwell", pages: 328, read: false, id: crypto.randomUUID() },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, read: true, id: crypto.randomUUID() },
  { title: "Pride and Prejudice", author: "Jane Austen", pages: 279, read: false, id: crypto.randomUUID() },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180, read: true, id: crypto.randomUUID() },
];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read === "true" || read === true; // normalize to boolean
}

const bookContainer = document.querySelector(".book-container");

function addBookToLibrary(book) {
  const div = document.createElement("div");
  div.className = "book-box";
  div.setAttribute("data-id", book.id);

  const titleP = document.createElement("p");
  titleP.innerText = `Title: ${book.title}`;

  const authorP = document.createElement("p");
  authorP.innerText = `Author: ${book.author}`;

  const pagesP = document.createElement("p");
  pagesP.innerText = `Pages: ${book.pages}`;

  const readBtn = document.createElement("button");
  readBtn.className = "toggle-read";
  readBtn.setAttribute("data-id", book.id);
  readBtn.innerText = `Status: ${book.read ? "Read" : "Not Read"}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.setAttribute("data-id", book.id);
  deleteBtn.textContent = "🗑️";

  div.append(titleP, authorP, pagesP, readBtn, deleteBtn);
  bookContainer.appendChild(div);
}

function renderBooks() {
  bookContainer.innerHTML = ""; // clear before rendering
  myLibrary.forEach(addBookToLibrary);
}

// Event delegation for toggle + delete
bookContainer.addEventListener("click", function (e) {
  const id = e.target.getAttribute("data-id");
  if (!id) return;

  if (e.target.classList.contains("toggle-read")) {
    const book = myLibrary.find((b) => b.id === id);
    book.read = !book.read;
    renderBooks();
  }

  if (e.target.classList.contains("delete-btn")) {
    const index = myLibrary.findIndex((b) => b.id === id);
    if (index > -1) myLibrary.splice(index, 1);
    renderBooks();
  }
});

// Dialog + form
const addBookBtn = document.getElementById("add-book-btn");
const dialog = document.getElementById("add-book-dialog");
const closeDialog = document.getElementById("close-add-book-dialog");
const addBookForm = document.getElementById("add-book-form");

addBookBtn.addEventListener("click", () => dialog.showModal());
closeDialog.addEventListener("click", () => dialog.close());

addBookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(addBookForm);
  const book = new Book(
    formData.get("bookName"),
    formData.get("authorName"),
    formData.get("bookPages"),
    formData.get("readStatus")
  );
  myLibrary.push(book);
  renderBooks();
  dialog.close();
  addBookForm.reset();
});

renderBooks();
