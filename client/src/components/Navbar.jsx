import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../utils/Context'


function Navbar() {
    return (
        <div>
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-circle" />
                <div className="preloader-img">
                    <img src="img/core-img/leaf.png" alt />
                </div>
            </div>
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
                                            <Link to={'/cart'}><i className="fa fa-shopping-cart" aria-hidden="true" /> <span>Cart <span className="cart-quantity">(1)</span></span></Link>
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
                                <Link to={'/'} className="nav-brand"><img src="img/core-img/logo.png" alt /></Link>
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
                                            <li><Link to={'/'}>Home</Link></li>
                                            <li><Link to={'/about'}>About</Link></li>
                                            <li><Link to={'/shop'}>Shop</Link></li>
                                            <li><Link to={'/portfolio'}>Portfolio</Link></li>
                                            <li><Link to={'/contact'}>Contact</Link></li>
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
        </div>
    )
}

export default Navbar
