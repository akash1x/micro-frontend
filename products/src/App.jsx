import Products from "./components/Products"
import { CartContextProvider } from "host/cartStore"

function App() {

  return (
    <CartContextProvider>
      <Products />
    </CartContextProvider>
  )
}

export default App
