import React, { useState, useEffect } from "react";
// import Header from "../Components/Navbar";
import ReactPlayer from "react-player";

import { Input } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import FooterOne from "../Components/Footer/footerOne";
import Fade from "react-reveal/Fade";
import Header from "../Components/Header/header";
import { Eclipse } from "react-loading-io";
import { AiOutlineMail } from "react-icons/ai";
import axiosInstance from "../axios-Instance";
import image from "../images/others/signature.png";
import SectionOne from "../images/sections/1.jpg";
import IconOne from "../images/icons/1.png";
import IconTwo from "../images/icons/2.png";
import IconThree from "../images/icons/3.png";
import GalleryOne from "../images/gallery/1.jpg";
import GalleryTwo from "../images/gallery/2.jpg";
import GalleryThree from "../images/gallery/3.jpg";
import GalleryFour from "../images/gallery/4.jpg";
import GalleryFive from "../images/gallery/5.jpg";
import GallerySix from "../images/gallery/6.jpg";
import GallerySeven from "../images/gallery/7.jpg";
import GalleryEight from "../images/gallery/8.jpg";
import GalleryTen from "../images/gallery/10.jpg";
import GalleryNine from "../images/gallery/9.jpg";
import CafeName from "../Asserts/CafeName.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Streakone from "../imagess/763x848_img1.png";
import ForkIcon from "../imagess/steakbreak_svg_icons/fork.svg";
import Sheesa from "../Asserts/blueshisha.jpg";
import Beer from "../Asserts/special-4.jpg";
import Shake from "../Asserts/special-8.jpg";
import Slider from "react-slick";
import Tea from "../Asserts/whitetea.jpg";
import { Carousel } from "react-bootstrap";
import Tomates from "../imagess/tomatos.png";
import Mud from "../imagess/mud2.png";
import SliderImage1 from "../Asserts/cafe-drink-bg-2.jpg";
import SliderImage from "../Asserts/contact-us.jpg";
import Lighter from "../Asserts/lighter.png";
import SliderImage2 from "../Asserts/checkout.jpg";
import { Link } from "react-router-dom";
import ArrowLeft from "../imagess/steakbreak_svg_icons/short_arrow_left.svg";
import ArrowRight from "../imagess/steakbreak_svg_icons/short_arrow_right.svg";
import one from "../Asserts/1.jpg";
import two from "../Asserts/2.jpg";
import three from "../Asserts/3.jpg";
import five from "../Asserts/5.png";
import six from "../Asserts/6.png";
import seven from "../Asserts/7.png";
import { useTranslation } from "react-i18next";
const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={props.fill}
    className={props.class}
  ></svg>
);
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },

    multilineColor: {
      color: "red",
    },
  },
}));

