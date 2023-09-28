import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/books';
import checkStatusSlice from './categories/categories';

const rootReducer = combineReducers({
  books: booksSlice,
  status: checkStatusSlice,
});

const store = configureStore(rootReducer);

export default store;
