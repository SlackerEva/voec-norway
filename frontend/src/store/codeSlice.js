import {createSlice} from '@reduxjs/toolkit';

const codeSlice = createSlice({
    name: 'codes',
    initialState: {
      codes: [],
    },
    reducers: {
      addCodes(state, action) {
        //state.codes.push(action.payload.codes);
        state.codes = [...action.payload.codes];
      },
      checkCb(state, action) {
        const cb = state.codes.find(code => code.code === action.payload.code.code);
        cb.check = !cb.check;
      },
      checkAllCb(state, action) {
        const allCb = state.codes;
        allCb.map(cb => cb.check = action.payload.isCheckedAllCb);
      }
    }
  });

export const { addCodes, checkCb, checkAllCb } = codeSlice.actions;
export default codeSlice.reducer;