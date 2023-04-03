/* eslint-disable no-alert */
const myLibrary = [];
const table = document.querySelector('table');
const openModalButtons = document.querySelector('.new__book')
const closeModalButtons = document.querySelector('.close__btn')
const overlay = document.getElementById('overlay')

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToTable() {
  myLibrary.forEach((book) => {
    const template = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
      `;
    table.innerHTML += template;
    myLibrary.pop();
  });
}

function addBookToLibrary() {
  const book = Object.create(Book);
  book.title = prompt('Title of the Book?');
  book.author = prompt('Author of the Book?');
  book.pages = prompt('Number of the pages of the Book?');
  book.read = prompt('You already read the Book. true or false?');
  myLibrary.push(book);
  addBookToTable();
}


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

openModalButtons.addEventListener('click', () => {
  const modal = document.querySelector('.modal')
  openModal(modal)
})
closeModalButtons.addEventListener('click', () => {
  const modal = document.querySelector('.modal')
  closeModal(modal)
})

overlay.addEventListener('click', () => {
  const modal = document.querySelector('.modal.active')
  closeModal(modal)
})