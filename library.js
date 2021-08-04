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
  remove.innerHTML = "Eject"
  div.append(title, author, pages, read, remove);
  remove.addEventListener('click', ()=>removeFromLib(myLibrary.indexOf(newBook)) )
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



