import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Portfolio() {
    return (
        <div>
            <div>
                {/* ##### Header Area End ##### */}
                {/* ##### Breadcrumb Area Start ##### */}
                <div className="breadcrumb-area">
                    {/* Top Breadcrumb Area */}
                    <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
                        <h2>PORTFOLIO</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ##### Breadcrumb Area End ##### */}
                {/* ##### Portfolio Area Start ##### */}
                <section className="alazea-portfolio-area portfolio-page section-padding-0-100">
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
                    <div className="container">
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
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design home-design">
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
                            <div className="col-12 col-sm-6 col-lg-6 single_portfolio_item garden">
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
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden office-design">
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
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design office-design">
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
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden">
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
                            <div className="col-12 col-sm-6 col-lg-6 single_portfolio_item home-design">
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
                            {/* Single Portfolio Area */}
                            <div className="col-12 col-sm-6 col-lg-6 single_portfolio_item design home-design">
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
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden">
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
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden office-design">
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
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design office-design">
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
                            <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden">
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
                            <div className="col-12 col-sm-6 col-lg-6 single_portfolio_item home-design">
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
                {/* ##### Footer Area Start ##### */}
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

export default Portfolio
