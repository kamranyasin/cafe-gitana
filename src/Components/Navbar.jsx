import { Navbar } from "react-bootstrap";
import Cafename from "../Asserts/CafeName.png";
import Logo from "../Asserts/Logo.png";
import {
  RiFacebookCircleFill,
  RiYoutubeLine,
  RiInstagramLine,
} from "react-icons/ri";
import ListItem from "@material-ui/core/ListItem";
import React, { useState, useEffect, useContext } from "react";
import Header from "../Components/Navbar";
import ReactPlayer from "react-player";
import { Spin } from "antd";
import { Modal, Button } from "antd";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import axiosInstance from "../axios-Instance";
import Badge from "@material-ui/core/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";
//Context Api
import { ContextApi } from "../ContextApi/ContextApi";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
function Headers(props) {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentvalue, setcurrentvalue] = useState(history.location.pathname);
  var route = "";
  const showModal = () => {
    setIsModalVisible(true);
    setcurrentvalue("/menu");
  };
  const changeValue = (e) => {
    setcurrentvalue("/ourSpeciality");
    // history.push("/ourSpeciality");
    console.log("clicked");
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const classes = useStyles();
  console.log(history.location);
  useEffect(() => { }, [currentvalue]);

  const [values, setvalues] = useState({
    name: "",
    surName: "",
    phoneNumber: "",
    emailAddress: "",
    tableNumber: "",
    counter: 0,
  });

  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: [e.target.value] });
    console.log(e.target.value);
    console.log(values.emailAddress);
  };

  const submitQuery = async () => {
    let res = await axiosInstance
      .post("/menu/submit_query", {
        name: `${values.name}`,
        surname: `${values.surName}`,
        phone_number: `${values.phoneNumber}`,
        email_address: `${values.emailAddress}`,
        table_number: `${values.tableNumber}`,
      })
      .then((res) => {
        alert("Email sent!");
        setIsModalVisible(false);
      });
  };
  const contextType = useContext(ContextApi);
  useEffect(() => {
    setvalues({ counter: contextType.Cart.length });
  }, [contextType]);
  console.log("counter", contextType.counter);
  console.log(contextType.Cart?.length);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="header-padding">
        <Navbar.Brand href="#home">
          <Link to="/">
            {" "}
            <img src={Cafename} alt="CafeName" className="cafe-name" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="row header-row">
            <div className="col-3">
              <div className="logo-circle">
                <img src={Logo} alt="logo" className="logo-img" />
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-ms-12 col-xs-12">
                  <div className="space-equally">
                    <div>
                      <Link to="/home">
                        {currentvalue === "/home" ? (
                          <p className="active">{t("Nav.3")}</p>
                        ) : (
                          <p className="header-text">{t("Nav.3")}</p>
                        )}
                      </Link>
                    </div>
                    <a
                      onClick={() => {
                        setcurrentvalue("/aboutus");
                        history.push("/aboutus");
                      }}
                    >
                      {currentvalue === "/aboutus" ? (
                        <p className="active">{t("Navs.4")}</p>
                      ) : (
                        <p className="header-text">{t("Navs.4")}</p>
                      )}
                    </a>
                    {/* <div>
                      <a onClick={showModal}>
                        {currentvalue === "/menu" ? (
                          <p className="active">menu</p>
                        ) : (
                          <p className="header-text">menu</p>
                        )}
                      </a>
                    </div> */}

                    <a
                      onClick={() => {
                        history.push("/Usermenu");
                        setcurrentvalue("/Usermenu");
                      }}
                    >
                      {currentvalue === "/Usermenu" ? (
                        <p className="active">{t("Navss.5")}</p>
                      ) : (
                        <p className="header-text">{t("Navss.5")}</p>
                      )}
                    </a>

                    <a
                      onClick={() => {
                        history.push("/ourSpeciality");
                        setcurrentvalue("/ourSpeciality");
                      }}
                    >
                      {currentvalue === "/ourSpeciality" ? (
                        <p className="active">{t("Navsss.6")}</p>
                      ) : (
                        <p className="header-text">{t("Navsss.6")}</p>
                      )}
                    </a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-ms-12 col-xs-12">
                  <div className="space-equally">
                    <a
                      onClick={() => {
                        history.push("/store");
                        setcurrentvalue("/store");
                      }}
                    >
                      {currentvalue === "/store" ? (
                        <p className="active">{t("Navssss.7")}</p>
                      ) : (
                        <p className="header-text">{t("Navssss.7")}</p>
                      )}
                    </a>
                    <a
                      onClick={() => {
                        setcurrentvalue("/contactUs");
                        history.push("/contactUs");
                      }}
                    >
                      {/* <Link to="/contactUs" > */}{" "}
                      {currentvalue === "/contactUs" ? (
                        <p className="active">{t("Navsssss.8")}</p>
                      ) : (
                        <p className="header-text">{t("Navsssss.8")}</p>
                      )}
                      {/* </Link> */}
                    </a>
                    {/* <a
                      onClick={() => {
                        history.push("/onlinestore");
                        setcurrentvalue("/onlinestore");
                      }}
                    >
                      {currentvalue === "/onlinestore" ? (
                        <p className="active">Online Store</p>
                      ) : (
                        <p className="header-text">Online Store</p>
                      )}
                    </a> */}

                    <div>
                      <a
                        target="blank"
                        href="https://www.facebook.com/LeCafeGitana"
                      >
                        <RiFacebookCircleFill
                          color="white"
                          style={{ marginTop: "10px", fontSize: "21px" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="blank"
                        href=" https://www.youtube.com/channel/UCnnX23dEgELNCVFgy02FndA"
                      >
                        <RiYoutubeLine
                          color="white"
                          style={{ marginTop: "10px", fontSize: "21px" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="blank"
                        href="https://www.instagram.com/cafegitana/"
                      >
                        <RiInstagramLine
                          color="white"
                          style={{ marginTop: "10px", fontSize: "21px" }}
                        />
                      </a>
                    </div>
                    <div>
                      <Link to="/cart">
                        <Badge
                          badgeContent={contextType.storeItems.length}
                          color="secondary"
                        >
                          <AiOutlineShoppingCart
                            color="white"
                            style={{ marginTop: "10px", fontSize: "21px" }}
                          />
                        </Badge>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        footer={false}
        title="Menu"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Menu.1")}</h5>
              </div>
              <div className="col-8  text-center">
                <TextField
                  id="outlined-basic"
                  name="name"
                  value={values.name}
                  onChange={(e) => handleChange(e)}
                  label="Name"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Menu.2")}</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  name="surName"
                  value={values.surName}
                  onChange={(e) => handleChange(e)}
                  label="SurName"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Menu.3")}</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  name="phoneNumber"
                  value={values.phoneNumber}
                  onChange={(e) => handleChange(e)}
                  label="Phone Number"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Menu.4")}</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  name="emailAddress"
                  value={values.emailAddress}
                  onChange={(e) => handleChange(e)}
                  label="Email Address"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Menu.5")}</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  name="tableNumber"
                  value={values.tableNumber}
                  onChange={(e) => handleChange(e)}
                  label="Table Number"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
          </form>
          <div className="row  submit-btn-row">
            <Button
              className="submit-btn"
              onClick={submitQuery}
              style={{
                backgroundColor: "#862222",
                color: "white",
                borderRadius: "23px",
                fontFamily: "cursive",
                fontWeight: "600",
              }}
            >
              Submit
            </Button>
            {/*<Link to="/home">*/}
            {/*  <div className="submit-btn">Submit</div>*/}
            {/*</Link>*/}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Headers;
