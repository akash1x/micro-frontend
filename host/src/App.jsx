import { lazy } from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Products = lazy(() => import("products/Products"));
const Cart = lazy(() => import("cart/Cart"));

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/products",
          element: <Products />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
