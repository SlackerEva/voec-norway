import {createSlice} from '@reduxjs/toolkit';

const shopSlice = createSlice({
    name: 'shops',
    initialState: {
      shops: [],
    },
    reducers: {
      addShops(state, action) {
        //state.shops.push(action.payload.shops);
        state.shops = [...action.payload.shops]
      }
    }
  });

export const { addShops } = shopSlice.actions;
export default shopSlice.reducer;