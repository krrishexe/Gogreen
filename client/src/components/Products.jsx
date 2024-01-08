import React, { useEffect } from 'react'
import Product from './Product'

function Products({products,limit}) {

    return (
        <div className="row">
            {products &&  products.data ? (products.data.slice(0,limit).map((item)=>{
                return <Product key={item.id} id={item.id} data={item.attributes} />

            })) : `loading`}
            
        </div>
    )
}

export default Products
