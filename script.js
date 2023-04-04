const myLibrary = [];
const bookIds = [];
const table = document.querySelector('table');
const openModalButton = document.querySelector('.new__book');
const closeModalButton = document.querySelector('.close__btn');
const submitButton = document.querySelector('.submit');
const overlay = document.getElementById('overlay');

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBooks() {
  myLibrary.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.author}</td>
      <td>${item.pages}</td>
      <td>${item.read}</td>`;

    table.appendChild(row);
  });
}

function addBook(event) {
  event.preventDefault();

  const id = document.querySelector('#id').value;
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read');

  if (read.checked === true) read.value = 'Already read it';
  if (read.checked === false) read.value = 'Not read yet';

  const newBook = new Book(id, title, author, pages, read.value);

  if (!bookIds.includes(newBook.id)) {
    bookIds.push(newBook.id);
    myLibrary.push(newBook);
    displayBooks();
    myLibrary.pop();
  }
}

submitButton.addEventListener('click', addBook);

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  openModal(modal);
});
closeModalButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  closeModal(modal);
});

overlay.addEventListener('click', () => {
  const modal = document.querySelector('.modal.active');
  closeModal(modal);
});
