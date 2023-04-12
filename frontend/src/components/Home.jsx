import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <>
        <main>
          {/*? slider Area Start*/}
          <div className="slider-area ">
            <div className="slider-active">
              {/* Single Slider */}
              <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                      <div className="hero__caption">
                        <h1 data-animation="fadeInLeft" data-delay=".4s">
                          Welcome to Industry leading QF Education.
                        </h1>
                        {/* Hero-btn */}
                        <div className="hero__btn">
                          <a
                            href="industries.html"
                            className="btn hero-btn"
                            data-animation="fadeInLeft"
                            data-delay=".8s"
                            style={{ borderRadius: 75 }}
                          >
                            Learn now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-3">
                      <div
                        className="hero-man d-none d-lg-block"
                        data-animation="fadeInLeft"
                        data-delay=".4s"
                      >
                        <img
                          src={require('../components/assets/img/logo1.jpeg')}
                          style={{ borderRadius: 75 }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
          {/* slider Area End*/}
          {/*? About Law Start*/}
          <div className="about-area section-padding2">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="about-caption mb-50">
                    {/* Section Tittle */}
                    <div className="section-tittle mb-35">
                      <span>Interested in Quantitative Fianance?</span>
                      <h2>We're here to help.</h2>
                    </div>
                    <p>
                      Are you looking to break into the exciting and lucrative world
                      of quantitative finance? Do you want to develop the skills and
                      knowledge you need to succeed in this highly competitive field?
                      Look no further than QuantPrep, your one-stop-shop for
                      comprehensive and effective training in quantitative finance.
                    </p>
                    <ul>
                      <li>
                        <span className="flaticon-business" />
                        Comprehensive courses designed by industry experts and
                        tailored specifically for the needs of aspiring quantitative
                        finance professionals.
                      </li>
                      <li>
                        <span className="flaticon-graduated " />
                        Practical, hands-on experience through projects and
                        assignments that simulate real-world situations.
                      </li>
                      <li>
                        <span className="flaticon-communications-1" />
                        Personalized coaching and ongoing support from expert
                        instructors, who are always available to answer your questions
                        and provide guidance as you progress through the course.
                      </li>
                      <li>
                        <span className="flaticon-tools-and-utensils" />
                        Flexible learning options, including self-paced and
                        instructor-led courses, as well as online resources and
                        community forums, allowing you to tailor your learning
                        experience to your schedule and preferences.
                      </li>
                    </ul>
                    <a href="about.html" className="btn" style={{ borderRadius: 75 }}>
                      More About Us
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  {/* about-img */}
                  <div className="about-img ">
                    <div className="about-font-img d-none d-lg-block">
                      <img src={require('../components/assets/img/about2.png')} alt="" />
                    </div>
                    <div className="about-back-img ">
                      <img src={require('../components/assets/img/about.png')} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Law End*/}
          {/*? Categories Area Start */}
          <div
            className="categories-area section-padding20"
            style={{ backgroundColor: "#F8F8F8" }}
          >
            <div className="container" style={{ padding: 40 }}>
              <div className="row justify-content-sm-center">
                <div className="cl-xl-7 col-lg-8 col-md-10">
                  {/* Section Tittle */}
                  <div className="section-tittle text-center mb-70">
                    <span>The Necessities</span>
                    <h2>Develop your fundamentals.</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat mb-50">
                    <div className="cat-icon" style={{ paddingBottom: 15 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={42}
                        height={42}
                        fill="currentColor"
                        className="bi bi-pc-display"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z" />
                      </svg>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="#">Computer Science </a>
                      </h5>
                      <p>
                        Designed to provide you with a solid grounding in the
                        principles and techniques includeing essential topics such as
                        data analysis, machine learning, algorithmic trading, and risk
                        management.
                      </p>
                      <a href="#" className="read-more1">
                        Read More &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat mb-50">
                    <div className="cat-icon" style={{ paddingBottom: 15 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={42}
                        height={42}
                        fill="currentColor"
                        className="bi bi-gear"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                      </svg>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="#">
                          Operations Research &amp; Information Engineering
                        </a>
                      </h5>
                      <p>
                        Designed to provide you with a comprehensive understanding of
                        optimization, stochastic processes, probability theory,
                        decision analysis, and simulation modeling.{" "}
                      </p>
                      <a href="#" className="read-more1">
                        Read More &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat mb-50">
                    <div className="cat-icon" style={{ paddingBottom: 15 }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={42}
                        height={42}
                        fill="currentColor"
                        className="bi bi-percent"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="#">Mathematics</a>
                      </h5>
                      <p>
                        Designed to give you a comprehensive understanding of
                        essential topics, including probability theory, stochastic
                        calculus, optimization, partial differential equations, and
                        Monte Carlo simulations.
                      </p>
                      <a href="#" className="read-more1">
                        Read More &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Categories Area End */}
          <br />
          {/*? Popular Course Start */}
          <div className="popular-course">
            <div className="container">
              <div className="row justify-content-sm-center">
                <div className="cl-xl-7 col-lg-8 col-md-10">
                  {/* Section Tittle */}
                  <div className="section-tittle text-center mb-70">
                    <span>Field-specific courses</span>
                    <h2>Master your craft.</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  {/* Single course */}
                  <div className="single-course mb-40">
                    <div className="course-img">
                      <img src={require('../components/assets/img/oop.jpeg')} alt="" />
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
                      <img src={require('../components/assets/img/gametheory.jpg')} alt="" />
                    </div>
                    <div className="course-caption">
                      <h4>
                        <a href="#">Game Theory (4350 Subset)</a>
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
                      <img src={require('../components/assets/img/math.jpg')} alt="" />
                    </div>
                    <div className="course-caption">
                      <h4>
                        <a href="#">Linear Algebra (2940 Subset)</a>
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
              {/* Section Button */}
              <div className="row" style={{ paddingBottom: 30 }}>
                <div className="col-lg-12">
                  <div className="browse-btn2 text-center mt-50">
                    <a
                      href="courses.html"
                      className="btn"
                      style={{ borderRadius: 75 }}
                    >
                      Find More Courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Popular Course End */}
        </main>
      </>      
    );
  }
}

export default Home;
