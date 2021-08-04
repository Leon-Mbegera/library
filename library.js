const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

const bookCard = (newBook) => {
  const div = document.createElement('div');
  const title = document.createElement('p');
  title.textContent = `Book title: ${newBook.title}`;
  const author = document.createElement('p');
  author.textContent = `Author: ${newBook.author}`;
  const pages = document.createElement('p');
  pages.textContent = `Pages: ${newBook.pages}`;
  const read = document.createElement('p');
  read.textContent = `Read?: ${newBook.readStatus}`;
  const remove = document.createElement('button');
  remove.innerHTML = "Eject Book"
  const readStatus = document.createElement('button');
  readStatus.innerHTML = "Toggle read status"
  div.append(title, author, pages, read, remove, readStatus);
  remove.addEventListener('click', ()=>removeFromLib(myLibrary.indexOf(newBook)) )
  readStatus.addEventListener('click', ()=>readstatus(myLibrary.indexOf(newBook)) )
  div.className = 'card'
  return div
}

const bookSection = document.getElementById('bookSection');
const showBooks = ()=> {
  bookSection.innerHTML = "";
  myLibrary.forEach((newBook)=> {
    const newBookCard = bookCard(newBook);
    bookSection.appendChild(newBookCard);
     
  });
}

function readstatus(index) {
  if (myLibrary[index].readStatus === false) {
    myLibrary[index].readStatus = true;
  }
  else {
     myLibrary[index].readStatus = false; 
  }
  showBooks();
}

function removeFromLib(index) {
  myLibrary.splice(index, 1)
    showBooks();
}

const addBookToLibrary = (event)=> {
  event.preventDefault();
  const title = document.getElementById('bkTitle').value;
  const author = document.getElementById('bkAuthor').value; 
  const pages = document.getElementById('bkPages').value;
  const readStatus = document.getElementById('isRead').checked;

  const newBook = new Book(title, author, pages, readStatus)
  myLibrary.push(newBook);
  showBooks();
}

const inputForm = document.getElementById('bkForm');
inputForm.addEventListener('submit', addBookToLibrary);



