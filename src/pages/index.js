import React from "react";
import CartStatus from "../components/CartStatus";
import Product from "../components/Product";

const productData = [
  {
    name: 'Shoe',
    id: 'price_1ID5pCCFr2HaNF8LZdXUZzQR',
    price: 30,
    image: 'https://thumbs.dreamstime.com/b/mens-shoes-window-shoe-store-52195441.jpg',
    currency: 'USD'
  },
  {
    name: 'Water Bottle',
    id: 'price_1ID58SCFr2HaNF8LEY8n1gFd',
    price: 10,
    image: 'https://shoptupperware.in/pub/media/catalog/product/cache/d161397db91a9bb867afabf7218df83e/1/1/11142351_2.jpg',
    currency: 'USD'
  }
]

export default  function Home  ()  {



  return (
   <div>
      <CartStatus />
      <div>
        {productData.map((product)=> {
          return(

            <div style={{marginTop:'20px' }} key={product.id} >
              <Product  product={product} />
            </div>
          )
        })}
      </div>
   </div>
  )
}
