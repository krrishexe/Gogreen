import React, { useEffect } from 'react'
import { Link, useActionData } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {


    return (
        <div>
            <div>
                {/* ##### Header Area Start ##### */}
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
