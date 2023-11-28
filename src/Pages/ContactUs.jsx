import React, { useState, useEffect } from "react";
// import Header from "../Components/Navbar";
import { Spin } from "antd";
import ContactForm from "../Components/Contactform";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Bounce from "react-reveal/Bounce";
import { Input } from "antd";
import axiosInstance from "../axios-Instance";
import Header from "../Components/Header/header";
import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import FooterOne from "../Components/Footer/footerOne";
import axios from "axios";
function Contactus(props) {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const delay = 3;
  const [values, setvalues] = useState({
    emailAddress: "",
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
      <Header />
      <div
        className="mad-breadcrumb with-bg bg-contact-us"
        data-bg-image-src="images/1920x400_bg3.jpg"
      >
        <div className="container">
          {/* <nav className="mad-breadcrumb-path">
            <span>
              <Link to="/">{t("Nav.3")}</Link>
            </span>{" "}
            / <span>{t("contact.27")}</span>
          </nav> */}
          <h1 className="mad-page-title">{t("contact.27")}</h1>
        </div>
      </div>
      {/* <!--================ End of Breadcrumb ================--> */}
      <div className="mad-content mad-content--no-pt">
        <div className="container">
          <div className="mad-section">
            <div className="content-element-lg">
              <div className="row vr-size-2">
                <div className="col-xl-12">
                  <div className="content-element-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37625.68474723171!2d-73.55712370495071!3d45.49909141307971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bb4c2f8d97d%3A0xb466e4e4283ff7bf!2sCaf%C3%A9%20Gitana!5e0!3m2!1sen!2sca!4v1614913084214!5m2!1sen!2sca"
                      className="mad-gmap size-2"
                      loading="lazy"
                    ></iframe>
                  </div>

                  <div className="row">
                    <div className="col-sm-6 mobile-text-center justify-center">
                      <h4>{t("loc.28")}</h4>
                      <ul className="mad-our-info size-2  mobile-text-center ">
                        <li>
                          <a
                            target="_blank"
                            href="https://www.google.com/maps/dir//Caf%C3%A9+Gitana+2080+R.+Saint-Denis+Montr%C3%A9al,+QC+H2X+3K7/@45.5163404,-73.5665166,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4cc91bb4c2f8d97d:0xb466e4e4283ff7bf!2m2!1d-73.5665166!2d45.5163404"
                          >
                            <i className="material-icons">{t("loca.29")}</i>
                          </a>
                          <span>
                            {t("locat.30")}
                            <br />
                            {t("locati.31")}
                            <br />
                            {t("locatio.32")}
                            {/* <a href="#" className="mad-dir mad-link">
                              {t("location.33")}
                            </a> */}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 justify-center">
                      <h4>{t("contact.27")}</h4>
                      <div className="content-element-2">
                        <ul className="mad-our-info size-2">
                          <li>
                            <a href="tel:514-218-0090">
                              <i className="material-icons">phone</i>
                            </a>
                            <span>+514-218-0090</span>
                          </li>
                          <li>
                            <a href="mailto:info@cafegitana.com">
                              <i className="material-icons">mail_outline</i>
                            </a>
                            <a className="mad-link color-2">{t("mail.34")}</a>
                          </li>
                        </ul>
                      </div>
                      <div className="mad-social-icons light-back style-2 size-2">
                        <ul>
                          <li>
                            <a
                              href="https://www.facebook.com/LeCafeGitana"
                              target="blank"
                            >
                              <FiFacebook />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/channel/UCnnX23dEgELNCVFgy02FndA"
                              target="blank"
                            >
                              <FiYoutube />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/cafegitana/?fbclid=IwAR010tHa8YVYHARyMoakzGa0ETWfn8gdomnyGnDxtH0tG8Ku1MpJleXqnP8"
                              target="blank"
                            >
                              <FiInstagram />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-4">
                  <div className="mad-tt-wrap">
                    <div className="mad-tt-element">
                      <h4 className="mad-title">{t("op.37")}</h4>
                      <div className="mad-timetable mad-vr-list">
                        <ul>
                          <li>
                            <div className="mad-tt-title">{t("ope.38")}</div>
                            {t("open.39")}{t("opens.40")}
                          </li>
                          <li>
                            <div className="mad-tt-title">{t("din.41")}</div>
                            {t("dine.42")}<br />
                            {t("diner.43")}
                          </li>
                          <li>
                            <div className="mad-tt-title">{t("hap.44")}</div>
                            {t("happ.45")}<br />
                            {t("happy.46")}
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <h2 className="mad-section-title align-center">{t("we.35")}</h2>
          <p className="mad-text-big align-center">{t("wes.36")}</p>
          <div className="row justify-content-center">
            <div className="col-lg-6">
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
      {/* <Header />
      <div className="container-fluid flex-direction height-auto align">
        <div className="row mt--50   width  plr--100">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="contact-box">
              <ContactForm />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="map mt--30-mb">
                {" "}
                {show ? (
                  <div className="centered width--100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37625.68474723171!2d-73.55712370495071!3d45.49909141307971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bb4c2f8d97d%3A0xb466e4e4283ff7bf!2sCaf%C3%A9%20Gitana!5e0!3m2!1sen!2sca!4v1614913084214!5m2!1sen!2sca"
                      className="video"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                ) : (
                  <div className="example centered width--100">
                    <Spin />
                  </div>
                )}
              </div>
            </div>
            <div className="row text-center">
              <div></div>
              <Bounce top cascade>
                <div>
                  <h4 className="contact-text">
                    You May call us at <AiOutlinePhone className="email-icon" />
                  </h4>
                  <h4 className="contact-text">
                    <a href="tel:514-218-0090">514-218-0090</a>
                  </h4>
                  <h4 className="contact-text">OR </h4>{" "}
                  <h4 className="contact-text">
                    Email us <AiOutlineMail className="email-icon" />
                  </h4>
                  <h4>
                    <a
                      className="context-text"
                      href="mailto:info@cafegitana.com"
                    >
                      info@cafegitana.com
                    </a>
                  </h4>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
        <div className="Home-footer">
          <div className="news-letter-box">
            <div className="row">
              <div className="news-letter text-center">
                <p>Subscribe to our Newsletter for some amazing discounts</p>
                <form>
                  <div className="row">
                    <Input
                      value={values.emailAddress}
                      name="emailAddress"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      prefix={<AiOutlineMail color="#862222" />}
                      placeholder=" Your Email Address"
                    />
                  </div>
                </form>
                <div className="row centered">
                  <button className="subscribe-btn" onClick={subscribe}>
                    Subscribe
                  </button>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <FooterOne />
    </div>
  );
}

export default Contactus;
