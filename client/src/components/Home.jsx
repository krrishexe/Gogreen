import React from 'react'
import jQuery from 'jquery'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../../public/style.css"
import bg1 from '../img/bg-img/1.jpg'
import bg2 from '../img/bg-img/2.jpg'
function Home() {

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
                                    <a href="index.html" className="nav-brand"><img src="/img/core-img/logo.png" alt /></a>
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
                {/* ##### Hero Area Start ##### */}
                <section className="hero-area">
                    <div className="hero-post-slides ">
                        {/* Single Hero Post */}
                        <Carousel swipeable={true} autoPlay={true} interval={5000} showThumbs={false} infiniteLoop={true} transitionTime={1000}>


                            <div className="single-hero-post bg-overlay">
                                {/* Post Image */}
                                <div className="slide-img bg-img" style={{ backgroundImage: `url(${bg1})` }} />
                                <div className="container h-100">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-12">
                                            {/* Post Content */}
                                            <div className="hero-slides-content text-center">
                                                <h2>Go Green : Your Ultimate Garden Companion</h2>
                                                <p>Explore a world of floral wonders for your garden. Overcome the challenges of scattered nurseries, lack of plant information, and diseases. Compare prices seamlessly, ensuring your garden dreams are just a click away.</p>
                                                <div className="welcome-btn-group">
                                                    <a href="#" className="btn alazea-btn mr-30">GET STARTED</a>
                                                    <a href="#" className="btn alazea-btn active">CONTACT US</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Single Hero Post */}
                            <div className="single-hero-post bg-overlay">
                                {/* Post Image */}
                                <div className="slide-img bg-img" style={{ backgroundImage: `url(${bg2})` }} />
                                <div className="container h-100">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-12">
                                            {/* Post Content */}
                                            <div className="hero-slides-content text-center">
                                                <h2>Plants exist in the weather and light rays that surround them</h2>
                                                <p>Effortlessly compare plant prices from various nurseries at your fingertips. Break free from the constraints of distance—make informed choices and transform your garden. Nurture your passion without the hassle, right from the comfort of your home.</p>
                                                <div className="welcome-btn-group">
                                                    <a href="#" className="btn alazea-btn mr-30">GET STARTED</a>
                                                    <a href="#" className="btn alazea-btn active">CONTACT US</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </section>
                {/* ##### Hero Area End ##### */}
                {/* ##### Service Area Start ##### */}
                <section className="our-services-area bg-gray section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Section Heading */}
                                <div className="section-heading text-center">
                                    <h2>OUR SERVICES</h2>
                                    <p>We provide the perfect service for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-5">
                                <div className="alazea-service-area mb-100">
                                    {/* Single Service Area */}
                                    <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="100ms">
                                        {/* Icon */}
                                        <div className="service-icon mr-30">
                                            <img src="img/core-img/s1.png" alt />
                                        </div>
                                        {/* Content */}
                                        <div className="service-content">
                                            <h5>Plants Care</h5>
                                            <p>Dive into Plantpedia, your go-to resource for detailed plant with Go Green.</p>
                                        </div>
                                    </div>
                                    {/* Single Service Area */}
                                    <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="300ms">
                                        {/* Icon */}
                                        <div className="service-icon mr-30">
                                            <img src="img/core-img/s2.png" alt />
                                        </div>
                                        {/* Content */}
                                        <div className="service-content">
                                            <h5>Plant diseases</h5>
                                            <p>NurseryNavigator: Navigate, Compare, Thrive and data about the plant diseases.</p>
                                        </div>
                                    </div>
                                    {/* Single Service Area */}
                                    <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="500ms">
                                        {/* Icon */}
                                        <div className="service-icon mr-30">
                                            <img src="img/core-img/s3.png" alt />
                                        </div>
                                        {/* Content */}
                                        <div className="service-content">
                                            <h5>Sell your plants with Go Green</h5>
                                            <p>Through handover form you can sell your plants and trees with Go Green</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="alazea-video-area bg-overlay mb-100">
                                    <img src="img/bg-img/23.jpg" alt />
                                    <a href="https://www.youtube.com/watch?v=kWr8SvbUGMo" className="video-icon">
                                        <i className="fa fa-play" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Service Area End ##### */}
                {/* ##### About Area Start ##### */}
                <section className="about-us-area section-padding-100-0">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* Section Heading */}
                                <div className="section-heading">
                                    <h2>ABOUT US</h2>
                                    <p>We are leading in the plants service fields.</p>
                                </div>
                                <p>Dive into Plantpedia, your go-to resource for detailed plant information. From species specifics to disease prevention tips, empower your gardening journey with knowledge. No more uncertainty—cultivate your garden with confidence</p>
                                {/* Progress Bar Content Area */}
                                <div className="alazea-progress-bar mb-50">
                                    {/* Single Progress Bar */}
                                    <div className="single_progress_bar">
                                        <p>Office plants</p>
                                        <div id="bar1" className="barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                            <span className="fill" data-percentage={80} />
                                        </div>
                                    </div>
                                    {/* Single Progress Bar */}
                                    <div className="single_progress_bar">
                                        <p>Field manager</p>
                                        <div id="bar2" className="barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                            <span className="fill" data-percentage={70} />
                                        </div>
                                    </div>
                                    {/* Single Progress Bar */}
                                    <div className="single_progress_bar">
                                        <p>Landscape design</p>
                                        <div id="bar3" className="barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                            <span className="fill" data-percentage={85} />
                                        </div>
                                    </div>
                                    {/* Single Progress Bar */}
                                    <div className="single_progress_bar">
                                        <p>Garden Care</p>
                                        <div id="bar4" className="barfiller">
                                            <div className="tipWrap">
                                                <span className="tip" />
                                            </div>
                                            <span className="fill" data-percentage={65} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="alazea-benefits-area">
                                    <div className="row">
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                            <div className="single-benefits-area">
                                                <img src="img/core-img/b1.png" alt />
                                                <h5>Quality Products</h5>
                                                <p>"Commitment to excellence, we assure quality products, meeting high standards, ensuring satisfaction, and exceeding expectations every time you choose us."</p>
                                            </div>
                                        </div>
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                            <div className="single-benefits-area">
                                                <img src="img/core-img/b2.png" alt />
                                                <h5>Perfect Service</h5>
                                                <p>"Dedicated to perfection, our service promises excellence, reliability, and satisfaction. Your needs are our priority for a seamless experience."</p>
                                            </div>
                                        </div>
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                            <div className="single-benefits-area">
                                                <img src="img/core-img/b3.png" alt />
                                                <h5>100% Natural</h5>
                                                <p>"Pure and untainted, our products are 100% natural, ensuring authenticity, goodness, and a wholesome experience for your well-being."</p>
                                            </div>
                                        </div>
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                            <div className="single-benefits-area">
                                                <img src="img/core-img/b4.png" alt />
                                                <h5>Environmentally friendly</h5>
                                                <p>"Committed to eco-conscious choices, our products are environmentally friendly, promoting sustainability, and contributing to a greener, healthier planet for all."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-line" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### About Area End ##### */}
                {/* ##### Portfolio Area Start ##### */}
                <section className="alazea-portfolio-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Section Heading */}
                                <div className="section-heading text-center">
                                    <h2>OUR PORTFOLIO</h2>
                                    <p>We devote all of our experience and efforts for creation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="alazea-portfolio-filter">
                                    <div className="portfolio-filter">
                                        <button className="btn active" data-filter="*">All</button>
                                        <button className="btn" data-filter=".design">Coffee Design</button>
                                        <button className="btn" data-filter=".garden">Garden</button>
                                        <button className="btn" data-filter=".home-design">Home Design</button>
                                        <button className="btn" data-filter=".office-design">Office Design</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row alazea-portfolio">
                            {/* Single Portfolio Area */}
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design home-design wow fadeInUp" data-wow-delay="100ms">
                                {/* Portfolio Thumbnail */}
                                <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: 'url(img/bg-img/16.jpg)' }} />
                                {/* Portfolio Hover Text */}
                                <div className="portfolio-hover-overlay">
                                    <a href="img/bg-img/16.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 1">
                                        <div className="port-hover-text">
                                            <h3>Minimal Flower Store</h3>
                                            <h5>Office Plants</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Single Portfolio Area */}
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms">
                                {/* Portfolio Thumbnail */}
                                <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: 'url(img/bg-img/17.jpg)' }} />
                                {/* Portfolio Hover Text */}
                                <div className="portfolio-hover-overlay">
                                    <a href="img/bg-img/17.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 2">
                                        <div className="port-hover-text">
                                            <h3>Minimal Flower Store</h3>
                                            <h5>Office Plants</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Single Portfolio Area */}
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden design wow fadeInUp" data-wow-delay="300ms">
                                {/* Portfolio Thumbnail */}
                                <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: 'url(img/bg-img/18.jpg)' }} />
                                {/* Portfolio Hover Text */}
                                <div className="portfolio-hover-overlay">
                                    <a href="img/bg-img/18.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 3">
                                        <div className="port-hover-text">
                                            <h3>Minimal Flower Store</h3>
                                            <h5>Office Plants</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Single Portfolio Area */}
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden office-design wow fadeInUp" data-wow-delay="400ms">
                                {/* Portfolio Thumbnail */}
                                <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: 'url(img/bg-img/19.jpg)' }} />
                                {/* Portfolio Hover Text */}
                                <div className="portfolio-hover-overlay">
                                    <a href="img/bg-img/19.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 4">
                                        <div className="port-hover-text">
                                            <h3>Minimal Flower Store</h3>
                                            <h5>Office Plants</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Single Portfolio Area */}
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design office-design wow fadeInUp" data-wow-delay="100ms">
                                {/* Portfolio Thumbnail */}
                                <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: 'url(img/bg-img/20.jpg)' }} />
                                {/* Portfolio Hover Text */}
                                <div className="portfolio-hover-overlay">
                                    <a href="img/bg-img/20.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 5">
                                        <div className="port-hover-text">
                                            <h3>Minimal Flower Store</h3>
                                            <h5>Office Plants</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Single Portfolio Area */}
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms">
                                {/* Portfolio Thumbnail */}
                                <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: 'url(img/bg-img/21.jpg)' }} />
                                {/* Portfolio Hover Text */}
                                <div className="portfolio-hover-overlay">
                                    <a href="img/bg-img/21.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 6">
                                        <div className="port-hover-text">
                                            <h3>Minimal Flower Store</h3>
                                            <h5>Office Plants</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* Single Portfolio Area */}
                            <div className="col-12 col-lg-6 single_portfolio_item home-design wow fadeInUp" data-wow-delay="300ms">
                                {/* Portfolio Thumbnail */}
                                <div className="portfolio-thumbnail bg-img" style={{ backgroundImage: 'url(img/bg-img/22.jpg)' }} />
                                {/* Portfolio Hover Text */}
                                <div className="portfolio-hover-overlay">
                                    <a href="img/bg-img/22.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 7">
                                        <div className="port-hover-text">
                                            <h3>Minimal Flower Store</h3>
                                            <h5>Office Plants</h5>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Portfolio Area End ##### */}
                {/* ##### Testimonial Area Start ##### */}
                <section className="testimonial-area section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <Carousel autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true} transitionTime={1000} selectedItem={false}>
                                        {/* Single Testimonial Slide */}
                                        <div className="single-testimonial-slide">
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-6">
                                                    <img src="img/bg-img/w1.png" alt />
                                                    {/* <div class="testimonial-thumb">
                              </div> */}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="testimonial-content">
                                                        {/* Section Heading */}
                                                        <div className="section-heading">
                                                            <h2>TESTIMONIAL</h2>
                                                            <p>Some kind words from clients about Go Green</p>
                                                        </div>
                                                        <p>Go Green is a pleasure to work with. Their ideas are creative, they came up with imaginative solutions to some tricky issues, their landscaping and planting contacts are equally excellent we have a beautiful but also manageable garden as a result. Thank you!”</p>
                                                        <div className="testimonial-author-info">
                                                            <h6>Ms. P.Mounika</h6>
                                                            <p>Student at SVEC </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Testimonial Slide */}
                                        <div className="single-testimonial-slide">
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-6">
                                                    <img src="img/bg-img/w2.png" alt />
                                                    {/* <div class="testimonial-thumb">
                              </div> */}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="testimonial-content">
                                                        {/* Section Heading */}
                                                        <div className="section-heading">
                                                            <h2>TESTIMONIAL</h2>
                                                            <p>Some kind words from clients about Go Green</p>
                                                        </div>
                                                        <p>"Choosing Go Green was a delight. Their innovative concepts, problem-solving finesse, and landscaping prowess transformed our space into an effortlessly stunning and easy-to-maintain garden. Gratitude!"</p>
                                                        <div className="testimonial-author-info">
                                                            <h6>Ms. T.Bhavana</h6>
                                                            <p>Student at SVEC</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Testimonial Slide */}
                                        <div className="single-testimonial-slide">
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-6">
                                                    <img src="img/bg-img/w3.png" alt />
                                                    {/* <div class="testimonial-thumb">
                              </div> */}
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="testimonial-content">
                                                        {/* Section Heading */}
                                                        <div className="section-heading">
                                                            <h2>TESTIMONIAL</h2>
                                                            <p>Some kind words from clients about Go Green</p>
                                                        </div>
                                                        <p>"Working with Go Green was a joy. Their creativity, resourcefulness in addressing challenges, and top-notch landscaping partners crafted a beautiful and low-maintenance garden for us. Thanks, Go Green!”</p>
                                                        <div className="testimonial-author-info">
                                                            <h6>Ms. T.V.N.LIKHITA</h6>
                                                            <p>Student at SVEC</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Testimonial Area End ##### */}
                {/* ##### Product Area Start ##### */}
                <section className="new-arrivals-products-area bg-gray section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Section Heading */}
                                <div className="section-heading text-center">
                                    <h2>NEW ARRIVALS</h2>
                                    <p>We have the latest plants, it must be exciting for you</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Single Product Area */}
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
                                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
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
                            {/* Single Product Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="200ms">
                                    {/* Product Image */}
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="img/bg-img/10.jpg" alt /></a>
                                        <div className="product-meta d-flex">
                                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
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
                            {/* Single Product Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="300ms">
                                    {/* Product Image */}
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="img/bg-img/11.jpg" alt /></a>
                                        <div className="product-meta d-flex">
                                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
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
                            {/* Single Product Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-product-area mb-50 wow fadeInUp" data-wow-delay="400ms">
                                    {/* Product Image */}
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="img/bg-img/12.jpg" alt /></a>
                                        {/* Product Tag */}
                                        <div className="product-tag sale-tag">
                                            <a href="#">Hot</a>
                                        </div>
                                        <div className="product-meta d-flex">
                                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
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
                            <div className="col-12 text-center">
                                <a href="#" className="btn alazea-btn">View All</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Product Area End ##### */}
                {/* ##### Blog Area Start ##### */}
                <section className="alazea-blog-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Section Heading */}
                                <div className="section-heading text-center">
                                    <h2>LATEST NEWS</h2>
                                    <p>The breaking news about Gardening &amp; House plants</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {/* Single Blog Post Area */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-post mb-100">
                                    <div className="post-thumbnail mb-30">
                                        <a href="single-post.html"><img src="img/bg-img/6.jpg" alt /></a>
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">
                                            <h5>Garden designers across the country forecast ideas shaping the gardening world in 2018</h5>
                                        </a>
                                        <div className="post-meta">
                                            <a href="#"><i className="fa fa-clock-o" aria-hidden="true" /> 20 Jun 2018</a>
                                            <a href="#"><i className="fa fa-user" aria-hidden="true" /> Alan Jackson</a>
                                        </div>
                                        <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Blog Post Area */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-post mb-100">
                                    <div className="post-thumbnail mb-30">
                                        <a href="single-post.html"><img src="img/bg-img/7.jpg" alt /></a>
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">
                                            <h5>2018 Midwest Tree and Shrub Conference: Resilient Plants for a Lasting Landscape</h5>
                                        </a>
                                        <div className="post-meta">
                                            <a href="#"><i className="fa fa-clock-o" aria-hidden="true" /> 20 Jun 2018</a>
                                            <a href="#"><i className="fa fa-user" aria-hidden="true" /> Christina Aguilera</a>
                                        </div>
                                        <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Blog Post Area */}
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-post mb-100">
                                    <div className="post-thumbnail mb-30">
                                        <a href="single-post.html"><img src="img/bg-img/8.jpg" alt /></a>
                                    </div>
                                    <div className="post-content">
                                        <a href="single-post.html" className="post-title">
                                            <h5>The summer coming up, it’s time for both us and the flowers to soak up the sunshine</h5>
                                        </a>
                                        <div className="post-meta">
                                            <a href="#"><i className="fa fa-clock-o" aria-hidden="true" /> 19 Jun 2018</a>
                                            <a href="#"><i className="fa fa-user" aria-hidden="true" /> Mason Jenkins</a>
                                        </div>
                                        <p className="post-excerpt">Integer luctus diam ac scerisque consectetur. Vimus ottawas nec lacus sit amet. Aenean interdus mid vitae.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Blog Area End ##### */}
                {/* ##### Subscribe Area Start ##### */}
                <section className="subscribe-newsletter-area" style={{ backgroundImage: 'url(img/bg-img/subscribe.png)' }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* Section Heading */}
                                <div className="section-heading mb-0">
                                    <h2>Join the Newsletter</h2>
                                    <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="subscribe-form">
                                    <form action="#" method="get">
                                        <input type="email" name="subscribe-email" id="subscribeEmail" placeholder="Enter your email" />
                                        <button type="submit" className="btn alazea-btn">SUBSCRIBE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Subscribe Side Thumbnail */}
                    <div className="subscribe-side-thumb wow fadeInUp" data-wow-delay="500ms">
                        <img className="first-img" src="img/core-img/leaf.png" alt />
                    </div>
                </section>
                {/* ##### Subscribe Area End ##### */}
                {/* ##### Contact Area Start ##### */}
                <section className="contact-area section-padding-100-0">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* Section Heading */}
                                <div className="section-heading">
                                    <h2>GET IN TOUCH</h2>
                                    <p>Send us a message, we will call back later</p>
                                </div>
                                {/* Contact Form Area */}
                                <div className="contact-form-area mb-100">
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" id="contact-name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" id="contact-email" placeholder="Your Email" />
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.549556884931!2d81.51951034475849!3d16.568145971783757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37cd4eb220051d%3A0xea3d7b50d0a1458!2sShri%20Vishnu%20Engineering%20College%20Autonomous!5e0!3m2!1sen!2sin!4v1704632643093!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

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
                                            <p><span>Address:</span> 505 Silk Rd, New York</p>
                                            <p><span>Phone:</span> +1 234 122 122</p>
                                            <p><span>Email:</span> info.deercreative@gmail.com</p>
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

        </div>
    )
}

export default Home
