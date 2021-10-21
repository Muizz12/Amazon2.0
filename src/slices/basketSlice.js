import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketitems => basketitems.id === action.payload.id);
      let newBasket = [...state.items];
      if (index => 0) {
        // The item exits in the Basket
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant remove the product (Id:${action.payload.id}) as its not in the basket`)
      }
      state.items = newBasket;
    }

  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0)

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
