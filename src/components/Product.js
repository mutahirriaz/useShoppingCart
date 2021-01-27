import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function Product({product}) {

    const {addItem} = useShoppingCart()

    return (
        <div style={{padding:'20px', border:'1px solid grey', borderRadius:'10px',textAlign:'center',}} >
            <div><img width='200px' src={product.image} /></div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'200px', margin:'10px auto'}} >
            <div> {product.name}</div>
            <div> {product.price}$</div>
            </div>
           
                <button onClick={()=> {
                    console.log('product', product)
                    addItem(product)
                }} 
                >Add To Cart</button>
            
        </div>
    )
}

