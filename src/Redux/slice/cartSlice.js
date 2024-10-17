
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(item => item.id === action.payload.id);
      
      if (existingProduct) {
      
        existingProduct.quantity++;
        existingProduct.totalprice = existingProduct.price * existingProduct.quantity;
      } else {
        state.push({ ...action.payload, quantity: 1, totalprice: action.payload.price });
      }
    },
    removeFromCart: (state,action)=>{
      return state.filter(item=>item.id!==action.payload)
    },
    emptyCart:(state)=>{
      return state=[]
    }
  }
});

export const { addToCart, removeFromCart,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
