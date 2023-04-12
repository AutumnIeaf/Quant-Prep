import React from 'react';

const Contact = () => {
  return (
    <>
    <main>
        {/*? Hero Start */}
        <div className="slider-area ">
        <div className="slider-height2 d-flex align-items-center">
            <div className="container">
            <div className="row">
                <div className="col-xl-12">
                <div className="hero-cap hero-cap2 text-center">
                    <h2>Contact Us</h2>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* Hero End */}
        {/* ================ contact section start ================= */}
        <section className="contact-section">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <h2 className="contact-title">Questions? Get in touch.</h2>
            </div>
            <div className="col-lg-8">
                <form
                className="form-contact contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate="novalidate"
                >
                <div className="row">
                    <div className="col-12">
                    <div className="form-group">
                        <textarea
                        className="form-control w-100"
                        name="message"
                        id="message"
                        cols={30}
                        rows={9}
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder=" Enter Message"
                        defaultValue={""}
                        />
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">
                        <input
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                        />
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">
                        <input
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Email"
                        />
                    </div>
                    </div>
                    <div className="col-12">
                    <div className="form-group">
                        <input
                        className="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
                        />
                    </div>
                    </div>
                </div>
                <div className="form-group mt-3">
                    <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                    >
                    Send
                    </button>
                </div>
                </form>
            </div>
            {/* <div class="col-lg-3 offset-lg-1">
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-home"></i></span>
                        <div class="media-body">
                            <h3>Buttonwood, California.</h3>
                            <p>Rosemead, CA 91770</p>
                        </div>
                    </div>
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                        <div class="media-body">
                            <h3>+1 253 565 2365</h3>
                            <p>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div class="media contact-info">
                        <span class="contact-info__icon"><i class="ti-email"></i></span>
                        <div class="media-body">
                            <h3>support@colorlib.com</h3>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        </section>
        {/* ================ contact section end ================= */}
    </main>
    </>
);};

export default Contact;
