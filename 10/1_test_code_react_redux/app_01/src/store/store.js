import { configureStore } from '@reduxjs/toolkit';
import oneSlice from './oneSlice';

export default configureStore({
    reducer: {
        one : oneSlice.reducer,
    }
});