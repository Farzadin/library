/* eslint-disable no-alert */
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book = Object.create(Book)
  book.title = prompt('Title of the Book?')
  book.author = prompt('Author of the Book?')
  book.pages = prompt('Number of the pages of the Book?')
  book.read = prompt('You already read the Book. true or false?')
  myLibrary.push(book)
}