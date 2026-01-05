import { useEffect, useState } from "react"
import axios from "axios"
import Product from "./Product"


const Products = ({ handleAddCart }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then(res => {
            setProducts(res.data.products)
        })
    }, [])

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', padding: '1.5rem' }}>
            {products.map(product => (
                <Product key={product.id} product={product} handleAddCart={handleAddCart} />
            ))}
        </div>
    )
}

export default Products