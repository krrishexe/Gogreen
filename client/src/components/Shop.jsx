import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Products from './Products';
import { Context } from '../utils/Context';
import { useContext } from 'react';

function Shop() {
    const {products} = useContext(Context)
    console.log(products)
   

    return (
        <div>
            <div>
                {/* Preloader */}
                {/* ##### Header Area End ##### */}
                {/* ##### Breadcrumb Area Start ##### */}
                <div className="breadcrumb-area">
                    {/* Top Breadcrumb Area */}
                    <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
                        <h2>Shop</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ##### Breadcrumb Area End ##### */}
                {/* ##### Shop Area Start ##### */}
                <section className="shop-page section-padding-0-100">
                    <div className="container">
                        <div className="row">
                            {/* Shop Sorting Data */}
                            <div className="col-12">
                                <div className="shop-sorting-data d-flex flex-wrap align-items-center justify-content-between">
                                    {/* Shop Page Count */}
                                    <div className="shop-page-count">
                                        <p>Showing 1–9 of 72 results</p>
                                    </div>
                                    {/* Search by Terms */}
                                    <div className="search_by_terms">
                                        <form action="#" method="post" className="form-inline">
                                            <select className="custom-select widget-title">
                                                <option selected>Short by Popularity</option>
                                                <option value={1}>Short by Newest</option>
                                                <option value={2}>Short by Sales</option>
                                                <option value={3}>Short by Ratings</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Sidebar Area */}
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="shop-sidebar-area">
                                    {/* Shop Widget */}
                                    <div className="shop-widget price mb-50">
                                        <h4 className="widget-title">Prices</h4>
                                        <div className="widget-desc">
                                            <div className="slider-range">
                                                <div data-min={8} data-max={30} data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min={8} data-value-max={30} data-label-result="Price:">
                                                    <div className="ui-slider-range ui-widget-header ui-corner-all" />
                                                    <span className="ui-slider-handle ui-state-default ui-corner-all first-handle" tabIndex={0} />
                                                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                                                </div>
                                                <div className="range-price">Price: $8 - $30</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Shop Widget */}
                                    <div className="shop-widget catagory mb-50">
                                        <h4 className="widget-title">Categories</h4>
                                        <div className="widget-desc">
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">All plants <span className="text-muted">(72)</span></label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                <label className="custom-control-label" htmlFor="customCheck2">Outdoor plants <span className="text-muted">(20)</span></label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck3" />
                                                <label className="custom-control-label" htmlFor="customCheck3">Indoor plants <span className="text-muted">(15)</span></label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                <label className="custom-control-label" htmlFor="customCheck4">Office Plants <span className="text-muted">(20)</span></label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck5" />
                                                <label className="custom-control-label" htmlFor="customCheck5">Potted <span className="text-muted">(15)</span></label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck6" />
                                                <label className="custom-control-label" htmlFor="customCheck6">Others <span className="text-muted">(2)</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Shop Widget */}
                                    <div className="shop-widget sort-by mb-50">
                                        <h4 className="widget-title">Sort by</h4>
                                        <div className="widget-desc">
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                <label className="custom-control-label" htmlFor="customCheck7">New arrivals</label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                <label className="custom-control-label" htmlFor="customCheck8">Alphabetically, A-Z</label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                                <label className="custom-control-label" htmlFor="customCheck9">Alphabetically, Z-A</label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                                                <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                                <label className="custom-control-label" htmlFor="customCheck10">Price: low to high</label>
                                            </div>
                                            {/* Single Checkbox */}
                                            <div className="custom-control custom-checkbox d-flex align-items-center">
                                                <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                                <label className="custom-control-label" htmlFor="customCheck11">Price: high to low</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            {/* All Products Area */}
                            {/* products */}
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="shop-products-area">
                                    <div className="row">
                                        {/* Single Product Area */}
                                        <Products products={products} />
                                        
                                    </div>
                                    {/* Pagination */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Shop Area End ##### */}
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

export default Shop
