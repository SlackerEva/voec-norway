import {configureStore} from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import codeReducer from './codeSlice';


export default configureStore({
  reducer: {
    shops: shopReducer,
    codes: codeReducer,
  }
});