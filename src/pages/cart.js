import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'


export default function Cart() {

    const { cartDetails, incrementItem, decrementItem, totalPrice, redirectToCheckout } = useShoppingCart()
    console.log(cartDetails);

    if (!Object.keys(cartDetails).length) {
        return <h1>Your cart is Empty</h1>
    }
    

    return (
        <div>
            {
                Object.keys(cartDetails).map((item) => {
                    console.log('item',)
                    return (
                        <div key={cartDetails[item].id} style={{ border: '1px solid grey', marginTop: '20px', padding: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} >

                            <div><img src={cartDetails[item].image} alt={cartDetails[item].image} width='300px' /></div>
                            <div>Name: {cartDetails[item].name}</div>
                            <div>Price: {cartDetails[item].value}</div>
                            <div>Qty: {cartDetails[item].quantity}</div>
                            <span>
                                <button onClick={() => {
                                    incrementItem(cartDetails[item].id)
                                }} >+</button>

                                <button onClick={() => {
                                    decrementItem(cartDetails[item].id)
                                }} >-</button>
                            </span>


                        </div>
                    )
                })
            }
            <div style={{textAlign:'center'}} >
                <h2  >Total: {totalPrice}$</h2>
                <button style={{padding:'20px', borderRadius:'10px', border:'none', outline:'none', backgroundColor:'purple', color:'white',fontWeight:'bold', cursor:'pointer'}}  onClick={()=> {
                    redirectToCheckout()
                }}>Checkout</button>
            </div>

        </div>
    )
}


