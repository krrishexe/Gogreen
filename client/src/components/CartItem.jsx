import React from 'react'
import {MdClose} from 'react-icons/md'
function CartItem() {
    return (
        <tr>
            <td className="cart_product_img">
                <a href="#"><img src="img/bg-img/34.jpg" alt="Product" /></a>
                <h5>Recuerdos Plant</h5>
            </td>
            <td className="qty">
                <div className="quantity">
                    <span className="qty-minus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true" /></span>
                    <input type="number" className="qty-text" id="qty" step={1} min={1} max={99} name="quantity" defaultValue={1} />
                    <span className="qty-plus" onClick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true" /></span>
                </div>
            </td>
            <td className="price"><span>$9.99</span></td>
            <td className="total_price"><span>$9.99</span></td>
            <td className="action"><MdClose className='close-btn' /></td>
        </tr>
    )
}

export default CartItem
