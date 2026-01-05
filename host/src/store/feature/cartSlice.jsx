import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartProducts: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.cartProducts.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.cartProducts = state.cartProducts.filter(product => product.id !== action.payload.id)
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions
export const selectCartProducts = (state) => state.cart.cartProducts
export default cartSlice.reducer