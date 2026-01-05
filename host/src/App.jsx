import { lazy, useState } from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const Products = lazy(() => import("products/Products"));
const Cart = lazy(() => import("cart/Cart"));

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const handleAddCart = (product) => {
    setCartProducts([...cartProducts, product]);
    console.log(cartProducts);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout cartProducts={cartProducts} />,
      children: [
        {
          path: "/cart",
          element: <Cart cartProducts={cartProducts} />
        },
        {
          path: "/products",
          element: <Products handleAddCart={handleAddCart} />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />

  )
}

export default App
