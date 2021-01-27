import React from 'react'
import { CartProvider } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe('pk_test_51ID4h4CFr2HaNF8LAl2XJYQtyyWzDz0qxdXmJ9MVhRWvK7o0j7nuu8tV5yfYZAPYm424yYHVA1DaHxMNEfjFBKTu00d3prYB2B')

export const wrapRootElement = ({element}) => {
    return (
        <div>
        <CartProvider
            mode='client-only'
            stripe={stripePromise}
            successUrl={`${window.origin}/payment-success`}
            cancelUrl={`${window.origin}/`}
            currency="USD"
             >

            {element}  

        </CartProvider>
        </div>
    )
}