function Home(props) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [values, setvalues] = useState({
    emailAddress: "",
    nextIcon: <img src={ArrowRight} className="arrow-style" />,
    prevIcon: <img src={ArrowLeft} className="arrow-style" />,
  });
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: [e.target.value] });
    console.log(e.target.value);
    console.log(values.emailAddress);
  };
  const hanleSubmit = (e) => {
    e.preventDefault();
    var contact = {
      emailAddress: values.emailAddress,
    };
  };
  const delay = 1;
  const classNamees = useStyles();
  const sendEmail = async (e) => {
    console.log("ali raza", e);
    e.preventDefault();

    await axiosInstance
      .post("/Register/sendemailContactone", {
        email: mail,
        fullname: name,
        message: message,
        to: "info@cafegitana.com",
      })
      .then((res) => {
        console.log("helo", res);
      })
      .catch((err) => console.log(err));
  };
  const handleChangename2 = (e) => {
    console.log(e.target.name, e.target.value);
    setName(e.target.value);
  };
  const handleChangeemail3 = (e) => {
    console.log(e.target.name, e.target.value);
    setMail(e.target.value);
  };
  const handleChangemessage4 = (e) => {
    console.log(e.target.name, e.target.value);

    setMessage(e.target.value);
  };
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const subscribe = async () => {
    let res = await axiosInstance
      .post("/newsletter/subscribe", {
        email_address: `${values.emailAddress}`,
      })
      .then((res) => {
        alert("Email sent!");
      });
  };

  return (
    <div>
      {/* <h1>hello</h1> */}
      <Header />
      <Carousel
        style={{ height: "85vh" }}
        interval={null}
        nextIcon={values.nextIcon}
        prevIcon={values.prevIcon}
      >
        <Carousel.Item>
          <img src={two} className="slider-image" />
          <Carousel.Caption>
            <div className="btn-set" style={{ display: "block" }}>
              {/* <div className="slider-heading">{t("Home.9")}</div> <br /> */}
              <Link to="/UserMenu" className="btnn btn-huge  mt-20">
                {t("Homes.10")}
              </Link>
              <Link to="/store" className="btnn btn-huge mt-20">
                {t("Homess.11")}
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={three} className="slider-image" />
          <Carousel.Caption>
            <div className="btn-set" style={{ display: "block" }}>
              {/* <div className="slider-heading">{t("Home.9")}</div> <br /> */}
              <a href="#" className="btnn btn-huge  mt-20">
                {t("Homes.10")}
              </a>
              <a href="#" className="btnn btn-huge  mt-20">
                {t("Homess.11")}
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={one} className="slider-image" />

          <Carousel.Caption>
            <div className="btn-set" style={{ display: "block" }}>
              {/* <div className="slider-heading">{t("Home.9")}</div> <br /> */}
              <a href="#" className="btnn btn-huge  mt-20">
                {t("Homes.10")}
              </a>
              <a href="#" className="btnn btn-huge  mt-20">
                {t("Homess.11")}
              </a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div dir="ltr" className="rev_slider_wrapper fullscreenbanner-container">
        <div
          id="rev-slider-1"
          // data-version="5.4.5"
          className="mad-d-none rev-slider fullscreenabanner"
        >
          <ul>
            <li data-transition="fade">
              <img
                src="images/1920x1080_slide1.jpg"
                alt=""
                // data-bgposition="top center"
                // data-bgfit="cover"
                // data-bgrepeat="no-repeat"
                // data-bgparallax="off"
                // className="rev-slidebg"
                data-no-retina
              />

              <div
                // data-start="0"
                // data-x="left"
                // data-y="center"
                // data-hoffset="['12', '-45', '20', '20']"
                // data-voffset="['-80', '-80', '-80', '-150']"
                // data-width="['800', '800', '800', '100%']"
                // data-height="['auto']"
                // data-textAlign="['left']"
                // data-color="['#ffffff']"
                // data-fontsize="['72']"
                // data-lineheight="['96']"
                className="tp-caption tp-resizeme tp-layer-section-title"
              >
                Meet, Eat, Enjoy <br />
                The True Taste
              </div>

              <div
                // data-start="0"
                // data-x="left"
                // data-y="center"
                // data-hoffset="['12', '-45', '20', '20']"
                // data-voffset="['104', '104', '104', '154']"
                // data-width="['700', '700', '700', '90%']"
                // data-textAlign="['left']"
                className="tp-caption tp-resizeme"
              >
                <div className="btn-set">
                  <a href="#" className="btn btn-huge">
                    Book a Table
                  </a>
                  <a href="#" className="btn btn-huge">
                    Order Online
                  </a>
                </div>
              </div>
            </li>

            <li data-transition="fade">
              <img
                src="images/1920x1080_slide2.jpg"
                alt=""
                // data-bgposition="top center"
                // data-bgfit="cover"
                // data-bgrepeat="no-repeat"
                // data-bgparallax="off"
                // className="rev-slidebg"
                // data-no-retina
              />

              <div
                // data-start="0"
                // data-x="left"
                // data-y="center"
                // data-hoffset="['20', '-45', '20', '20']"
                // data-voffset="['-80', '-80', '-80', '-150']"
                // data-width="['800', '800', '800', '100%']"
                // data-height="['auto']"
                // data-textAlign="['left']"
                // data-color="['#ffffff']"
                // data-fontsize="['72']"
                // data-lineheight="['96']"
                className="tp-caption tp-resizeme tp-layer-section-title"
              >
                Meet, Eat, Enjoy <br />
                The True Taste
              </div>

              <div
                // data-start="0"
                // data-x="left"
                // data-y="center"
                // data-hoffset="['20', '-45', '20', '20']"
                // data-voffset="['104', '104', '104', '154']"
                // data-width="['700', '700', '700', '90%']"
                // data-textAlign="['left']"
                className="tp-caption tp-resizeme"
              >
                <div className="btn-set">
                  <a href="#" className="btn btn-huge">
                    Book a Table
                  </a>
                  <a href="#" className="btn btn-huge">
                    Order Online
                  </a>
                </div>
              </div>
            </li>

            <li data-transition="fade">
              <img
                src="images/1920x1080_slide3.jpg"
                // alt=""
                // data-bgposition="top center"
                // data-bgfit="cover"
                // data-bgrepeat="no-repeat"
                // data-bgparallax="off"
                // className="rev-slidebg"
                // data-no-retina
              />

              <div
                // data-start="0"
                // data-x="left"
                // data-y="center"
                // data-hoffset="['20', '-45', '20', '20']"
                // data-voffset="['-80', '-80', '-80', '-150']"
                // data-width="['800', '800', '800', '100%']"
                // data-height="['auto']"
                // data-textAlign="['left']"
                // data-color="['#ffffff']"
                // data-fontsize="['72']"
                // data-lineheight="['96']"
                className="tp-caption tp-resizeme tp-layer-section-title"
              >
                Meet, Eat, Enjoy <br />
                The True Taste
              </div>

              <div
                // data-start="0"
                // data-x="left"
                // data-y="center"
                // data-hoffset="['20', '-45', '20', '20']"
                // data-voffset="['104', '104', '104', '154']"
                // data-width="['700', '700', '700', '90%']"
                // data-textAlign="['left']"
                className="tp-caption tp-resizeme"
              >
                <div className="btn-set">
                  <a href="#" className="btn btn-huge">
                    Book a Table
                  </a>
                  <a href="#" className="btn btn-huge">
                    Order Online
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className="mad-arrow">
            <img
              className="svg"
              src="steakbreak_svg_icons/short_arrow_left.svg"
              alt=""
            />
          </div>
          <div className="slide-status-numbers"></div>
          <div className="rev-socials">
            <ul>
              <li>
                <a href="#" className="mad-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="mad-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="mad-link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section id="content" style={{ backgroundColor: "#000" }}>
        <div className="content-wrap">
          <div className="modal-on-load" data-target="#myModal1"></div>

          <div className="modal1 mfp-hide subscribe-widget" id="myModal1">
            <div
              className="block dark mx-auto"
              style={{
                background: "url(demos/cafe/images/others/modal.jpg)",
                backgroundSize: "cover",
                maxWidth: "700px",
                boxShadow: "0px 0px 20px #000",
              }}
              data-height-xl="400"
            >
              <div>
                <div className="widget-subscribe-form-result"></div>
                <form
                  className="widget-subscribe-form2"
                  action="include/subscribe.php"
                  method="post"
                  // style="max-width: 400px; margin-top: 130px;"
                >
                  <input
                    type="email"
                    id="widget-subscribe-form2-email"
                    name="widget-subscribe-form-email"
                    className="form-control form-control-lg not-dark required email"
                    placeholder="Enter your Email"
                  />
                  <button
                    className="button button-rounded button-border button-light ms-0 inlin"
                    type="submit"
                    // style="margin-top:20px;"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          <section
            id="section-about"
            className="page-section section center mb-0 dark bg-section-1"
            // style={{
            //   background:"url('/images/sections/1.jpg') no-repeat center center",
            //   backgroundSize: "cover",
            // }}
          >
            <div className="container clearfix">
              <div className="row">
                <div
                  className="col-lg-6 offset-lg-5"
                  style={{ background: "rgb(255 255 255 / 15%)" }}
                >
                  <div className="heading-block border-bottom-0">
                    <span className="before-heading color ">{t("his.12")}</span>
                    <h3>{t("hist.13")}</h3>
                  </div>

                  <div className="mx-auto center row">
                    <div className="col-lg-12">
                      <p className="text-start">
                        {t("histo.14")}
                        <br />
                        <br />
                        {/* <img src={image} alt="Signature" /> */}
                      </p>
                    </div>
                    {/* <div className="col-lg-6">
                      <p className="text-start">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium dolor nam repudiandae perspiciatis
                        unde, reprehenderit culpa maxime laborum, deleniti error
                        repellendus doloribus delectus hic, voluptate incidunt
                        sunt dicta maxime laborum placeat optio quidem totam
                        impedit ipsum! Id dignissimos iste doloribus sequi
                        excepturi reiciendis saepe quaerat, tenetur distinctio
                        minima nostrum sit. Placeat doloribus accusantium eius,
                        eveniet quia sequi.
                        <br />
                        <br />
                        <img src={image} alt="Signature" />
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section
            id="section-services"
            className="page-section section dark bg-section-2"
            // style="background: url('demos/cafe/images/sections/2.jpg') no-repeat center center; background-size: cover"
          > */}
          {/* <div className="container clearfix">
              <div className="heading-block text-center border-bottom-0">
                <span className="before-heading color">Best of the Best</span>
                <h3>Our Services</h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                  possimus iste eius eos repellendus id officiis itaque ipsum,
                  fuga aut.
                </span>
              </div>

              <div className="row topmargin-lg clearfix">
                <div className="col-md-4">
                  <div className="feature-box text-center media-box">
                    <div className="fbox-media">
                      <img
                        src={IconOne}
                        className="mx-auto"
                        alt="Image 1"
                        // style="width: auto;"
                      />
                    </div>
                    <div className="fbox-content">
                      <h3 className="color body-font">
                        Why choose Us.
                        <span className="subtitle body-font">
                          Because we are Reliable.
                        </span>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi rem, facilis nobis voluptatum est
                        voluptatem accusamus molestiae eaque perspiciatis
                        mollitia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-box text-center media-box">
                    <div className="fbox-media">
                      <img
                        src={IconTwo}
                        className="mx-auto"
                        alt="Image 2"
                        // style="width: auto;"
                      />
                    </div>
                    <div className="fbox-content">
                      <h3 className="color body-font">
                        Our Mission.
                        <span className="subtitle body-font">
                          To Redefine your Brand.
                        </span>
                      </h3>
                      <p>
                        Quos, non, esse eligendi ab accusantium voluptatem.
                        Maxime eligendi beatae, atque tempora ullam. Vitae
                        delectus quia, consequuntur rerum molestias quo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="feature-box text-center media-box">
                    <div className="fbox-media">
                      <img
                        src={IconThree}
                        className="mx-auto"
                        alt="Image 3"
                        // style="width: auto;"
                      />
                    </div>
                    <div className="fbox-content">
                      <h3 className="color body-font">
                        What we Do.
                        <span className="subtitle body-font">
                          Make our Customers Happy.
                        </span>
                      </h3>
                      <p>
                        Porro repellat vero sapiente amet vitae quibusdam
                        necessitatibus consectetur, labore totam. Accusamus
                        perspiciatis asperiores labore esse ab accusantium.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
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
              <div className="mad-col itee">
                <div className="mad-menu-card">
                  <div className="mad-menu-border"></div>
                  <a href="#" className="mad-card-img with-overlay">
                    <img src={five} alt="" className="cofee_img" />
                  </a>
                  <div className="mad-card-text">
                    {/* <h2>{t("tea.76")}</h2> */}
                    <Link to="/UserMenu" className="mad-read-more">
                      {t("vmenu.77")}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mad-col itee">
                <div className="mad-menu-card">
                  <div className="mad-menu-border"></div>
                  <a href="#" className="mad-card-img with-overlay">
                    <img src={six} alt="" className="cofee_img" />
                  </a>
                  <div className="mad-card-text">
                    {/* <h2>{t("smoking.78")}</h2> */}
                    <Link to="/Store" className="mad-read-more">
                      {t("storing.79")}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mad-col itee">
                <div className="mad-menu-card">
                  <div className="mad-menu-border"></div>
                  <a href="#" className="mad-card-img with-overlay">
                    <img
                      src={seven}
                      alt=""
                      style={{ maxHeight: "80vh", objectFit: "contain" }}
                    />
                  </a>
                  <div className="mad-card-text">
                    {/* <h2>{t("bars.80")}</h2> */}
                    <Link to="/ourSpeciality" className="mad-read-more">
                      {t("specilities.81")}
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="mad-col">
                <div className="mad-menu-card">
                  <div className="mad-menu-border"></div>
                  <a href="#" className="mad-card-img with-overlay">
                    <img src={Shake} alt="" />
                  </a>
                  <div className="mad-card-text">
                    <h2>Dessert</h2>
                    <Link to="/UserMenu" className="mad-read-more">
                      View Menu
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="video-wrap">
            <div
              className="video-overlay"
              // style="background: rgba(0,0,0,0.20);"
            ></div>
          </div>
          {/* </section> */}

          {/* <section
            id="section-testimonials"
            className="page-section section dark bg-section-3"
            // style="background: url('demos/cafe/images/sections/8.jpg') no-repeat center center; background-size: cover; padding: 100px 0;"
          > */}
          {/* <div className="container clearfix">
              <div className="row clearfix">
                <div className="col-lg-5">
                  <div className="heading-block border-bottom-0 topmargin-lg">
                    <span className="before-heading color">
                      Happy Customers
                    </span>
                    <h3>
                      <i className="icon-line2-star"></i> Reviews
                    </h3>
                  </div>
                  <div
                    className="fslider restaurant-reviews"
                    data-arrows="false"
                    data-animation="slide"
                  >
                    <div className="flexslider">
                      <div className="slider-wrap">
                        <div className="slide">
                          <p className="lead">
                            "Globalization fairness non-partisan visionary,
                            institutions Aga Khan resolve. Results
                            public-private partnerships, international
                            development elevate scalable."
                          </p>
                          <span className="text-uppercase ls1">
                            <strong>John Doe</strong>,<br /> New York Magazine
                          </span>
                          <br />
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star-half-full"></i>
                        </div>
                        <div className="slide">
                          <p className="lead">
                            "Medicine; experience in the field climate change
                            achieve voice public-private partnerships process
                            our ambitions. Sanitation."
                          </p>
                          <span className="text-uppercase ls1">
                            <strong>Mary Jane</strong>,<br /> Chicago News
                          </span>
                          <br />
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star-half-full"></i>{" "}
                          <i className="color icon-star-empty"></i>
                        </div>
                        <div className="slide">
                          <p className="lead">
                            "Healthcare forward-thinking public service, social
                            innovation making progress. Arab Spring social
                            analysis, equality treatment, diversification."
                          </p>
                          <span className="text-uppercase ls1">
                            <strong>Luis Frank</strong>,<br /> France
                          </span>
                          <br />
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star3"></i>{" "}
                          <i className="color icon-star-empty"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="heading-block border-bottom-0 topmargin-lg">
                    <span className="before-heading color">Experience</span>
                    <h3>Gallery</h3>
                  </div>
                  <div
                    className="masonry-thumbs grid-container grid-5"
                    data-big="4,5"
                    data-lightbox="gallery"
                  >
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/1.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GalleryOne} alt="Gallery Thumb 1" />
                    </a>
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/2.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GalleryTwo} alt="Gallery Thumb 2" />
                    </a>
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/3.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GalleryThree} alt="Gallery Thumb 3" />
                    </a>
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/4.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GalleryFour} alt="Gallery Thumb 4" />
                    </a>
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/5.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GalleryFive} alt="Gallery Thumb 5" />
                    </a>
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/6.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GallerySix} alt="Gallery Thumb 6" />
                    </a>
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/7.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GallerySeven} alt="Gallery Thumb 7" />
                    </a>
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/9.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GalleryEight} alt="Gallery Thumb 9" />
                    </a>
                    <a
                      className="grid-item"
                      href="demos/cafe/images/gallery/10.jpg"
                      data-lightbox="gallery-item"
                    >
                      <img src={GalleryTen} alt="Gallery Thumb 10" />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          {/* </section> */}
          {/* 
          <section
            id="section-menu"
            className="page-section section dark bg-section-4"
          // style="background: url('demos/cafe/images/sections/4.jpg') no-repeat center center; background-size: cover;"
          >
            <div className="container clearfix">
              <div className="heading-block border-bottom-0">
                <span className="before-heading color">Indulgence</span>
                <h3>
                  <i className="icon-food2"></i> Menu
                </h3>
              </div>

              <div className="row clearfix">
                <div className="col-lg-6">
                  <div className="food-menu row clearfix">
                    <div className="col-lg-9">
                      <div className="menu-list">
                        <span>Croque-monsieur</span>
                        <h5>Grilled ham and cheese sandwich</h5>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="menu-price">
                        <h3>$8.90</h3>
                      </div>
                    </div>
                  </div>

                  <div className="food-menu row clearfix">
                    <div className="col-lg-9">
                      <div className="menu-list">
                        <span>Deluxe Burger</span>
                        <h5>Grass-fed beef served with fries</h5>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="menu-price">
                        <h3>$15.90</h3>
                      </div>
                    </div>
                  </div>

                  <div className="food-menu row clearfix">
                    <div className="col-lg-9">
                      <div className="menu-list">
                        <span>lasagne alla bolognese</span>
                        <h5>Our classNameic Lasagne</h5>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="menu-price">
                        <h3>$11.30</h3>
                      </div>
                    </div>
                  </div>

                  <div className="food-menu row clearfix">
                    <div className="col-lg-9">
                      <div className="menu-list">
                        <span>Italian Pizza</span>
                        <h5>Pizza Lagrotas Nanos</h5>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="menu-price">
                        <h3>$12.10</h3>
                      </div>
                    </div>
                  </div>

                  <div className="food-menu row clearfix">
                    <div className="col-lg-9">
                      <div className="menu-list">
                        <span>Cold Coffee</span>
                        <h5>Hot Signature Choclate</h5>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="menu-price">
                        <h3>$12.10</h3>
                      </div>
                    </div>
                  </div>
                  <div data-lightbox="gallery">
                    <a
                      href="demos/cafe/images/menu/2.jpg"
                      className="d-none"
                      data-lightbox="gallery-item"
                    ></a>
                  </div>

                  <Link
                    to="/UserMenu"
                    className="btnn btn-big btn-mobile-center"
                  >
                    <span className="texture"></span>
                    <span> View Full Menu</span>
                  </Link>
                </div>
              </div>
            </div>
          </section> */}

          <section
            id="section-contact"
            className="page-section section dark m-0 bg-section-5"
            // style="background: url('demos/cafe/images/sections/7.jpg') no-repeat center center; background-size: cover;"
          >
            <div className="container clearfix">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="heading-block border-bottom-0">
                    <span className="before-heading color bg_black">
                      {/* Connect with Us */}
                      {t("rea.15")}
                    </span>
                    {/* <h3>Get In Touch</h3> */}
                    <h3> {t("reac.16")}</h3>
                  </div>

                  <div className="row">
                    {/* <div className="col-lg-6 center">
                      <p className="text-start text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium dolor nam repudiandae perspiciatis.
                      </p>
                    </div>
                    <div className="col-lg-6 center">
                      <p className="text-start text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Praesentium dolor nam.
                      </p>
                    </div> */}
                    <div className="col-lg-12">
                      <div className="form-widget">
                        <div className="form-result"></div>

                        <form
                          className="mb-0 row"
                          id="template-contactform"
                          name="template-contactform"
                          action="include/form.php"
                          method="post"
                        >
                          <div className="form-process">
                            <div className="css3-spinner">
                              <div className="css3-spinner-scaler"></div>
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <input
                              type="text"
                              id="template-contactform-name"
                              name="template-contactform-name"
                              value={name}
                              onChange={(e) => {
                                handleChangename2(e);
                              }}
                              className="sm-form-control required"
                              placeholder="Full Name*"
                            />
                          </div>

                          <div className="col-lg-12">
                            <input
                              type="email"
                              id="template-contactform-email"
                              name="template-contactform-email"
                              value={mail}
                              onChange={(e) => {
                                handleChangeemail3(e);
                              }}
                              className="required email sm-form-control"
                              placeholder="Email Address*"
                            />
                          </div>

                          <div className="col-lg-12">
                            <textarea
                              className="required sm-form-control"
                              id="template-contactform-message"
                              name="template-contactform-message"
                              rows="6"
                              cols="30"
                              onChange={(e) => {
                                handleChangemessage4(e);
                              }}
                              value={message}
                              placeholder="Message*"
                            ></textarea>
                          </div>

                          <div className="col-lg-12 d-none">
                            <input
                              type="text"
                              id="template-contactform-botcheck"
                              name="template-contactform-botcheck"
                              value=""
                              className="sm-form-control"
                            />
                          </div>

                          <div className="col-lg-12 justify-content-end d-flex">
                            <button
                              className="btnn btn-big  btn-mobile-center"
                              type="submit"
                              id="template-contactform-submit"
                              name="template-contactform-submit"
                              value="submit"
                              onClick={(e) => {
                                sendEmail(e);
                              }}
                            >
                              {t("send.17")}
                            </button>
                          </div>

                          <input
                            type="hidden"
                            name="prefix"
                            value="template-contactform-"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <FooterOne />
    </div>
  );
}

export default Home;
