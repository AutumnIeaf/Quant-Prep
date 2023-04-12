import React from 'react';

const Courses = () => {
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
                <h2>All Courses</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero End */}
    {/* all-course Start */}
    <section className="all-course section-padding30">
      <div className="container">
        <div className="row">
          <div className="all-course-wrapper">
            {/* Heading & Nav Button */}
            <div className="row mb-15">
              <div className="col-lg-12">
                <div className="properties__button mb-90">
                  {/*Nav Button  */}
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        All
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Computer Science
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Operations Research &amp; Information Engineering
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-last-tab"
                        data-toggle="tab"
                        href="#nav-last"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Mathematics
                      </a>
                    </div>
                  </nav>
                  {/*End Nav Button  */}
                </div>
              </div>
            </div>
            {/* Tab content */}
            <div className="row">
              <div className="col-12">
                {/* Nav Card */}
                <div className="tab-content" id="nav-tabContent">
                  {/*  one */}
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">
                                Introduction to Coding Using Python
                              </a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Object Oriented Programming</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Data Structures</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Functional Programming</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Computer Organization</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Systems Programming</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Operating Systems</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Supervised Learning I</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Supervised Learning II</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Unsupervised Learning</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Reinforcement Learning</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Probability &amp; Statistics</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Data Science</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Stochastic Processes</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Monte Carlo Simulation</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Optimization I</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Optimization II</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Game Theory</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Information Theory</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Calculus I</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Calculus II</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Calculus III</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Differential Equations</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Linear Algebra</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  Two */}
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">
                                Introduction to Coding Using Python
                              </a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Object Oriented Programming</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Data Structures</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Functional Programming</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Computer Organization</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Systems Programming</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Operating Systems</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Supervised Learning I</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Supervised Learning II</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Unsupervised Learning</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/cs.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Reinforcement Learning</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  Three */}
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Probability &amp; Statistics</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Data Science</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Stochastic Processes</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Monte Carlo Simulation</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Optimization I</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Optimization II</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Game Theory</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/info.png')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Information Theory</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  Fur */}
                  <div
                    className="tab-pane fade"
                    id="nav-last"
                    role="tabpanel"
                    aria-labelledby="nav-last-tab"
                  >
                    <div className="row">
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Calculus I</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Calculus II</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Calculus III</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Differential Equations</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        {/* Single course */}
                        <div className="single-course mb-40">
                          <div className="course-img">
                            <img src={require('../components/assets/img/mathematics.jpg')} alt="" />
                          </div>
                          <div className="course-caption">
                            <h4>
                              <a href="#">Linear Algebra</a>
                            </h4>
                            <div className="course-cap-bottom d-flex justify-content-between">
                              <div className="browse-btn1 text-center">
                                <a
                                  href="courses.html"
                                  className="btn"
                                  style={{ borderRadius: 75 }}
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Nav Card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* all-course End */}
  </main>
</>
);};

export default Courses;
