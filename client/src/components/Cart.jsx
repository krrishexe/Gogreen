import React, { useContext } from 'react'
import { BsCartX } from "react-icons/bs";
import ViewAll from './ViewAll';
import CartItem from './CartItem';
import { Context } from '../utils/Context';


function Cart() {
    const { cartItems, cartSubTotal } = useContext(Context)
    return (
        <div>
            {/* ##### Header Area End ##### */}
            {/* ##### Breadcrumb Area Start ##### */}

            <div className="breadcrumb-area">
                {/* Top Breadcrumb Area */}
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
                    <h2>Shopping Cart</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Cart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>



            {
                !cartItems?.length && <div className='empty-cart'>
                    <BsCartX />
                    <span>No products in the cart.</span>
                    <ViewAll />
                    <div style={{display:'block',height:'100px'}}></div>
                </div>
            }

            {!!cartItems?.length && <div className="cart-area section-padding-0-100 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-table clearfix">
                                <table className="table table-responsive">

                                    <thead>
                                        <tr>
                                            <th>Products</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>TOTAL</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <CartItem />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Coupon Discount */}
                        <div className="col-12 col-lg-6">
                            <div className="coupon-discount mt-70">
                                <h5>COUPON DISCOUNT</h5>
                                <p>Coupons can be applied in the cart prior to checkout. Add an eligible item from the booth of the seller that created the coupon code to your cart. Click the green "Apply code" button to add the coupon to your order. The order total will update to indicate the savings specific to the coupon code entered.</p>
                                <form action="#" method="post">
                                    <input type="text" name="coupon-code" placeholder="Enter your coupon code" />
                                    <button type="submit">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                        {/* Cart Totals */}
                        <div className="col-12 col-lg-6">
                            <div className="cart-totals-area mt-70">
                                <h5 className="title--">Cart Total</h5>
                                <div className="subtotal d-flex justify-content-between">
                                    <h5>Subtotal</h5>
                                    <h5>${cartSubTotal}</h5>
                                </div>
                                <div className="shipping d-flex justify-content-between">
                                    <h5>Shipping</h5>
                                    <div className="shipping-address">
                                        <form action="#" method="post">
                                            <select className="custom-select">
                                                <option >Country</option>
                                                <option selected value={5}>India</option>
                                                <option value={1}>USA</option>
                                                <option value={2}>Latvia</option>
                                                <option value={3}>Japan</option>
                                                <option value={4}>Bangladesh</option>
                                            </select>
                                            <input type="text" name="shipping-text" id="shipping-text" placeholder="State" />
                                            <input type="text" name="shipping-zip" id="shipping-zip" placeholder="ZIP" />
                                            <button type="submit">Update Total</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="total d-flex justify-content-between">
                                    <h5>Total</h5>
                                    <h5>${cartSubTotal}</h5>
                                </div>
                                <div className="checkout-btn">
                                    <a href="#" className="btn alazea-btn w-100">PROCEED TO CHECKOUT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            {/* ##### Cart Area End ##### */}
            {/* ##### Footer Area Start ##### */}
            {/* ##### Footer Area End ##### */}
            {/* ##### All Javascript Files ##### */}
            {/* jQuery-2.2.4 js */}
            {/* Popper js */}
            {/* Bootstrap js */}
            {/* All Plugins js */}
            {/* Active js */}
        </div>

    )
}

export default Cart
