import React from 'react';

const Header = () => {
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
                    <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Products</a></li>
                    <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Cart</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
