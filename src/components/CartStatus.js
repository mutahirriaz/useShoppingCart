import { navigate } from 'gatsby';
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'


export default function CartStatus() {

    const { totalPrice, cartCount, clearCart } = useShoppingCart();
    return (
        <div style={{ marginTop: '20px' }} >

            <div>Total Price: {totalPrice}</div>

            {/* <div>Count: {cartCount}</div> */}

            <div style={{ textAlign: 'right', position: 'relative', top: '-30px', left: '2px' }} >
                <button style={{ border: 'none', borderRadius: '10px', cursor: 'pointer', textAlign: 'right' }} onClick={() => {
                    navigate('/cart')
                }} >
                    <img style={{ textAlign: 'right' }} width='40px' src='https://media.istockphoto.com/vectors/black-shopping-cart-icon-on-transparent-background-vector-id1055020934?k=6&m=1055020934&s=612x612&w=0&h=HNAJY92_PBGxH2iPlbj7pCwdYiK24F8lCNdQ8Kc3MUc=' alt='hsdgfg' />
                    <span>cart:{cartCount}</span>
                </button>
            </div>

            <div>
                <button onClick={() => {
                    clearCart();
                }} >clearCart</button>
            </div>

        </div>
    )
}


