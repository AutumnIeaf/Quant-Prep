import React from "react";

function Header() {
  return (
        <>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title> QuantPrep | Online Courses, Lessons &amp; Practice </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
        {/* CSS here */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/slicknav.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/gijgo.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        
        <header>
          {/* Header Start */}
          <div className="header-area">
            <div className="main-header ">
              <div className="header-top d-none d-lg-block" />
              <div className="header-bottom header-sticky">
                {/* Logo */}
                <div className="logo d-none d-lg-block">
                  <a href="/">
                    <img src={require('../components/assets/img/logo/logo.png')} alt="" />
                  </a>
                </div>
                <div className="container">
                  <div className="menu-wrapper">
                    {/* Logo */}
                    <div className="logo logo2 d-block d-lg-none">
                      <a href="/">
                        <img src={require('../components/assets/img/logo/logo.png')} alt="" />
                      </a>
                    </div>
                    {/* Main-menu */}
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>
                          <li>
                            <a href="/courses">Courses</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* Header-btn */}
                    <div className="main-menu d-none d-lg-block">
                      <div className="header-info-right">
                        <ul>
                          <li>
                            <a href="/login">
                              <i className="ti-user" style={{ padding: 10 }} />
                              Login{" "}
                            </a>
                          </li>
                          <li>
                            <a href="/register">
                              <i className="ti-lock" style={{ padding: 10 }} />
                              Register{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header End */}
        </header>
        </>
  );
}
export default Header;