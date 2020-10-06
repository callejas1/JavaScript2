'use strict';
/**
  
 ** Exercise 1: The book list **
  I 'd like to display my three favorite books inside a nice webpage!
  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).
  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
  */

function createBookList(books) {
  // your code goes in here, return the ul element

  // create ul tag
  const ulTag = document.createElement('ul');

  // loop through every book and create a p inside => ul>li
  for (const book of books) {
    // declaring variables for each new element
    const liTag = document.createElement('li');
    const pTag = document.createElement('p');
    const bookCover = document.createElement('img');

    // remove list style & add flex display
    ulTag.style.listStyle = 'none';
    ulTag.style.display = 'flex';
    ulTag.style.flexWrap = 'wrap';

    // modifying list style
    liTag.style.width = '300px';
    liTag.style.margin = '15px';
    liTag.style.padding = '15px';

    // this will display the title and author of each book
    pTag.innerText = ` ${book.title} by ${book.author}`;

    // declaring source as the key url present in each book
    bookCover.src = `${book.url}`;
    bookCover.style.width = '150px'; // to style the width of each

    liTag.appendChild(pTag); // to attach <p> inside <li>
    liTag.appendChild(bookCover); // <img> inside <li>
    ulTag.appendChild(liTag); // <li> inside <ul>

    // condition to change background color if already read
    if (book.alreadyRead === true) {
      liTag.style.background = 'green';
    } else {
      liTag.style.background = 'red';
    }
  }
  return ulTag;
}

// added url key for step #4
const books = [
  {
    title: 'Azul',
    author: 'Ruben Dario',
    alreadyRead: false,
    url: 'https://www.isliada.org/static/images/2016/10/azul.jpg',
  },
  {
    title: 'Tiempos de fulgor',
    author: 'Sergio Ramirez',
    alreadyRead: true,
    url:
      'https://www.libreriauca.com/system/balloom/product_assets/attachments/000/014/477/normal/LIB-9789992448427.jpg?1547784579',
  },
  {
    title: 'Think like a programmer',
    author: 'V. Anton Spraul',
    alreadyRead: false,
    url:
      'https://www0.alibris-static.com/think-like-a-programmer-an-introduction-to-creative-problem-solving/isbn/9781593274245_l.jpg',
  },
];

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
