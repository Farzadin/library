const myLibrary = [];
const bookIds = [];
const displayedBooks = [];
const tableBody = document.querySelector('tbody');
const openModalButton = document.querySelector('.new__book');
const closeModalButton = document.querySelector('.close__btn');
const submitButton = document.querySelector('.submit');
const modal = document.querySelector('.modal');
const overlay = document.getElementById('overlay');

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// eslint-disable-next-line func-names
Book.prototype.toggleReadStatus = function () {
  if (this.read === 'Already read it') {
    this.read = 'Not read yet';
  } else {
    this.read = 'Already read it';
  }
};

function displayBooks() {
  myLibrary.forEach((book) => {
    if (!displayedBooks.includes(book)) {
      const row = document.createElement('tr');

      row.innerHTML = `
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
      <td><button class='remove' data-id='${book.id}'>&times;</button></td>
      <td><button class='toggle' data-id='${book.id}'>Toggle Read Status</button></td>
      `;

      tableBody.appendChild(row);
      displayedBooks.push(book);
    }

    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const bookId = Number(e.target.getAttribute('data-id'));

        const bookIndex = myLibrary.findIndex((item) => item.id === bookId);
        myLibrary.splice(bookIndex, 1);
        displayedBooks.splice(bookIndex, 1);
        bookIds.splice(bookIndex, 1);

        const tableRow = e.target.parentElement.parentElement;
        tableRow.remove();
      });
    });

    const toggleButtons = document.querySelectorAll('.toggle');
    toggleButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        book.toggleReadStatus();
        const tableRow = e.target.parentElement.parentElement;
        const readCell = tableRow.querySelector('td:nth-child(5)');
        readCell.textContent = book.read;
      });
    });
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
  if (id === '') return;

  const newBook = new Book(id, title, author, pages, read.value);

  if (!bookIds.includes(newBook.id)) {
    bookIds.push(newBook.id);
    myLibrary.push(newBook);
    displayBooks();
    closeModal();
  }
}

submitButton.addEventListener('click', addBook);

function openModal() {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal() {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
