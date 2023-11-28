import React, { useState } from "react";
import { FiFacebook, FiYoutube, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios-Instance";
import { useTranslation } from "react-i18next";
function FooterOne(props) {
  const { t, i18n } = useTranslation();
  const [mail, setMail] = useState();


  const sendEmail = async (e) => {
    console.log("ali raza", e)

    await axiosInstance.post("/Register/sendemailFooter", { email: mail, to: " infoletter@cafegitana.com" }).then((res) => {
      console.log("helo", res)
    }).catch((err) => console.log(err))
  }

  const handleChangeemails = (e) => {
    console.log(e.target.name, e.target.value)
    setMail(e.target.value)
  }
  return (
    <div>
      <footer id="mad-footer" className="mad-footer">
        {/* <!--================ Footer row ================--> */}
        <div className="mad-footer-main">
          <div className="container">
            <div className="content-element-8">
              <div className="row vr-size-1">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                  {/* <!--================ Widget ================--> */}
                  <section className="mad-widget">
                    <h5 className="mad-widget-title">{t("foot.48")}</h5>
                    <p>{t("foots.49")}</p>
                    <form className="mad-newsletter-form one-line">
                      <input
                        type="email"
                        name="email"
                        className="email-field"
                        placeholder="Enter Your Email Address"
                        value={mail}
                        onChange={(e) => { handleChangeemails(e) }}
                      />

                      <button onClick={(e) => { sendEmail(e) }} type="submit" className="btn btn-big icon-btn">
                        <i className="material-icons">mail_outline</i>
                      </button>

                    </form>
                  </section>
                  {/* <!--================ End of Widget ================--> */}
                </div>
                <div className="col-lg-4">
                  {/* <!--================ Widget ================--> */}
                  <section className="mad-widget">
                    <div className="content-element-3">
                      <h5 className="mad-widget-title">{t("stay.50")}</h5>
                      <p>{t("social.51")}</p>
                    </div>
                    <div className="mad-social-icons style-3 size-big">
                      <ul className="justify-content-center">
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
                  </section>
                  {/* <!--================ End of Widget ================--> */}
                </div>
                <div className="col-lg-2"></div>
                {/* <div className="col-lg-4">
                  {/* <!--================ Widget ================--> */}
                {/* <section className="mad-widget">
                    <h5 className="mad-widget-title">Our Awards</h5>
                    <a href="#">
                      <img src="images/awards.png" alt="" />
                    </a>
                  </section> */}
                {/* <!--================ End of Widget ================--> 
                </div> */}
              </div>
            </div>
            {/* <!--================ Widget ================--> */}
            <section className="mad-widget">
              <div className="mad-hr-list">
                <ul className="justify-content-center">
                  <li>
                    <Link to="/" className="mad-link">
                      {t("Nav.3")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" className="mad-link">
                      {t("Navs.4")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/UserMenu" className="mad-link">
                      {t("Navss.5")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/store" className="mad-link">
                      {t("Navssss.7")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" className="mad-link">
                      {t("Navsssss.8")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourSpeciality" className="mad-link">
                      {t("lity.52")}
                    </Link>
                  </li>
                  <li>
                  <Link to="/termpolicy" className="mad-link">

                      {t("termscond.119")}
                    </Link>
                  </li>
                </ul>
              </div>
              <p className="copyrights">
                {t("right.47")}
              </p>
            </section>
            {/* <!--================ End of Widget ================--> */}
          </div>
        </div>
        {/* <!--================ End of Footer row ================--> */}
      </footer>
      {/* <!--================ End of Footer ================--> */}
    </div>
  );
}

export default FooterOne;
