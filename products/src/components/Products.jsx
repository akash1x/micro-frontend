import { useGetProductsQuery } from "host/Store"
import Product from "./Product"

const Products = () => {
    const { data, isLoading } = useGetProductsQuery()
    const products = data?.products || []

    if (isLoading) return <div>Loading...</div>

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', padding: '1.5rem' }}>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Products