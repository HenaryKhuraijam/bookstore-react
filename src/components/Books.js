import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => (
  <>
    <Book
      title="Life in jungle"
      author="Kuki fake"
      status="0%"
      chapter="chapter 1"
    />
    <Book
      title="Advanture of Wildlife"
      author="Tines Alli"
      status="20%"
      chapter="chapter 3"
    />
    <AddBook />
  </>
);

export default Books;
