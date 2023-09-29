import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const newBook = {
    id: v4(),
    title,
    author,
    category,
  };

  const addBookStore = (e) => {
    e.preventDefault();
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <>
      <div className="container border-top mx-auto mt-5 px-0 py-4">
        <form className="form-box m-0 p-0">
          <p className="label font-style-1">ADD NEW BOOK</p>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Book title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              onClick={addBookStore}
              className="btn1 font-style-1"
              type="submit"
              value="ADD BOOK"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default AddBook;
