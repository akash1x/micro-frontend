import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cartSlice";
import { productsApi } from "./feature/productsApi";
import { addProduct, removeProduct, selectCartProducts } from "./feature/cartSlice";
import { useGetProductsQuery } from "./feature/productsApi";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export { addProduct, removeProduct, selectCartProducts, useGetProductsQuery, }

export default store