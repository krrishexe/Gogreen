import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Portfolio() {
    return (
        <div>
            {/* ##### Header Area End ##### */}
            {/* ##### Breadcrumb Area Start ##### */}
            <div className="breadcrumb-area">
                {/* Top Breadcrumb Area */}
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
                    <h2>Plant Diseases</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Plant Diseases</li>
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
                                <h2>Plant Diseases</h2>
                                <p>Green Horizon: Nurturing Nature</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <section className="about-us-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* Section Heading */}
                                <div className="section-heading">
                                    <h2>Plant Diseases Unveiled : </h2>
                                </div>
                                <p>Overview of common plant diseases affecting various crops and ornamental plants.</p>
                                <p>Interviews with plant pathologists and experts to discuss the causes, symptoms, and preventive measures for diseases such as powdery mildew, blight, and root rot.</p>
                                <p>Visual aids and demonstrations to help viewers identify and understand the impact of these diseases on plants.</p>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="alazea-benefits-area">
                                    <div className="row">
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                           <img src="../img/bg-img/7.jpg" alt="" />
                                        </div>
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                            <img src="../img/bg-img/6.jpg" alt="" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br />
                <hr />
                <br />

                <section className="about-us-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* Section Heading */}
                                <div className="section-heading">
                                    <h2> Natural Fertilizers - Nourishing the Soil </h2>
                                </div>
                                <p>Exploring the benefits of natural fertilizers in contrast to synthetic counterparts.</p>
                                <p>Interviews with organic farmers and soil experts to discuss the importance of maintaining soil health for robust plant growth.</p>
                                <p>Showcase of various natural fertilizers, including compost, manure, bone meal, and organic matter, with explanations of their nutrient-rich properties.</p>
                                <p>Tips on how to create homemade compost and incorporate natural fertilizers into gardening practices.</p>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="alazea-benefits-area">
                                    <div className="row">
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                           <img src="../img/bg-img/28.jpg" alt="" />
                                        </div>
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                            <img src="../img/bg-img/16.jpg" alt="" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br />
                <hr />
                <br />
                <section className="about-us-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* Section Heading */}
                                <div className="section-heading">
                                    <h2>Case Study - Restoring Plant Health </h2>
                                </div>
                                <p>Follow a gardening enthusiast or a local farmer facing plant disease issues.
</p>
                                <p>Consultation with experts to diagnose the problem and develop a customized plan to restore plant health.</p>
                                <p>Implementation of natural fertilizers and organic solutions to address the specific issues observed.</p>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="alazea-benefits-area">
                                    <div className="row">
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                           <img src="../img/bg-img/19.jpg" alt="" />
                                        </div>
                                        {/* Single Benefits Area */}
                                        <div className="col-12 col-sm-6">
                                            <img src="../img/bg-img/23.jpg" alt="" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

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
    )
}

export default Portfolio
