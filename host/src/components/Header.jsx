import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../store/feature/cartSlice';

const Header = () => {
    const cartProducts = useSelector(selectCartProducts);

    return (
        <header style={{
            backgroundColor: '#f69435',
            color: 'white',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <h1 style={{ margin: 0 }}>Micro-Frontend Host</h1>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0 }}>
                    <li><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></li>
                    <li><Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart {cartProducts.length}</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
