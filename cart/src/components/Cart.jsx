import { useSelector } from 'react-redux';
import { selectCartProducts } from "host/Store";
const Cart = () => {
    const cartProducts = useSelector(selectCartProducts);
    const total = cartProducts.reduce((acc, item) => acc + item.price, 0).toFixed(2);

    if (cartProducts.length === 0) {
        return (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#666', border: '1px dashed #ccc', borderRadius: '8px', margin: '1rem' }}>
                <h3>Your cart is empty</h3>
                <p>Add some products to see them here.</p>
            </div>
        )
    }

    return (
        <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1.5rem', borderBottom: '2px solid #f69435', paddingBottom: '0.5rem' }}>Shopping Cart</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cartProducts.map((product, index) => (
                    <div key={`${product.id}-${index}`} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '1rem',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        border: '1px solid #eee'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            {product.thumbnail && (
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                                />
                            )}
                            <div>
                                <h4 style={{ margin: '0 0 0.25rem 0', color: '#333' }}>{product.title}</h4>
                                <span style={{ fontSize: '0.9rem', color: '#888' }}>${product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                textAlign: 'right',
                borderTop: '1px solid #eee'
            }}>
                <div style={{ fontSize: '1.1rem', color: '#555', marginBottom: '0.5rem' }}>
                    Subtotal ({cartProducts.length} items):
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2c3e50' }}>
                    ${total}
                </div>
                <button style={{
                    marginTop: '1rem',
                    padding: '0.8rem 2rem',
                    backgroundColor: '#f69435',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(246, 148, 53, 0.2)'
                }}>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default Cart