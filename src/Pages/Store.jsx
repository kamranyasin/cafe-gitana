import React, { useState, useEffect, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import axiosInstance from "../axios-Instance";

import { notification } from "antd";
// Css
import "./store.css";
import UnderConstruction from "../Asserts/underconstruction.png";
//Context Api
import { ContextApi } from "../ContextApi/ContextApi";
import { Radio } from "antd";
import context from "react-bootstrap/esm/AccordionContext";
import Header from "../Components/Header/header";
import FooterOne from "../Components/Footer/footerOne";
import Image from "../Asserts/special-4.jpg";
import Image2 from "../Asserts/special-5.jpg";

import Image3 from "../Asserts/special-6.jpg";

import Image4 from "../Asserts/special-7.jpg";
import Image5 from "../Asserts/special-8.jpg";
import Image6 from "../Asserts/SALEP.jpg";
import Image7 from "../Asserts/greentea.jpg";
import Image8 from "../Asserts/lighter.png";
import { FiShoppingCart } from "react-icons/fi";
import { image_url } from "../config/index";
import { Link, useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
function Store(props) {
  const location = useLocation();
  console.log(location);
  const [values, setValues] = React.useState({
    value: 0,
    value1: "small",
    value2: "medium",
    value3: "large",
    selectedprice: "",
  });
  const [value, setvalue] = useState({
    items: [],
  });
  const [radioItems, setradioItems] = useState([]);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValues(e.target.value);
    console.log(e.target.value);
    console.log(values);
  };
  const contextType = useContext(ContextApi);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    console.log(value.items);
    axiosInstance
      .get("store/storegetall")
      .then((res) => {
        setvalue({ items: res.data.item });
        console.log(res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleClick = (item, type) => {
    console.log(item);
    contextType.Cart.push(item);
    console.log(contextType);
    notification[type]({
      message: "Item Added to Cart",
    });
  };
  // const handlesize = (event, item) => {
  //   if (value) {
  //     let obj = value.items.find((f) => f._id == item._id);
  //     radioItems.push({ ...obj, selectedPrice: event.target.value });
  //     setradioItems(radioItems);
  //   }

  //   // setValues({ selectedprice: event.target.value });
  //   console.log("size flag clicked", event.target.value);
  //   console.log("radioitems", radioItems);
  // };

  const handlesize = (event, item) => {
    // this.setState({ [event.target.name]: event.target.value });
    if (value) {
      let obj = value.items.find((f) => f._id == item._id);
      let radioObj = radioItems.find((f) => f._id == item._id);
      console.log("radioObj", radioObj);
      if (radioObj && obj._id === radioObj._id) {
        let spilcedArr = radioItems.filter((f) => f._id !== item._id);
        console.log("spilcedArr", spilcedArr);
        spilcedArr.push({ ...radioObj, selectedprice: event.target.value });
        setradioItems(spilcedArr);
      } else {
        radioItems.push({ ...obj, selectedprice: event.target.value });
        setradioItems(radioItems);
      }
    }
  };
  // contextType.Cart.push(radioItems);
  console.log("radioITtems", radioItems);
  // useEffect(() => {}, [contextType.Cart]);
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify({ ...contextType.Cart }));

    let getItem = localStorage.getItem("Cart");
    let obj = JSON.parse(getItem);

    console.log("getItem", getItem);
    console.log("getItemObject", obj);
    console.log("getItemArray", Object.values(obj));

    // contextType.handleClick(Object.values(obj));
    contextType.CartArr = Object.values(obj);
    console.log(contextType.Cart);

    console.log({ ...contextType.Cart });
  }, [contextType.Cart]);
  console.log(value.items);
  return (
    <div>
      <Header />
      {/* <Header />
      <div className="container-fluid  height-auto">
        <span className="text-center store-page-heading">Store</span>
        <div className="row ">
          {value?.items.map((item, key) => {
            return (
              <div className="col-xl-3 col-lg-4 col-md-3 col-sm-12 col-xs-12 center mb--40">
                <div className="store-card">
                  <img
                    src={"http://3.12.140.217/api/" + item?.image}
                    className="store-img"
                  />

                  <div className="store-card-heading">
                    <span>{item?.name}</span>
                  </div> */}
      {/* 
                  <Radio.Group
                    // defaultValue={item.smallPrice}
                    className="size-justify-around"
                    onChange={(event) => {
                      handlesize(event, item);
                    }}
                  >
                    <Radio value={item.smallPrice}>
                      <span className="size-store">Small</span>
                    </Radio>
                    <Radio value={item.mediumPrice}>
                      <span className="size-store">Medium</span>
                    </Radio>
                    <Radio value={item.largePrice}>
                      <span className="size-store">Large</span>
                    </Radio>
                  </Radio.Group> */}
      {/* <div className="row">
                    <div className="col-6 store-card-row">
                      {item.stock === "Available" ? (
                        <div className="stockGreen">{item?.stock}</div>
                      ) : (
                        <div className="stockRed">{item?.stock}</div>
                      )}
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                      <div className="item-name-store">${item.price}</div>
                    </div>
                  </div>
                  <div className="size-justify-around">
            
                  </div>

                  <div className="row">
                    <div className="col-6"></div>
                    <div className="col-12">
                      <div className="store-card-button">
                        {item.stock === "Available" ? (
                          <button
                            className="store-button"
                            onClick={(e) =>
                              contextType.handleClick(
                                item,
                                radioItems,
                                "success"
                              )
                            }
                            // onClick={(e) => handleClick(item, "success")}
                          >
                            Add To cart
                          </button>
                        ) : (
                          ""
                          // <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <!--================ Breadcrumb ================--> */}
      <div
        className="mad-breadcrumb with-bg bg-store"
        data-bg-image-src="images/1920x400_bg3.jpg"
      >
        <div className="container">
          {/* <nav className="mad-breadcrumb-path">
            <span>
              <Link to="/">{t("Nav.3")}</Link>
            </span>{" "}
            / <span>{t("Navssss.7")}</span>
          </nav> */}
          <h1 className="mad-page-title">
            <span className="bg_black">{t("Navssss.7")}</span>
          </h1>
        </div>
      </div>
      {/* <!--================ End of Breadcrumb ================--> */}
      <div class="mad-content no-pd">
        <div class="container">
          <div class="mad-section mad-section--stretched mad-colorizer--scheme-">
            <div class="mad-colorizer-bg-color">
              <div class="with-svg-item">
                <img src="images/mud4.png" alt="" />
              </div>
            </div>
            <div class="row">
              {value?.items?.map((item, key) => {
                return (
                  <div class="mad-products col-xl-4 col-md-4 col-sm-12 col-xs-12 mt-1rem">
                    <div class="mad-col">
                      {/* <!-- Product --> */}
                      <div class="mad-product">
                        <figure class="mad-product-image">
                          <a href="#">
                            <img
                              src={image_url + item?.image}
                              className="store-img"
                            />
                            {/* <img src={Image2} alt="" /> */}
                          </a>
                        </figure>
                        {/* <!-- product-desc --> */}
                        <div class="mad-product-description">
                          <h6 class="mad-product-title">
                            <a href="#" class="mad-link">
                              {item?.name}
                            </a>
                          </h6>
                          <span class="mad-product-info">
                            {t("price.82")}${item?.price}+{t("taxes.83")}
                          </span>
                          {/* <span class="mad-product-info">Gst:{item?.gst}%</span>

                          <span class="mad-product-info">Qst:{item?.qst}%</span> */}

                          <p>
                            {item.stock === "Available" ? (
                              <div className="stockGreen">{item?.stock}</div>
                            ) : (
                              <div className="stockRed">{item?.stock}</div>
                            )}
                          </p>
                        </div>
                        {/* <!--/ product-desc --> */}
                        <div class="mad-product-calc">
                          <span class="mad-product-price">
                            ${item?.price}+Taxes
                          </span>
                          <div class="mad-calc">
                            {/* <div class="quantity">
                          <input type="text" value="1" readonly="" />
                          <button type="button" class="qty-plus">
                            <i class="licon-plus"></i>
                          </button>
                          <button type="button" class="qty-minus">
                            <i class="licon-minus"></i>
                          </button>
                        </div> */}

                            {item.stock === "Available" ? (
                              <a
                                href="#"
                                class="btnn"
                                onClick={(e) =>
                                  contextType.handleClick(
                                    item,
                                    radioItems,
                                    "success"
                                  )
                                }
                              >
                                <FiShoppingCart />
                              </a>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      {/* <!-- End of Product --> */}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row mt-1rem">
              <a
                target="_blank"
                href="https://www.amazon.ca/s?me=A1D3K4SNB9JGLM&fbclid=IwAR3TMvlUGF5VrCRtBU-bzU3Hz2tzpY-UPK8Tc3-kwZTrrHEDm_7dozZxq5A&marketplaceID=A2EUQ1WTGCTBG2  "
              >
                <div className="col-lg-12 justify-content-end d-flex">
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
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </div>
  );
}

export default Store;
