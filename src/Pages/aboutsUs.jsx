import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import "./aboutus.css";
import OkayIcon from "../imagess/steakbreak_svg_icons/okay.svg";
import EcoIcon from "../imagess/steakbreak_svg_icons/eco.svg";
import GrillIcon from "../imagess/steakbreak_svg_icons/eco.svg";
import PackageIcon from "../imagess/steakbreak_svg_icons/package.svg";
import CateringIcon from "../imagess/steakbreak_svg_icons/catering.svg";
import CapIcon from "../imagess/steakbreak_svg_icons/cap.svg";
import WineIcon from "../imagess/steakbreak_svg_icons/wine.svg";
import GiftIcon from "../imagess/steakbreak_svg_icons/gift_card.svg";
import Mud3 from "../imagess/mud3.png";
import About from "../imagess/about-us.jpg";
import Header from "../Components/Header/header";
import FooterOne from "../Components/Footer/footerOne";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
function AboutUs(props) {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {/* <Header />
      <div
        className="container-fluid justify-content-center height-auto
       plr-0 "
      >
        <div className="about-us-heading text-center about-us-cover">
          <span> About US</span>
          <span style={{ fontSize: "18px" }}> </span>
        </div>
        <div className="container">
          <div className="home-h2 line-1 anim-typewriter cursive mb-20">
            {t("about.1")}
          </div>
          <div className="home-h2 line-1 anim-typewriter cursive mb-20">
            {t("about.2")}
          </div>
          <div className="home-h2 line-1 anim-typewriter cursive mb-20">
            {t("about.3")}
          </div>
          <div className="home-h2 line-1 anim-typewriter cursive mb-20">
            {t("about.4")}
          </div>

          <div className="home-h2 line-1 anim-typewriter cursive mb-20">
            {t("about.5")}
          </div>
        </div>
      </div> */}
      <Header />
      <div
        className="mad-breadcrumb with-bg   about-us-bg"
        data-bg-image-src="images/1920x400_bg2.jpg"
      >
        <div className="container">
          {/* <nav className="mad-breadcrumb-path">
            <span>
              <Link to="/">{t("Nav.3")}</Link>
            </span>{" "}
            / <span>{t("Navs.4")}</span>
          </nav> */}
          <h1 className="mad-page-title">
            <span className="bg_black">{t("Navs.4")}</span>
          </h1>
        </div>
      </div>
      {/* <!--================ End of Breadcrumb ================--> */}
      <div className="mad-content no-pd">
        <div className="main-container">
          <div className="mad-section no-pb mad-section--stretched mad-colorizer--scheme-">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="content-element-9">
                  <h2 className="align-center">{t("sto.18")}</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <p className="mad-text-big mobile-text-center">
                        {t("about.19")}
                      </p>
                      <p className="mad-text-big mobile-text-center">
                        {t("abouts.20")}
                      </p>{" "}
                      <p className="mad-text-big mobile-text-center">
                        {t("aboutss.21")}
                      </p>
                      <p className="mad-text-big mobile-text-center">
                        {t("aboutsss.22")}
                      </p>
                      <p className="mad-text-big mobile-text-center">
                        {t("aboutssss.23")}
                      </p>
                    </div>
                    {/* <div className="col-md-6"></div> */}
                  </div>
                </div>
                {/* <div className="video_wrapper video_wrapper_full js-videoWrapper with-half-bg">
                  <iframe
                    className="videoIframe js-videoIframe"
                    allowfullscreen
                    onPlay={true}
                    onPlaying={true}
                    src="https://www.youtube.com/embed/XL9HJejC75w"
                  ></iframe> */}
                <div className="none-mobile">
                  <ReactPlayer
                    className="videoIframe js-videoIframe  mobile-video video"
                    // playing={true}
                    // loop={true}
                    width="100%"
                    height={700}
                    // className="video"
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 },
                      },
                    }}
                    url="https://www.youtube.com/watch?v=XL9HJejC75w"
                    // url="https://youtu.be/LTT4MYQqz4o"
                  />
                </div>
                <div className="none-web d-flex justify-content-center">
                  <ReactPlayer
                    className="videoIframe js-videoIframe  mobile-video video"
                    // playing={true}
                    // loop={true}
                    width={358}
                    height={250}
                    // className="video"
                    url="https://www.youtube.com/watch?v=XL9HJejC75w"
                    // url="https://www.youtube.com/watch?v-XL9HJejC75w"
                  />
                </div>

                {/* <button className="videoPoster js-videoPoster with-overlay"></button>
                  <span className="mad-section-texture">
                    <img
                      src="steakbreak_svg_icons/uneven_bg_2.svg"
                      alt=""
                      className="svg"
                    />
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <article
            data-bg-image-src="images/1920x999_bg1.jpg"
            className="mad-cta mad-section with-overlay mad-section--stretched mad-colorizer--scheme-light mad-colorizer--scheme- mad-colorizer--parallax coffee-shop-bg"
          >
            <div className=" align-center">
              <h2 className="mad-cta-title ">
                <span className="bg_black">{t("cnt.24")}</span>
              </h2>
              <div className="btn-set justify-content-center">
                <a href="#" className="btnn btn-big">
                  <span>{t("Navsssss.8")}</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <FooterOne />
    </div>
  );
}

export default AboutUs;
