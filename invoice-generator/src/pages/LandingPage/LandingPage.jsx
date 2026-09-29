import React, { Fragment } from 'react';
import './LandingPage.css';
import Features from '../../components/Features';
import Logo from '../../components/Logo';


const LandingPage = () => {


    return (
        <>
            {/*Hero Section: Full width, centered text with background image */}
            <header id="hero" className="hero-section text-white text-center">
                <div className="container py-5 d-flex flex-column justify-content-center">
                    <div className="row py-lg-5">
                        <div className="col-lg-9 col-md-10 mx-auto">
                            <h1 className="display-3 fw-bold mb-4">
                                Effortless Invoicing.Professional Results
                            </h1>
                            <p className="lead mb-5" style={{ fontSize: '1.3rem' }}>
                                Stop wrestling with spreadsheets. QuickInvoice helps you create and send beautiful invoices in minutes so you get paid faster.
                            </p>
                            <p>
                                {/*Primary call to action */}
                                <button className="btn btn-lg btn-warning fw-bold rounded-pill"

                                >
                                    Generate Your First Invoice
                                </button>
                                <span style={{ margin: '10px' }}></span>
                                {/*Secondary call to action */}
                                <a href="#how-it-works" className="btn btn-lg btn-outline-light rounded-pill">
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Steps to generate invoice Section */}
            <section id="how-it-works" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5 display-5 fw-bold">Get Started in 4 Simple Steps </h2>
                    <div className="row g-4 justify-content-center">

                        {/*Step 1 Card */}
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                                <div className="card-img-top-container d-flex align-items-center justify-content-center">
                                    <img
                                        src="https://placehold.co/150x150/0D6EFD/FFFFFF?text=1&font=montserrat"
                                        className="rounded-circle"
                                        alt="Enter Invoice Details"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/0D6EFD/FFFFFF?text=1&font=montserrat' }}
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-2 fs-5">Enter Details</h5>
                                    <p className="card-text text-muted small">
                                        Fill in client details, items, quantities, and prices using our intuitive form.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/*Step 2 Card */}
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                                <div className="card-img-top-container d-flex align-items-center justify-content-center">
                                    <img
                                        src="https://placehold.co/150x150/6610F2/FFFFFF?text=2&font=montserrat"
                                        className="rounded-circle"
                                        alt="Choose Template"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/150x150/6610F2/FFFFFF?text=2&font=montserrat';
                                        }}
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-2 fs-5">Choose Template</h5>
                                    <p className="card-text text-muted small">
                                        Select from our professionally designed templates to match your brand.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Step 3 Card */}
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                                <div className="card-img-top-container d-flex align-items-center justify-content-center">
                                    <img
                                        src="https://placehold.co/150x150/FD7E14/FFFFFF?text=3&font=montserrat"
                                        className="rounded-circle"
                                        alt="Preview Invoice"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/150x150/FD7E14/FFFFFF?text=3&font=montserrat';
                                        }}
                                    />
                                </div>
                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-2 fs-5">Preview Invoice</h5>
                                    <p className="card-text text-muted small">
                                        Check how your invoice looks before sending and make adjustments easily.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/*Step 4 Card */}
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="card h-100 shadow-sm border-0 text-center flex-fill">
                                <div className="card-img-top-container d-flex align-items-center justify-content-center">
                                    <img
                                        src="https://placehold.co/150x150/0DCAF0/FFFFFF?text=4&font=montserrat"
                                        className="rounded-circle"
                                        alt="Download & Save"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/0DCAF0/FFFFFF?text=4&font=montserrat' }}
                                    />
                                </div>

                                <div className="card-body p-4">
                                    <h5 className="card-title fw-bold mb-2 fs-5">Download & Save</h5>
                                    <p className="card-text text-muted small">
                                        Download your invoice, send it via email, or save it for future reference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section>
                <Features />
            </section>

            {/* Action Section */}
            <section id="action" className="action-section text-white text-center py-5">
                <div className="container">
                    <h2 className="display-4 fw-bold mb-3">Ready to Streamline Your Invoicing?</h2>
                    <p className="lead mb-4">
                        Join thousands of freelancers and small businesses who trust QuickInvoice.
                        Start creating professional invoices today – it's fast, easy, and effective!
                    </p>
                    <button className="btn btn-lg btn-warning fw-bold rounded-pill"
                        
                    >
                        Start Generating Invoices Now
                    </button>
                    <p className="text-muted mt-2 ">(This will lead to the invoice generation interface)</p>
                </div>
            </section>

            <>
          <footer className="py-5 bg-dark text-white-50">
            <div className="container text-center">
              <Logo/>
              <p className="text-white fw-bold mt-2">Quick Invoice</p>
              <p className="mb-0">
                &copy; {new Date().getFullYear()} QuickInvoice. All Rights Reserved.
              </p>
              <p className="mb-0 small">
                Crafted with <i className="bi bi-heart-fill text-danger"></i> for freelancers
              </p>
              <p className="mt-2">

                
              </p>
            </div>
          </footer>

        </>
        </>
    )
}

export default LandingPage;