import { useDispatch } from 'react-redux';
import { addProduct } from 'host/Store';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div key={product.id} style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{product.title}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', flexGrow: 1, marginBottom: '1rem' }}>{product.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50' }}>${product.price}</span>
                <button
                    style={{ padding: '0.6rem 1.2rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', transition: 'background 0.2s' }}
                    onClick={() => dispatch(addProduct(product))}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Product