const myLibrary = [];

const Book = (title, author, pages, readStatus)=> {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

const addBookToLibrary =()=> {
  event.preventDefault();
  title = document.getElementById('bkTitle').value;
  author = document.getElementById('bkAuthor').value; 
  pages = document.getElementById('bkPages').value;
  readStatus = document.getElementById('isRead').value;
}