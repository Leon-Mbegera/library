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
  const readStatus = document.getElementById('isRead').checked;

  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
}

const inputForm = document.getElementById('bkForm');
inputForm.addEventListener('submit', addBookToLibrary);

const bookCard = (newBook) => {
  const div = document.createElement('div');
  const title = document.createElement('p');
  title.textContent = newBook.title;
  const author = document.createElement('p');
  author.textContent = newBook.author;
  const pages = document.createElement('p');
  pages.textContent = newBook.pages;
  const read = document.createElement('p');
  read.textContent = newBook.readStatus;
  div.append([title, author, pages, read]);
}