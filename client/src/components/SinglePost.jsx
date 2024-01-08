import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function SinglePost() {
    return (
        <div>
            <div>
                {/* ##### Header Area Start ##### */}
                {/* ##### Header Area End ##### */}
                {/* ##### Breadcrumb Area Start ##### */}
                <div className="breadcrumb-area">
                    {/* Top Breadcrumb Area */}
                    <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
                        <h2>SINGLE BLOG POST</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Blog</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Single Blog Post</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ##### Breadcrumb Area End ##### */}
                {/* ##### Blog Content Area Start ##### */}
                <section className="blog-content-area section-padding-0-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* Blog Posts Area */}
                            <div className="col-12 col-md-8">
                                <div className="blog-posts-area">
                                    {/* Post Details Area */}
                                    <div className="single-post-details-area">
                                        <div className="post-content">
                                            <h4 className="post-title">Garden designers across the country forecast ideas shaping the gardening world in 2018</h4>
                                            <div className="post-meta mb-30">
                                                <a href="#"><i className="fa fa-clock-o" aria-hidden="true" /> 19 Jun 2018</a>
                                                <a href="#"><i className="fa fa-user" aria-hidden="true" /> Mason Jenkins</a>
                                            </div>
                                            <div className="post-thumbnail mb-30">
                                                <img src="img/bg-img/35.jpg" alt />
                                            </div>
                                            <p>Integer luctus diam ac scerisque consectetur. Vimus ottawas euismod nec lacus sit amet. Aenean interdus midu vitae, uttah mattis augue fermentum. Donec auctor massa orci, quis condimentum odio eleifended. Orci varius natoque penatibuset magnis discount parturient montes, nascetur ridiculus mus. Ut felis lectus, sagittis in turpis sit amet, ornare interdu ligula. Proin sed dolor eu nulla fermentum fermentum. Suspendisse eget mollis diam. Nulla non mauris et eros accumsan imperdit sed ut turpis. Ut aliquam et sapien at convallis. Integer eu porttitor lacus. Curabitur id aliquam mauris.</p>
                                            <div className="row mb-30">
                                                <div className="col-lg-7">
                                                    <p>Nullam lectus elit, volutpat velo justo sit damet, tincidunt dapibus turpis. Vivamus idelit nec enim tristique blandit in sit down metunc. Maecenas accumsan nunc quis nisl porttitor varius sed luctus ligula. Aeneamana pellentesque enim eu magna vehicula suada.</p>
                                                    <p>Quisque suscipit elit sit ametz pellentesque scelerisque. Integer actioner cursu quam, estina portitor cant. Vestibulum luctus libero urna gamora scelerisque laoret. Quisque nect facilisis neque. Integer vitaer dapibus purus, fames turpis egestas. Nullam vulputa nisl tempus luctus.</p>
                                                </div>
                                                <div className="col-lg-5">
                                                    <img src="img/bg-img/36.jpg" alt />
                                                </div>
                                            </div>
                                            <p>Mauris nisi arcu, consectetur convallis fringilla quis, posuere ac mauris. Ut in placerat lorem. Donec cursus malesuada nibhem, eget consectetur posuere sed. Suspendisse auctor nec diamet consectetur. Etiam ac maurised nisib tincidunt viverra. Sed nulla lacus, convallis vel nunc sed, fringilla venenatis neque.</p>
                                            <blockquote>
                                                <div className="blockquote-text">
                                                    <h5>“If every plant and flower were found in all places, the charm of locality would not exist. Everything varies, and that gives the interest.”</h5>
                                                    <h5>Richard Jefferies</h5>
                                                </div>
                                            </blockquote>
                                            <h4>Plant the love of the holy ones within your spirit.</h4>
                                            <p>Phasellus laoreet mattis ultrices. Integer ex sem, ultrices eu sem in, laoreet vehicula ligula. Phasellus quistor blandit salah convallis augue. Sed velot dictum sapient. In pulvinar libero turpis. Quisque facilisis bigbang consenti. Nullam bendumaz, massan consequat in gravida porttitor, aguet lacus condimentum mauris, id blandit quam augue eget mana. Etiam denim jeans lacus, nascetur auge bibendum vel pulvinar viverra, mattis sit amet mi. Mauris fringilla, ex vitae maximus fringilla, neque sapien maximus justo, cursus risus neque sed nibh. Donec at urna eros scelerisque non nibh sed.</p>
                                            <p>Cras porta tortor quis eros volutpat, at vehicula lectus posuere. Sed faucibus euismod nibh, necta auctor nunclear elementum non. Aliquam ut nulla efficitur tortor vestibulum pharetra inget nisl. Suspendisse eleifenden metus, vitae viverra dante volutpat quisto. Curabitur tator risus, sagittis a imperdiet sed, volutpat sit amet. Integer gravida leo sit amet pulvinar vehicula.</p>
                                        </div>
                                    </div>
                                    {/* Post Tags & Share */}
                                    <div className="post-tags-share d-flex justify-content-between align-items-center">
                                        {/* Tags */}
                                        <ol className="popular-tags d-flex align-items-center flex-wrap">
                                            <li><span>Tag:</span></li>
                                            <li><a href="#">PLANTS</a></li>
                                            <li><a href="#">CACTUS</a></li>
                                        </ol>
                                        {/* Share */}
                                        <div className="post-share">
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                            <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                        </div>
                                    </div>
                                    {/* Comment Area Start */}
                                    <div className="comment_area clearfix">
                                        <h4 className="headline">2 Comments</h4>
                                        <ol>
                                            {/* Single Comment Area */}
                                            <li className="single_comment_area">
                                                <div className="comment-wrapper d-flex">
                                                    {/* Comment Meta */}
                                                    <div className="comment-author">
                                                        <img src="img/bg-img/37.jpg" alt />
                                                    </div>
                                                    {/* Comment Content */}
                                                    <div className="comment-content">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h5>Simona Halep</h5>
                                                            <span className="comment-date">09:00 AM,  20 Jun 2018</span>
                                                        </div>
                                                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu adipisci velit, sed quia non numquam eius modi</p>
                                                        <a className="active" href="#">Reply</a>
                                                    </div>
                                                </div>
                                                <ol className="children">
                                                    <li className="single_comment_area">
                                                        <div className="comment-wrapper d-flex">
                                                            {/* Comment Meta */}
                                                            <div className="comment-author">
                                                                <img src="img/bg-img/38.jpg" alt />
                                                            </div>
                                                            {/* Comment Content */}
                                                            <div className="comment-content">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h5>Rafael Nadal</h5>
                                                                    <span className="comment-date">09:30 AM,  20 Jun 2018</span>
                                                                </div>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu adipisci velit, sed quia non numquam eius modi</p>
                                                                <a className="active" href="#">Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="single_comment_area">
                                                <div className="comment-wrapper d-flex">
                                                    {/* Comment Meta */}
                                                    <div className="comment-author">
                                                        <img src="img/bg-img/39.jpg" alt />
                                                    </div>
                                                    {/* Comment Content */}
                                                    <div className="comment-content">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h5>Maria Sharapova</h5>
                                                            <span className="comment-date">02:20 PM,  20 Jun 2018</span>
                                                        </div>
                                                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu adipisci velit, sed quia non numquam eius modi</p>
                                                        <a className="active" href="#">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    {/* Leave A Comment */}
                                    <div className="leave-comment-area clearfix">
                                        <div className="comment-form">
                                            <h4 className="headline">Leave A Comment</h4>
                                            <div className="contact-form-area">
                                                {/* Comment Form */}
                                                <form action="#" method="post">
                                                    <div className="row">
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" id="contact-name" placeholder="Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control" id="contact-email" placeholder="Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <textarea className="form-control" name="message" id="message" cols={30} rows={10} placeholder="Comment" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <button type="submit" className="btn alazea-btn">Post Comment</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Blog Sidebar Area */}
                            <div className="col-12 col-sm-9 col-md-4">
                                <div className="post-sidebar-area">
                                    {/* ##### Single Widget Area ##### */}
                                    <div className="single-widget-area">
                                        <form action="#" method="get" className="search-form">
                                            <input type="search" name="search" id="widgetSearch" placeholder="Search..." />
                                            <button type="submit"><i className="icon_search" /></button>
                                        </form>
                                    </div>
                                    {/* ##### Single Widget Area ##### */}
                                    <div className="single-widget-area">
                                        {/* Author Widget */}
                                        <div className="author-widget">
                                            <div className="author-thumb-name d-flex align-items-center">
                                                <div className="author-thumb">
                                                    <img src="img/bg-img/29.jpg" alt />
                                                </div>
                                                <div className="author-name">
                                                    <h5>Alan Jackson</h5>
                                                    <p>Editor</p>
                                                </div>
                                            </div>
                                            <p>I’m the editor for houseplants &amp; garden design articles on social, and I like to put each of those articles in the topic.</p>
                                            <div className="social-info">
                                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ##### Single Widget Area ##### */}
                                    <div className="single-widget-area">
                                        {/* Title */}
                                        <div className="widget-title">
                                            <h4>Recent post</h4>
                                        </div>
                                        {/* Single Latest Posts */}
                                        <div className="single-latest-post d-flex align-items-center">
                                            <div className="post-thumb">
                                                <img src="img/bg-img/30.jpg" alt />
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="post-title">
                                                    <h6>New Harris Bugg design for Bridgewater</h6>
                                                </a>
                                                <a href="#" className="post-date">20 Jun 2018</a>
                                            </div>
                                        </div>
                                        {/* Single Latest Posts */}
                                        <div className="single-latest-post d-flex align-items-center">
                                            <div className="post-thumb">
                                                <img src="img/bg-img/31.jpg" alt />
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="post-title">
                                                    <h6>The designers will create a new kitchen garden</h6>
                                                </a>
                                                <a href="#" className="post-date">20 Jun 2018</a>
                                            </div>
                                        </div>
                                        {/* Single Latest Posts */}
                                        <div className="single-latest-post d-flex align-items-center">
                                            <div className="post-thumb">
                                                <img src="img/bg-img/32.jpg" alt />
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="post-title">
                                                    <h6>SGD Members win Best of Houzz Design Award</h6>
                                                </a>
                                                <a href="#" className="post-date">20 Jun 2018</a>
                                            </div>
                                        </div>
                                        {/* Single Latest Posts */}
                                        <div className="single-latest-post d-flex align-items-center">
                                            <div className="post-thumb">
                                                <img src="img/bg-img/33.jpg" alt />
                                            </div>
                                            <div className="post-content">
                                                <a href="#" className="post-title">
                                                    <h6>Shepherding Vegetables From Roof to Restaurant</h6>
                                                </a>
                                                <a href="#" className="post-date">20 Jun 2018</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ##### Single Widget Area ##### */}
                                    <div className="single-widget-area">
                                        {/* Title */}
                                        <div className="widget-title">
                                            <h4>Tag Cloud</h4>
                                        </div>
                                        {/* Tags */}
                                        <ol className="popular-tags d-flex flex-wrap">
                                            <li><a href="#">PLANTS</a></li>
                                            <li><a href="#">NEW PRODUCTS</a></li>
                                            <li><a href="#">CACTUS</a></li>
                                            <li><a href="#">DESIGN</a></li>
                                            <li><a href="#">NEWS</a></li>
                                            <li><a href="#">TRENDING</a></li>
                                            <li><a href="#">VIDEO</a></li>
                                            <li><a href="#">GARDEN DESIGN</a></li>
                                        </ol>
                                    </div>
                                    {/* ##### Single Widget Area ##### */}
                                    <div className="single-widget-area">
                                        {/* Title */}
                                        <div className="widget-title">
                                            <h4>BEST SELLER</h4>
                                        </div>
                                        {/* Single Best Seller Products */}
                                        <div className="single-best-seller-product d-flex align-items-center">
                                            <div className="product-thumbnail">
                                                <a href="shop-details.html"><img src="img/bg-img/4.jpg" alt /></a>
                                            </div>
                                            <div className="product-info">
                                                <a href="shop-details.html">Cactus Flower</a>
                                                <p>$10.99</p>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
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
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Single Best Seller Products */}
                                        <div className="single-best-seller-product d-flex align-items-center">
                                            <div className="product-thumbnail">
                                                <a href="shop-details.html"><img src="img/bg-img/34.jpg" alt /></a>
                                            </div>
                                            <div className="product-info">
                                                <a href="shop-details.html">Recuerdos Plant</a>
                                                <p>$9.99</p>
                                                <div className="ratings">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ##### Blog Content Area End ##### */}
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

export default SinglePost
