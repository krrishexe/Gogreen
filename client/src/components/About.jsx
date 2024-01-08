import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
    return (
        <div>
            <div>

                {/* ##### Header Area End ##### */}
                {/* ##### Breadcrumb Area Start ##### */}
                <div className="breadcrumb-area">
                    {/* Top Breadcrumb Area */}
                    <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
                        <h2>ABOUT US</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">About</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ##### Breadcrumb Area End ##### */}
                {/* ##### About Area Start ##### */}
                <section className="about-us-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* Section Heading */}
                                <div className="section-heading">
                                    <h2>ABOUT US</h2>
                                    <p>We are leading in the plants service fields.</p>
                                </div>
                                <p>Quisque orci quam, vulputate non commodo finibus, molestie ac ante. Duis in sceleri quesem. Nulla sit amet varius nunc. Maecenas dui, tempeu ullam corper in.</p>
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
                                                <p>"Dedicated to perfection, our service promises excellence, reliability, and satisfaction. Your needs are our priority for a seamless experience.".</p>
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
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-5">
                                <div className="alazea-service-area mb-100">
                                    {/* Single Service Area */}
                                    <div className="single-service-area d-flex align-items-center">
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
                                    <div className="single-service-area d-flex align-items-center">
                                        {/* Icon */}
                                        <div className="service-icon mr-30">
                                            <img src="img/core-img/s2.png" alt />
                                        </div>
                                        {/* Content */}
                                        <div className="service-content">
                                            <h5>Plants Diseases</h5>
                                            <p>NurseryNavigator: Navigate, Compare, Thrive and data about the plant diseases.</p>
                                        </div>
                                    </div>
                                    {/* Single Service Area */}
                                    <div className="single-service-area d-flex align-items-center">
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
                                    <a href="http://www.youtube.com/watch?v=7HKoqNJtMTQ" className="video-icon">
                                        <i className="fa fa-play" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Service Area End ##### */}
                {/* ##### Testimonial Area Start ##### */}
                {/* ##### Testimonial Area End ##### */}
                {/* ##### Cool Facts Area Start ##### */}
                <section className="cool-facts-area bg-img section-padding-100-0" style={{ backgroundImage: 'url(img/bg-img/cool-facts.png)' }}>
                    <div className="container">
                        <div className="row">
                            {/* Single Cool Facts Area */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="single-cool-fact d-flex align-items-center justify-content-center mb-100">
                                    <div className="cf-icon">
                                        <img src="img/core-img/cf1.png" alt />
                                    </div>
                                    <div className="cf-content">
                                        <h2><span className="counter">20</span></h2>
                                        <h6>AWARDS</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Single Cool Facts Area */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="single-cool-fact d-flex align-items-center justify-content-center mb-100">
                                    <div className="cf-icon">
                                        <img src="img/core-img/cf2.png" alt />
                                    </div>
                                    <div className="cf-content">
                                        <h2><span className="counter">70</span></h2>
                                        <h6>PROJECTS</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Single Cool Facts Area */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="single-cool-fact d-flex align-items-center justify-content-center mb-100">
                                    <div className="cf-icon">
                                        <img src="img/core-img/cf3.png" alt />
                                    </div>
                                    <div className="cf-content">
                                        <h2><span className="counter">30</span>+</h2>
                                        <h6>HAPPY CLIENTS</h6>
                                    </div>
                                </div>
                            </div>
                            {/* Single Cool Facts Area */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="single-cool-fact d-flex align-items-center justify-content-center mb-100">
                                    <div className="cf-icon">
                                        <img src="img/core-img/cf4.png" alt />
                                    </div>
                                    <div className="cf-content">
                                        <h2><span className="counter">80</span>K+</h2>
                                        <h6>REVENUE</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Side Image */}
                    <div className="side-img wow fadeInUp" data-wow-delay="500ms">
                        <img src="img/core-img/pot.png" alt />
                    </div>
                </section>
                {/* ##### Cool Facts Area End ##### */}
                {/* ##### Team Area Start ##### */}
                <section className="team-area section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Section Heading */}
                                <div className="section-heading text-center">
                                    <h2>OUR TEAM</h2>
                                    <p>A team of dedicated experienced professionals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* Single Team Member Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-team-member text-center mb-100">
                                    {/* Team Member Thumb */}
                                    <div  className="team-member-thumb">
                                        <img style={{height:'450px'}} src="img/bg-img/team1.png" alt />
                                        {/* Social Info */}
                                        <div className="team-member-social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                        </div>
                                    </div>
                                    {/* Team Member Info */}
                                    <div className="team-member-info mt-30">
                                        <h5>V.DEVI SRI VALLI</h5>
                                        <p>Tech lead</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Team Member Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-team-member text-center mb-100">
                                    {/* Team Member Thumb */}
                                    <div className="team-member-thumb">
                                        <img style={{height:'450px'}} src="img/bg-img/team2.png" alt />
                                        {/* Social Info */}
                                        <div className="team-member-social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                        </div>
                                    </div>
                                    {/* Team Member Info */}
                                    <div className="team-member-info mt-30">
                                        <h5>T.KEJIYA GRACE</h5>
                                        <p>Graphic Designer</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Team Member Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-team-member text-center mb-100">
                                    {/* Team Member Thumb */}
                                    <div className="team-member-thumb">
                                        <img style={{height:'450px'}} src="img/bg-img/team4.png" alt />
                                        {/* Social Info */}
                                        <div className="team-member-social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                        </div>
                                    </div>
                                    {/* Team Member Info */}
                                    <div className="team-member-info mt-30">
                                        <h5>T.BHAVANA</h5>
                                        <p>Frontend Dev</p>
                                    </div>
                                </div>
                            </div>
                            {/* Single Team Member Area */}
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-team-member text-center mb-100">
                                    {/* Team Member Thumb */}
                                    <div className="team-member-thumb">
                                        <img style={{height:'450px'}} src="img/bg-img/team3.png" alt />
                                        {/* Social Info */}
                                        <div className="team-member-social-info">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                        </div>
                                    </div>
                                    {/* Team Member Info */}
                                    <div className="team-member-info mt-30">
                                        <h5>T.V.N.LIKHITA</h5>
                                        <p>Backend dev</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Team Area End ##### */}
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

export default About
