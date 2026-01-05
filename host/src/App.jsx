
import { lazy } from "react";
const Products = lazy(() => import("products/Products"));

function App() {
  return (
    <>
      <p className="read-the-docs">
        Host App
      </p>
      <Products />

    </>
  )
}

export default App
