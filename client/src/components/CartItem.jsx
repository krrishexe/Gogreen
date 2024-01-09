import React, { useContext, useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import { Context } from '../utils/Context'


function CartItem() {
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } = useContext(Context)

    

    return (
        <>
            {
                cartItems.map((item) => (
                    <tr key={item.id} >
                        <td  className="cart_product_img">
                            <a href="#"><img src={import.meta.env.VITE_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="Product" /></a>
                            <h5>{item.attributes.title}</h5>
                        </td>
                        <td className="qty">
                            <div className="quantity">
                                <span className="qty-minus" onClick={() => { handleCartProductQuantity('dec', item) }}><i className="fa fa-minus" aria-hidden="true" /></span>

                                <span className='qty-text'>{item.attributes.quantity}</span>
                                <span className="qty-plus" onClick={() => { handleCartProductQuantity('inc', item) }}><i className="fa fa-plus" aria-hidden="true" /></span>
                            </div>
                        </td>
                        <td className="price"><span>${item.attributes.price}</span></td>
                        <td className="total_price"><span>${item.attributes.price * item.attributes.quantity}</span></td>
                        <td className="action"><MdClose className='close-btn' onClick={() => { handleRemoveFromCart(item) }} /></td>
                    </tr>
                ))
            }
        </>

    )
}

export default CartItem
