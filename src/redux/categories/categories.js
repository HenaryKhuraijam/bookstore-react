import { createSlice } from '@reduxjs/toolkit';

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = '';

const checkStatusSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatusAction: () => ({
      type: CHECK_STATUS,
    }),
    checkStatusReducer: () => {
      const information = 'UNDER-CONSTRUCTION';
      return information;
    },
  },
});

export const { checkStatusAction, checkStatusReducer } = checkStatusSlice.actions;
export default checkStatusSlice.reducer;
