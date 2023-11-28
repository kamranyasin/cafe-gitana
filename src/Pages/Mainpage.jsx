import React from "react";
import Cafename from "../Asserts/CafeName.png";
import Logo from "../Asserts/Logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
function Mainpage(props) {
  const { t, i18n } = useTranslation();
  // function handleClick(lang) {
  //   i18n.changeLanguage(lang);
  //   console.log(lang);
  // }

  const handleChange = async (e) => {
    console.log(e);
    //  await setLang(e);
    i18next.changeLanguage(e);
    // console.log("alli raza",e);
  };

  return (
    <div className="container-fluid bg column align auto-height-mobile">
      <div className="row">
        <img src={Cafename} alt="CafeName" className="cafe-name-home" />
      </div>
      <div className="row">
        <img src={Logo} alt="logo" className="logo-img-main" />
      </div>
      <div className="row">
        <h2 className="Main-heading">{t("Main.1")}</h2>
      </div>

      <div className="row">
        <h4 className="main-content">{t("Mains.2")}</h4>
      </div>

      <div className="row width mtb--40">
        <div className="col-12 ">
          <div className="centered-btn d-flex justify-content-around mt-10">
            <Link to="/home">
              <div onClick={() => handleChange("French")} className="btnn btn-big ">
                OUI{" "}
              </div>
            </Link>
            <Link to="/home">
              {" "}
              <div onClick={() => handleChange("English")} className="btnn btn-big ">
                YES{" "}
              </div>
            </Link>
          </div>
        </div>
        <div className="col-12">
          <div className="centered-btn  centered-btn d-flex justify-content-around  mt-10">
            <a href="https://www.google.com/" className="btnn btn-big ">
              Non{" "}
            </a>
            <a
              href="https://www.google.com/"
              className="btnn btn-big "
              style={{ paddingLeft: "2.8rem" }}
            >
              NO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
