import React from 'react'

function Product() {
    return (

        <div className="col-12 col-sm-6 col-lg-3">
        <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="100ms">
            {/* Product Image */}
            <div className="product-img">
                <a href="shop-details.html"><img src="img/bg-img/9.jpg" alt /></a>
                {/* Product Tag */}
                <div className="product-tag">
                    <a href="#">Hot</a>
                </div>
                <div className="product-meta d-flex">
                    <a href="#" className="wish list-btn"><i className="icon_heart_alt" /></a>
                    <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                    <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                </div>
            </div>
            {/* Product Info */}
            <div className="product-info mt-15 text-center">
                <a href="shop-details.html">
                    <p>Cactus Flower</p>
                </a>
                <h6>$10.99</h6>
            </div>
        </div>
    </div>
    )
}

export default Product
