import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export const CartContextProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartContextProvider");
    }
    return context;
};
