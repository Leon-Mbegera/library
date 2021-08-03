const myLibrary = [];

const Book = (title, author, pages, readStatus)=> {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

const addBookToLibrary = ()=> {
  browser.preventDefault();
  const title = document.getElementById('bkTitle').value;
  const author = document.getElementById('bkAuthor').value; 
  const pages = document.getElementById('bkPages').value;
  const readStatus = document.getElementById('isRead').value;

  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
}

const inputForm = document.getElementById('bkForm');
inputForm.addEventListener('submit', addBookToLibrary);