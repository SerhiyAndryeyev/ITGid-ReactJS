import { createSlice } from '@reduxjs/toolkit';

export const oneSlice = createSlice({
    name: 'one', // любое имя
    initialState: 50,
    reducers: {
       abcd : state => {
        state = state + 150;
        return state;
      }
    }
});

export default oneSlice;