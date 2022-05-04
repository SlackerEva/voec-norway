import {createSlice} from '@reduxjs/toolkit';

const codeSlice = createSlice({
    name: 'codes',
    initialState: {
      codes: [],
    },
    reducers: {
      addCodes(state, action) {
        //state.codes.push(action.payload.codes);
        state.codes = [...action.payload.codes]
      }
    }
  });

export const { addCodes } = codeSlice.actions;
export default codeSlice.reducer;