import { lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Products = lazy(() => import("products/Products"));

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: 1, padding: '2rem' }}>
        <Products />
      </div>
      <Footer />
    </div>
  )
}

export default App
