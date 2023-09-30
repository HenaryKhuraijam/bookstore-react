import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const bookList = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {bookList.length ? (
        bookList.map((book) => <Book book={book} key={book.id} />)
      ) : (
        <h3 className="container mx-auto mb-3 px-3 py-3 bg-white text-5 font-style-1">
          No books to show!
        </h3>
      )}
      <AddBook />
    </>
  );
};

export default Books;
