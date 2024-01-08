import React from 'react'
import jQuery from 'jquery'

function Contact() {

    (function ($) {
        'use strict';

        var browserWindow = $(window);

        // :: 1.0 Preloader Active Code
        browserWindow.on('load', function () {
            $('.preloader').fadeOut('slow', function () {
                $(this).remove();
            });
        });

        // :: 2.0 Nav Active Code
        if ($.fn.classyNav) {
            $('#alazeaNav').classyNav();
        }

        // :: 3.0 Search Active Code
        $('#searchIcon').on('click', function () {
            $('.search-form').toggleClass('active');
        });
        $('.closeIcon').on('click', function () {
            $('.search-form').removeClass('active');
        });

        // :: 4.0 Sliders Active Code
        if ($.fn.owlCarousel) {
            var welcomeSlide = $('.hero-post-slides');
            var testiSlides = $('.testimonials-slides');
            var portfolioSlides = $('.portfolio-slides');

            welcomeSlide.owlCarousel({
                items: 1,
                margin: 0,
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                center: true,
                autoplayTimeout: 5000,
                smartSpeed: 1000
            });

            testiSlides.owlCarousel({
                items: 1,
                margin: 0,
                loop: true,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 700,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });

            portfolioSlides.owlCarousel({
                items: 2,
                margin: 30,
                loop: true,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                dots: true,
                autoplay: false,
                autoplayTimeout: 5000,
                smartSpeed: 700,
                center: true
            });
        }

        // :: 5.0 Masonary Gallery Active Code
        if ($.fn.imagesLoaded) {
            $('.alazea-portfolio').imagesLoaded(function () {
                // filter items on button click
                $('.portfolio-filter').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                // init Isotope
                var $grid = $('.alazea-portfolio').isotope({
                    itemSelector: '.single_portfolio_item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.single_portfolio_item'
                    }
                });
            });
        }

        // :: 6.0 magnificPopup Active Code
        if ($.fn.magnificPopup) {
            $('.portfolio-img, .product-img').magnificPopup({
                gallery: {
                    enabled: true
                },
                type: 'image'
            });
            $('.video-icon').magnificPopup({
                type: 'iframe'
            });
        }

        // :: 7.0 Barfiller Active Code
        if ($.fn.barfiller) {
            $('#bar1').barfiller({
                tooltip: true,
                duration: 1000,
                barColor: '#70c745',
                animateOnResize: true
            });
            $('#bar2').barfiller({
                tooltip: true,
                duration: 1000,
                barColor: '#70c745',
                animateOnResize: true
            });
            $('#bar3').barfiller({
                tooltip: true,
                duration: 1000,
                barColor: '#70c745',
                animateOnResize: true
            });
            $('#bar4').barfiller({
                tooltip: true,
                duration: 1000,
                barColor: '#70c745',
                animateOnResize: true
            });
        }

        // :: 8.0 ScrollUp Active Code
        if ($.fn.scrollUp) {
            browserWindow.scrollUp({
                scrollSpeed: 1500,
                scrollText: '<i class="fa fa-angle-up"></i>'
            });
        }

        // :: 9.0 CounterUp Active Code
        if ($.fn.counterUp) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
        }

        // :: 10.0 Sticky Active Code
        if ($.fn.sticky) {
            $(".alazea-main-menu").sticky({
                topSpacing: 0
            });
        }

        // :: 11.0 Tooltip Active Code
        if ($.fn.tooltip) {
            $('[data-toggle="tooltip"]').tooltip()
        }

        // :: 12.0 Price Range Active Code
        $('.slider-range-price').each(function () {
            var min = jQuery(this).data('min');
            var max = jQuery(this).data('max');
            var unit = jQuery(this).data('unit');
            var value_min = jQuery(this).data('value-min');
            var value_max = jQuery(this).data('value-max');
            var label_result = jQuery(this).data('label-result');
            var t = $(this);
            $(this).slider({
                range: true,
                min: min,
                max: max,
                values: [value_min, value_max],
                slide: function (event, ui) {
                    var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                    console.log(t);
                    t.closest('.slider-range').find('.range-price').html(result);
                }
            });
        })

        // :: 13.0 prevent default a click
        $('a[href="#"]').on('click', function ($) {
            $.preventDefault();
        });

        // :: 14.0 wow Active Code


    })(jQuery);

    return (
        <div>
            <div>
                {/* Preloader */}
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-circle" />
                    <div className="preloader-img">
                        <img src="img/core-img/leaf.png" alt />
                    </div>
                </div>
                {/* ##### Header Area Start ##### */}
                <header className="header-area">
                    {/* ***** Top Header Area ***** */}
                    <div className="top-header-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="top-header-content d-flex align-items-center justify-content-between">
                                        {/* Top Header Content */}
                                        <div className="top-header-meta">
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="infodeercreative@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true" /> <span>Email: departmentOfIt@gmail.com</span></a>
                                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="+1 234 122 122"><i className="fa fa-phone" aria-hidden="true" /> <span>Call Us: +91 93066 86556</span></a>
                                        </div>
                                        {/* Top Header Content */}
                                        <div className="top-header-meta d-flex">
                                            {/* Language Dropdown */}
                                            <div className="language-dropdown">
                                                <div className="dropdown">
                                                    <button className="btn btn-secondary dropdown-toggle mr-30" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Language</button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="#">USA</a>
                                                        <a className="dropdown-item" href="#">UK</a>
                                                        <a className="dropdown-item" href="#">Bangla</a>
                                                        <a className="dropdown-item" href="#">Hindi</a>
                                                        <a className="dropdown-item" href="#">Spanish</a>
                                                        <a className="dropdown-item" href="#">Latin</a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Login */}
                                            <div className="login">
                                                <a href="#"><i className="fa fa-user" aria-hidden="true" /> <span>Login</span></a>
                                            </div>
                                            {/* Cart */}
                                            <div className="cart">
                                                <a href="#"><i className="fa fa-shopping-cart" aria-hidden="true" /> <span>Cart <span className="cart-quantity">(1)</span></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ***** Navbar Area ***** */}
                    <div className="alazea-main-menu">
                        <div className="classy-nav-container breakpoint-off">
                            <div className="container">
                                {/* Menu */}
                                <nav className="classy-navbar justify-content-between" id="alazeaNav">
                                    {/* Nav Brand */}
                                    <a href="index.html" className="nav-brand"><img src="img/core-img/logo.png" alt /></a>
                                    {/* Navbar Toggler */}
                                    <div className="classy-navbar-toggler">
                                        <span className="navbarToggler"><span /><span /><span /></span>
                                    </div>
                                    {/* Menu */}
                                    <div className="classy-menu">
                                        {/* Close Button */}
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                                        </div>
                                        {/* Navbar Start */}
                                        <div className="classynav">
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="#">Pages</a>
                                                    <ul className="dropdown">
                                                        <li><a href="index.html">Home</a></li>
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a href="shop.html">Shop</a>
                                                            <ul className="dropdown">
                                                                <li><a href="shop.html">Shop</a></li>
                                                                <li><a href="shop-details.html">Shop Details</a></li>
                                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                                <li><a href="checkout.html">Checkout</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="portfolio.html">Portfolio</a>
                                                            <ul className="dropdown">
                                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                                <li><a href="single-portfolio.html">Portfolio Details</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="blog.html">Blog</a>
                                                            <ul className="dropdown">
                                                                <li><a href="blog.html">Blog</a></li>
                                                                <li><a href="single-post.html">Blog Details</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                            {/* Search Icon */}
                                            <div id="searchIcon">
                                                <i className="fa fa-search" aria-hidden="true" />
                                            </div>
                                        </div>
                                        {/* Navbar End */}
                                    </div>
                                </nav>
                                {/* Search Form */}
                                <div className="search-form">
                                    <form action="#" method="get">
                                        <input type="search" name="search" id="search" placeholder="Type keywords & press enter..." />
                                        <button type="submit" className="d-none" />
                                    </form>
                                    {/* Close Icon */}
                                    <div className="closeIcon"><i className="fa fa-times" aria-hidden="true" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ##### Header Area End ##### */}
                {/* ##### Breadcrumb Area Start ##### */}
                <div className="breadcrumb-area">
                    {/* Top Breadcrumb Area */}
                    <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
                        <h2>Contact US to handover your plants</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ##### Breadcrumb Area End ##### */}
                {/* ##### Contact Area Info Start ##### */}
                <div className="contact-area-info section-padding-0-100">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            {/* Contact Thumbnail */}
                            <div className="col-12 col-md-6">
                                <div className="contact--thumbnail">
                                    <img src="img/bg-img/25.jpg" alt />
                                </div>
                            </div>
                            <div className="col-12 col-md-5">
                                {/* Section Heading */}
                                <div className="section-heading">
                                    <h2>CONTACT US </h2>
                                    <p>We are improving our services to serve you better.</p>
                                </div>
                                {/* Contact Information */}
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
                {/* ##### Contact Area Info End ##### */}
                {/* ##### Contact Area Start ##### */}
                <section className="contact-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* Section Heading */}
                                <div className="section-heading">
                                    <h2>Handover Form</h2>
                                    <p>We are happy to hear from you:</p>
                                </div>
                                {/* Contact Form Area */}
                                <div className="contact-form-area mb-100">
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="contact-name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="contact-email" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="contact-name" placeholder="Plant species" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="number" className="form-control" id="contact-email" placeholder="Plant price " />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="contact-subject" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn alazea-btn mt-15">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                {/* Google Maps */}
                                <div className="map-area mb-100">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.549556884931!2d81.51951034475849!3d16.568145971783757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1704632643093!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Contact Area End ##### */}
                {/* ##### Footer Area Start ##### */}
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
                {/* ##### Footer Area End ##### */}
                {/* ##### All Javascript Files ##### */}
                {/* jQuery-2.2.4 js */}
                {/* Popper js */}
                {/* Bootstrap js */}
                {/* All Plugins js */}
                {/* Active js */}
            </div>

        </div>
    )
}

export default Contact
