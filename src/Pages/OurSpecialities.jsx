import React, { useState, useEffect } from "react";
// import Header from "../Components/Navbar";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { image_url } from "../config/index";
import Beer from "../Asserts/BEER.jpg";
import SALEP from "../Asserts/SALEP.jpg";
import Coffee from "../Asserts/TURKISHCOFFEE.jpg";
import Cocktail from "../Asserts/COCKTAIL.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Special4 from "../Asserts/special-4.jpg";
import Special5 from "../Asserts/special-5.jpg";
import Special6 from "../Asserts/special-6.jpg";
import Special7 from "../Asserts/special-7.jpg";
import Special8 from "../Asserts/special-8.jpg";
import axiosInstance from "../axios-Instance";
import Redsheesa from "../Asserts/blueshisha.jpg";
import Bluesheesa from "../Asserts/redshisha.jpg";
import Yellowsheesa from "../Asserts/yellowshisha.jpg";
import Header from "../Components/Header/header";
import FooterOne from "../Components/Footer/footerOne";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
function OurSpecialities(props) {
  const { t, i18n } = useTranslation();
  const [value, setvalue] = useState({
    items: [],
  });
  const [values, setvalues] = useState([]);
  const [even, seteven] = useState([]);
  useEffect(() => {
    console.log(value.items);
    axiosInstance
      .get("ourSpeciality/getAll")
      .then((res) => {
        setvalue({ items: res.data.item });
        console.log("molvi", res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    let i = 0;
    let y = 0;
    let newArrays = [];
    for (let key in values) {
      y = i * 2;
      if (key == y) {
        newArrays.push(values[y]);
        console.log("values===>", values[y]);
      }
      i++;

      console.log(values[key]);
    }

    Aos.init({ duration: 1000 });

    let arr = values;
    console.log(arr);
    let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
      y = i * 2;
      arr[y] ? newArr.push(arr[y]) : newArr.push(0);
      console.log("values===>", arr[y]);

      seteven({ even: newArr });
    }
    console.log("newArr", newArr);

    values.map((item, index) => {
      console.log("item", item);
      console.log("index", index);
    });
  }, []);
  console.log("bhjuuiuisa", values);
  console.log(even);
  return (
    <div>
      <Header />
      {/* <Header />
      <div classNameNameName="container-fluid  height-auto mobile-view">
        <div className="row text-center ">
          <h2 className="mtb--40">Our Speciality</h2>
        </div>
        <div className="container">
          <div className="row">
            {value.items.map((item, index) => {
              return (
                <div>
                  {index % 2 == 0 ? (
                    <div className="row mtb--40   height-60">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="parent">
                          <div className="child">
                            <h3 className="Speciality-heading">
                              {t(item.title)}
                            </h3>
                            <p
                              data-aos="fade-right"
                              className="Speciality-text"
                            >
                              {t(item.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center">
                        <div className="parent">
                          <div className="child">
                            <div data-aos="fade-left" className="Card">
                              <img
                                src={"http://3.12.140.217/api/" + item.image}
                                className="Speciality-img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="row mtb--40 reverse  height-60">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="parent">
                          <div className="child">
                            <h3 className="Speciality-heading">
                              {t(item.title)}
                            </h3>
                            <p data-aos="fade-left" className="Speciality-text">
                              {t(item.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                        <div className="parent">
                          <div className="child">
                            <div data-aos="fade-right" className="Card">
                              <img
                                src={"http://3.12.140.217/api/" + item.image}
                                className="Speciality-img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <div
        className="mad-breadcrumb with-bg our-specialites"
        data-bg-image-src="images/1920x400_bg3.jpg"
      >
        <div className="container">
          {/* <nav className="mad-breadcrumb-path">
            <span>
              <Link to="/">{t("Nav.3")}</Link>
            </span>{" "}
            / <span>{t("Navsss.6")}</span>
          </nav> */}
          <h1 className="mad-page-title">
            <span className="bg_black">{t("Navsss.6")}</span>
          </h1>
          {/* <p
            className="mad-text-color-6 mad-text-big"
            style={{ color: "white" }}
          >
            {t("come.86")}
          </p> */}
        </div>
      </div>
      {/* <!--================ End of Breadcrumb ================--> */}
      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section mad-section--stretched mad-colorizer--scheme-">
            <div className="mad-colorizer-bg-color">
              <div className="with-svg-item">
                <img src="images/837x297_bgimg1.jpg" alt="" />
              </div>
            </div>
            <div className="mad-title-wrap align-center">
              <h2>{t("Navsss.6")}</h2>
              {/* <p className="mad-text-color-6 mad-text-big">
                {t("ours.25")} <br /> {t("ourss.26")}
              </p> */}
            </div>
            <div className="mad-content no-pd">
              <div className="container">
                <div className="mad-section mad-section--stretched mad-colorizer--scheme-">
                  {/* <div className="mad-colorizer-bg-color">
                    <div className="with-svg-item">
                      <img src="images/mud4.png" alt="" />
                    </div>
                  </div> */}
                  {/* <div className="mad-gallery col-size-3">
                    <div className="mad-gallery-item">
                      <a href="images/448x448_img7.jpg" data-fancybox="gallery">
                        <img src={Special4} alt="" />
                      </a>
                    </div>
                    <div className="mad-gallery-item">
                      <a href="images/448x448_img8.jpg" data-fancybox="gallery">
                        <img src={Special5} alt="" />
                      </a>
                    </div>
                    <div className="mad-gallery-item">
                      <a href="images/448x448_img9.jpg" data-fancybox="gallery">
                        <img src={Special6} alt="" />
                      </a>
                    </div>
                    <div className="mad-gallery-item">
                      <a
                        href="images/448x448_img10.jpg"
                        data-fancybox="gallery"
                      >
                        <img src={Special7} alt="" />
                      </a>
                    </div>
                    <div className="mad-gallery-item">
                      <a
                        href="images/448x448_img11.jpg"
                        data-fancybox="gallery"
                      >
                        <img src={Special8} alt="" />
                      </a>
                    </div>
                    <div className="mad-gallery-item">
                      <a
                        href="images/448x448_img12.jpg"
                        data-fancybox="gallery"
                      >
                        <img src={Yellowsheesa} alt="" />
                      </a>
                    </div>
                    <div className="mad-gallery-item">
                      <a href="images/448x448_img2.jpg" data-fancybox="gallery">
                        <img src={Bluesheesa} alt="" />
                      </a>
                    </div>
                    <div className="mad-gallery-item">
                      <a
                        href="images/448x448_img13.jpg"
                        data-fancybox="gallery"
                      >
                        <img src={SALEP} alt="" />
                      </a>
                    </div>
                    <div className="mad-gallery-item">
                      <a
                        href="images/448x448_img14.jpg"
                        data-fancybox="gallery"
                      >
                        <img src={Redsheesa} alt="" />
                      </a>
                    </div>
                  </div> */}

                  <div className="mad-gallery col-size-3 jus_center">
                    {value.items.map((item, index) => {
                      console.log("images not shown  in");
                      return (
                        <div className="row malik">
                          {index % 2 == 0 ? (
                            <div className="mad-gallery-item ">
                              <div>
                                <a
                                  target="_blank"
                                  href={image_url + item.image}
                                  data-fancybox="gallery"
                                >
                                  <img
                                    className="our-specialites-img "
                                    src={image_url + item.image}
                                  />
                                </a>
                              </div>
                            </div>
                          ) : (
                            <div className="mad-gallery-item special_align">
                              <div>
                                <h3 className="title_special">{item.title}</h3>
                                <p className="description_special">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          )}
                          {index % 2 == 0 ? (
                            <div className="mad-gallery-item special_align">
                              <div>
                                <h3 className="title_special">{item.title}</h3>
                                <p className="description_special">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="mad-gallery-item ">
                              <div>
                                <a
                                  target="_blank"
                                  href={image_url + item.image}
                                  data-fancybox="gallery"
                                >
                                  <img
                                    className="our-specialites-img "
                                    src={image_url + item.image}
                                  />
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {/* <a
                    target="_blank"
                    href="https://www.amazon.ca/s?me=A1D3K4SNB9JGLM&fbclid=IwAR3TMvlUGF5VrCRtBU-bzU3Hz2tzpY-UPK8Tc3-kwZTrrHEDm_7dozZxq5A&marketplaceID=A2EUQ1WTGCTBG2  "
                  >
                    <div className="col-lg-12 justify-content-center d-flex">
                      <button
                        className="btnn btn-big  btn-mobile-center"
                        type="submit"
                        id="template-contactform-submit"
                        name="template-contactform-submit"
                        value="submit"
                      >
                        {t("amazon.89")}
                      </button>
                    </div>
                  </a> */}
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

export default OurSpecialities;
