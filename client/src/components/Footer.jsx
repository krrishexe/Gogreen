import React from 'react'

function Footer() {
  return (
    <div>
    <footer className="footer-area bg-img" style={{ backgroundImage: 'url(img/bg-img/3.jpg)' }}>
                    {/* Main Footer Area */}
                    <div className="main-footer-area">
                        <div className="container">
                            <div className="row">
                                {/* Single Footer Widget */}
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget">
                                        <div className="footer-logo mb-30">
                                            <a href="#"><img src="img/core-img/logo.png" alt /></a>
                                        </div>
                                        <p>Lorem ipsum dolor sit samet, consectetur adipiscing elit. India situs atione mantor</p>
                                        <div className="social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Footer Widget */}
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget">
                                        <div className="widget-title">
                                            <h5>QUICK LINK</h5>
                                        </div>
                                        <nav className="widget-nav">
                                            <ul>
                                                <li><a href="#">Purchase</a></li>
                                                <li><a href="#">FAQs</a></li>
                                                <li><a href="#">Payment</a></li>
                                                <li><a href="#">News</a></li>
                                                <li><a href="#">Return</a></li>
                                                <li><a href="#">Advertise</a></li>
                                                <li><a href="#">Shipping</a></li>
                                                <li><a href="#">Career</a></li>
                                                <li><a href="#">Orders</a></li>
                                                <li><a href="#">Policities</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* Single Footer Widget */}
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget">
                                        <div className="widget-title">
                                            <h5>BEST SELLER</h5>
                                        </div>
                                        {/* Single Best Seller Products */}
                                        <div className="single-best-seller-product d-flex align-items-center">
                                            <div className="product-thumbnail">
                                                <a href="shop-details.html"><img src="img/bg-img/4.jpg" alt /></a>
                                            </div>
                                            <div className="product-info">
                                                <a href="shop-details.html">Cactus Flower</a>
                                                <p>$10.99</p>
                                            </div>
                                        </div>
                                        {/* Single Best Seller Products */}
                                        <div className="single-best-seller-product d-flex align-items-center">
                                            <div className="product-thumbnail">
                                                <a href="shop-details.html"><img src="img/bg-img/5.jpg" alt /></a>
                                            </div>
                                            <div className="product-info">
                                                <a href="shop-details.html">Tulip Flower</a>
                                                <p>$11.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Single Footer Widget */}
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget">
                                        <div className="widget-title">
                                            <h5>CONTACT</h5>
                                        </div>
                                        <div className="contact-information">
                                            <p><span>Address:</span> Shri Vishnu Engineering College For Women</p>
                                            <p><span>Phone:</span> +91 93066 86556</p>
                                            <p><span>Email:</span> departmentOfIt@gmail.com</p>
                                            <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                                            <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom Area */}
                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="border-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    </div>
  )
}

export default Footer
