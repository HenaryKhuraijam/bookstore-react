import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BaseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wJwbTonvXMGZhwk49w7x/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(BaseUrl);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const { id, title, author } = book;
  const newBook = {
    item_id: id,
    title,
    author,
    category: 'Fiction',
  };
  await axios.post(BaseUrl, newBook);
  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${BaseUrl}/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => Object.entries(action.payload)
        .map((item) => {
          const { title, author } = item[1][0];
          return { id: item[0], title, author };
        }))
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => (
        state.filter((book) => book.id !== action.payload)));
  },
});

export default booksSlice.reducer;
