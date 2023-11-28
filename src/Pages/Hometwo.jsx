import React from "react";
import Streakone from "../imagess/763x848_img1.png";
import ForkIcon from "../imagess/steakbreak_svg_icons/fork.svg";
import GrillIcon from "../imagess/steakbreak_svg_icons/grill.svg";
import EcoIcon from "../imagess/steakbreak_svg_icons/eco.svg";
import OkayIcon from "../imagess/steakbreak_svg_icons/okay.svg";
import UnEvenIcon from "../imagess/steakbreak_svg_icons/uneven_bg_3.svg";
import bgSteakOne from "../imagess/1920x744_bg1.jpg";
import Tomates from "../imagess/tomatos.png";
import Mud from "../imagess/mud2.png";
import PhoneIcon from "../imagess/steakbreak_svg_icons/phone.svg";
import GlobalIcon from "../imagess/steakbreak_svg_icons/globe.svg";
import clock from "../imagess/steakbreak_svg_icons/clock.svg";
import TableOne from "../imagess/384x384_img1.jpg";
import Header from "../Components/Header/header";
import FooterOne from "../Components/Footer/footerOne";
function Hometwo(props) {
  return (
    <div>
      <Header />
      <div className="mad-content no-pd">
        <div className="main-container wide-style-2">
          <div
            data-bg-image-src={bgSteakOne}
            className="mad-section mad-section--stretched mad-colorizer--scheme-color-5 with-img-overlay bg-1920-744"
          >
            <div className="mad-colorizer-bg-color">
              <span className="mad-section-texture">
                <img src={UnEvenIcon} alt="" className="svg" />
              </span>
            </div>
            <div className="row hr-size-2">
              <div className="col-lg-6">
                <figure className="mad-img-holder">
                  <div className="mad-img">
                    <img src={Streakone} alt="" />
                  </div>
                </figure>
              </div>
              <div className="col-lg-6">
                <div className="mad-top-offset">
                  <h2>Hello & Welcome!</h2>
                  <p className="mad-text-large mad-text-color-2">
                    <b>
                      Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                      turpis. Donec sit amet eros.
                    </b>
                  </p>
                  <p className="mad-text-big">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut
                    tellus dolor, dapibus eget, elementum vel, cursus eleifend,
                    elit. Aenean auctor wisi et urna. Aliquam erat volutpat.
                    Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum
                    libero nisl, porta vel.
                  </p>
                  <a href="#" className="mad-read-more">
                    More About Us <img src={ForkIcon} alt="" className="svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mad-colorizer-bg-color with-section-element">
              <div className="mad-section-element">
                {/* <!--================ Icon Boxes ================--> */}
                <div className="mad-icon-boxes hr-type item-col-3">
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src={OkayIcon} alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">Premium Quality</h6>
                        <p>
                          Sed laoreet aliquam leo. Ut tellus dolor, dapibus
                          eget, elementum vel cursus.
                        </p>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================--> */}
                  </div>
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src={EcoIcon} alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">
                          100% ECO Ingredients
                        </h6>
                        <p>
                          Aenean auctor wisi et urna. Aliquam erat volutpat.
                          Duis ac turpis.
                        </p>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================--> */}
                  </div>
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src={GrillIcon} alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">
                          Wood-burned Grill
                        </h6>
                        <p>
                          Suspendisse sollicitudin velit sed leo. Ut pharetra
                          augue nec augue.
                        </p>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================--> */}
                  </div>
                </div>
                {/* <!--================ End of Icon Boxes ================--> */}
              </div>
            </div>
          </div>
          <div className="mad-section mad-section--stretched-content">
            <div className="mad-colorizer-bg-color">
              <div className="with-svg-item svg-right-side top-space">
                <img src={Tomates} alt="" />
              </div>
              <div className="with-svg-item svg-right-side bottom2">
                <img src={Mud} alt="" />
              </div>
            </div>
            <div className="mad-menu-cards item-col-2">
              <div className="mad-col">
                <div className="mad-menu-card">
                  <div className="mad-menu-border"></div>
                  <a href="#" className="mad-card-img with-overlay">
                    <img src={Streakone} alt="" />
                  </a>
                  <div className="mad-card-text">
                    <h2>Dinner</h2>
                    <a href="#" className="mad-read-more">
                      View Menu <img src={ForkIcon} alt="" className="svg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mad-col">
                <div className="mad-menu-card">
                  <div className="mad-menu-border"></div>
                  <a href="#" className="mad-card-img with-overlay">
                    <img src={Streakone} alt="" />
                  </a>
                  <div className="mad-card-text">
                    <h2>Lunch</h2>
                    <a href="#" className="mad-read-more">
                      View Menu <img src={ForkIcon} alt="" className="svg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mad-col">
                <div className="mad-menu-card">
                  <div className="mad-menu-border"></div>
                  <a href="#" className="mad-card-img with-overlay">
                    <img src={Streakone} alt="" />
                  </a>
                  <div className="mad-card-text">
                    <h2>Bar</h2>
                    <a href="#" className="mad-read-more">
                      View Menu <img src={ForkIcon} alt="" className="svg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mad-col">
                <div className="mad-menu-card">
                  <div className="mad-menu-border"></div>
                  <a href="#" className="mad-card-img with-overlay">
                    <img src={Streakone} alt="" />
                  </a>
                  <div className="mad-card-text">
                    <h2>Dessert</h2>
                    <a href="#" className="mad-read-more">
                      View Menu <img src={ForkIcon} alt="" className="svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-bg-image-src="images/1920x664_bg1.jpg"
            className="mad-cta mad-section no-pt with-texture mad-section--stretched mad-colorizer--scheme-   bg-1920-644"
          >
            <div className="mad-colorizer-bg-color">
              <span className="mad-section-texture top-side">
                <img
                  src="steakbreak_svg_icons/uneven_bg_2.svg"
                  alt=""
                  className="svg"
                />
              </span>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-8">
                {/* <!--================ Testimonials ================--> */}
                <div className="mad-testimonials single-item sm-pt">
                  <div className="mad-grid mad-grid--cols-1 owl-carousel">
                    {/* <!-- owl item --> */}
                    <div className="mad-grid-item">
                      <div className="mad-testimonial">
                        <div data-estimate="5" className="mad-rating"></div>
                        <div className="mad-testiomonial-info">
                          <blockquote>
                            <p>
                              “Mauris fermentum dictum magna. Sed laoreet
                              aliquam leo. Ut tellus dolor, dapibus eget,
                              elementum vel, cursus eleifend, elit. Aenean
                              auctor wisi et urna. Aliquam erat volutpat. ”
                            </p>
                          </blockquote>
                        </div>
                        <div className="mad-author">
                          <div className="mad-author-info">
                            <cite>Mark & Rebecca Johnson, CA, USA</cite>
                            <span>
                              <img src="../images/visor.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- / owl item --> */}
                    {/* <!-- owl item --> */}
                    <div className="mad-grid-item">
                      <div className="mad-testimonial">
                        <div data-estimate="5" className="mad-rating"></div>
                        <div className="mad-testiomonial-info">
                          <blockquote>
                            <p>
                              “Integer rutrum ante eu lacus. Vestibulum libero
                              nisl, porta vel, scelerisque eget, malesuada at,
                              neque. Vivamus eget nibh. Etiam cursus leo vel
                              metus. Nulla facilisi. Aenean nec eros.”
                            </p>
                          </blockquote>
                        </div>
                        <div className="mad-author">
                          <div className="mad-author-info">
                            <cite>Marta Healy, CA, USA</cite>
                            <span>
                              <img src="images/visor.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- / owl item --> */}
                    {/* <!-- owl item --> */}
                    <div className="mad-grid-item">
                      <div className="mad-testimonial">
                        <div data-estimate="5" className="mad-rating"></div>
                        <div className="mad-testiomonial-info">
                          <blockquote>
                            <p>
                              “Mauris fermentum dictum magna. Sed laoreet
                              aliquam leo. Ut tellus dolor, dapibus eget,
                              elementum vel, cursus eleifend, elit. Aenean
                              auctor wisi et urna. Aliquam erat volutpat. ”
                            </p>
                          </blockquote>
                        </div>
                        <div className="mad-author">
                          <div className="mad-author-info">
                            <cite>Mark & Rebecca Johnson, CA, USA</cite>
                            <span>
                              <img src="images/visor.png" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- / owl item --> */}
                  </div>
                </div>
                {/* <!--================ End of Testimonials ================--> */}
              </div>
            </div>
          </div>
          <div
            className="mad-section mad-bg-section no-pd mad-section--stretched mad-colorizer--scheme- mad-colorizer--parallax bg-1920-1000"
            data-bg-image-src="images/1920x1000_bg1.jpg"
          ></div>
          <div
            data-bg-image-src="images/1920x648_bg1.jpg"
            className="mad-section no-pb mad-section--stretched mad-colorizer--scheme-color-5 no-space bg-1920-648"
          >
            <div className="mad-colorizer-bg-color">
              <div className="with-svg-item svg-left-2">
                <img src="images/garlic2.png" alt="" />
              </div>
            </div>
            <div className="row hr-size-2">
              <div className="col-lg-6">
                <div className="mad-top-offset mad-bottom-offset">
                  <h2>Upcoming Event</h2>
                  <p className="mad-text-large mad-text-color-2">
                    <b>
                      <span className="mad-text-color-3">BBQ Party</span> |{" "}
                      <span className="mad-text-color-3">April 28, 2021</span> |{" "}
                      <span className="mad-text-color-3">6 PM - 9 PM</span>
                    </b>
                  </p>
                  <p className="mad-text-big content-element-5">
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac
                    turpis. Integer rutrum ante eu lacus. Vestibulum libero
                    nisl, porta vel, scelerisque eget, malesuada at, neque.
                    Vivamus eget nibh. Etiam cursus leo vel metus.
                  </p>
                  <a href="#" className="btn btn-big">
                    <span className="texture"></span>
                    <span>Make a Reservation</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <figure className="mad-img-holder img-overlay">
                  <div className="mad-img">
                    <img src="images/763x648_img1.png" alt="" />
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <div className="mad-section no-pd mad-section--stretched-content">
            <div className="g-map-wrap">
              <div id="googleMap" className="mad-gmap"></div>
            </div>
            <div className="mad-colorizer-bg-color with-map">
              <span className="mad-section-texture top-side-2">
                <img src={UnEvenIcon} alt="" className="svg" />
              </span>
              <div className="mad-section-element bottom-left">
                {/* <!--================ Icon Boxes ================--> */}
                <div className="mad-icon-boxes hr-type item-col-3">
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src={PhoneIcon} alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">
                          +1 800 603 6035 <br />
                          mail@companyname.com
                        </h6>
                        <p>Contact Us</p>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================--> */}
                  </div>
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src={GlobalIcon} alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">
                          56 12th Ave, <br />
                          New York, NY 10011
                        </h6>
                        <a href="#" className="mad-dir mad-link">
                          Get Direction
                        </a>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================--> */}
                  </div>
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src={clock} alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">
                          Monday – Saturday: <br />
                          Noon – 11:30 PM
                        </h6>
                        <p>Opening Hours</p>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================--> */}
                  </div>
                </div>
                {/* <!--================ End of Icon Boxes ================--> */}
              </div>
            </div>
          </div>
          <div
            data-bg-image-src="images/1920x528_redbg1.jpg"
            className="mad-section size-5 with-texture mad-section--stretched mad-colorizer--scheme-color-4 mad-colorizer--scheme-light bg-red"
          >
            <div className="mad-colorizer-bg-color">
              <span className="mad-section-texture">
                <img src={UnEvenIcon} alt="" className="svg" />
              </span>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-4">
                <h2 className="mad-section-title">Make a Reservation</h2>
              </div>
              <div className="col-xl-8">
                <form className="mad-form style-2">
                  <div className="form-group">
                    <div className="form-col with-icon">
                      <input type="text" placeholder="11/04/2020" />
                      <i className="material-icons">calendar_today</i>
                    </div>
                    <div className="form-col with-icon">
                      <input type="text" placeholder="7:00 PM" />
                      <i className="material-icons">access_time</i>
                    </div>
                    <div className="form-col with-icon">
                      <input type="text" placeholder="2 persons" />
                      <i className="material-icons-outlined">people</i>
                    </div>
                    <div className="form-col no-fw">
                      <button className="btn btn-big btn-style-3">
                        Book a Table
                      </button>
                    </div>
                  </div>
                  <span className="mad-form-tag">Powered by OpenTable</span>
                </form>
              </div>
            </div>
          </div>
          <div className="mad-section no-pd mad-section--stretched-content">
            <div className="mad-instafeed">
              <div className="mad-grid item-col-5 no-gutters">
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
                <div className="mad-col">
                  <a href="#">
                    <img src={TableOne} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </div>
  );
}

export default Hometwo;
