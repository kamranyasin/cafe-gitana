import React, { useContext } from "react";
// import Header from "../Components/Navbar";
import "./cart.css";
import { Empty } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import { ContextApi } from "../ContextApi/ContextApi";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import Header from "../Components/Header/header";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import FooterOne from "../Components/Footer/footerOne";
import { ImBin } from "react-icons/im";
import { useState } from "react";
import { image_url } from "../config/index";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
const Checkout = (props) => {
  const { t, i18n } = useTranslation();
  const [count, setcount] = useState(1);
  const contextType = useContext(ContextApi);

  // let total = 0;
  // for (let key in contextType.storeItems) {
  //   total = parseFloat(contextType.storeItems[key].calculategst) + total;
  // }
  // const [subTotal, setSubTotal] = useState(total);

  // console.log(total);
  // contextType.chartTotal = total;
  console.log("Store", contextType.storeItems);
  console.log("total", contextType.chartTotal);

  // const increament = () => {
  //   let cout = count;
  //   cout = cout + 1;
  //   let newTotal = 0;
  //   newTotal = subTotal + total;
  //   setcount(cout);
  //   console.log(newTotal);
  //   setSubTotal(newTotal);
  // };
  // const decrement = () => {
  //   let cout = count;
  //   let newTotal = 0;
  //   if (cout > 0) {
  //     cout = cout - 1;

  //     newTotal = subTotal - total;
  //     setSubTotal(newTotal);
  //   }
  //   if (cout === 0) {
  //     setSubTotal(0.0);
  //   }
  //   setcount(cout);
  // };
  return (
    <div>
      <Header />
      {/* <div className="container-fluid height">
        <div className="cart">
          <div className="cart-header">
            <span className="cart-header-text">Image</span>{" "}
            <span className="cart-header-text">price</span>{" "}
          </div>
          <Divider style={{ backgroundColor: "white" }} />
          <div className="cart-content-wrapper">
            {contextType.storeItems.length == 0 ? (
              <Empty className="cart-empty" />
            ) : (
              <div>
                {contextType.storeItems.map((item, index) => {
                  return (
                    <div className="cart-content">
                      <span>
                        <img
                          className="cart-content-img"
                          src={"http://3.12.140.217/api/" + item?.image}
                        />
                      </span>
                      <span className="cart-content-text">{item.name}</span>
                      <span className="cart-content-text">${item.price}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <Divider style={{ backgroundColor: "white" }} />
        <div>
          <span className="cart-header-text">Total=</span>
          <span className="cart-total">${total}</span>
        </div>
        <div className="cart-buttons" style={{ paddingBottom: "20px" }}>
          <Link to="/store">
            {" "}
            <span className="cart-continue-btn">Continue Shopping</span>
          </Link>
          <Link to="/checkout">
            <span className="cart-checkout-btn">Checkout</span>
          </Link>
        </div>
      </div> */}
      <div>
        <div
          className="mad-breadcrumb with-bg cart-bg"
          data-bg-image-src="images/1920x400_bg3.jpg"
        >
          <div className="container">
            {/* <nav className="mad-breadcrumb-path">
              <span>
                <Link to="/">{t("Nav.3")}</Link>
              </span>{" "}
              / <span>{t("car.53")}</span>
            </nav> */}
            <h1 className="mad-page-title">{t("car.53")} </h1>
          </div>
        </div>
        {/* <!--================ End of Breadcrumb ================--> */}
        <div className="mad-content no-pd">
          <div className="container">
            <div className="mad-section mad-section--stretched mad-colorizer--scheme-">
              <div className="mad-colorizer-bg-color">
                <div className="with-svg-item">
                  <img src="images/mud4.png" alt="" />
                </div>
              </div>
              <div className="content-element-15">
                {/* <!--================ Horizontal Table ================--> */}
                <div className="mad-table-wrap shop-cart-form style-2">
                  <table className="mad-table--responsive-md">
                    <thead>
                      <tr className="bg-color-grey">
                        <th>{t("image.55")}</th>

                        <th>{t("images.56")}</th>
                        <th>{t("imagess.57")}</th>
                        <th>{t("imagesss.58")}</th>
                        {/* <th>Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {contextType.storeItems.length == 0 ? (
                        <div>
                          <Empty
                            className="no-data"
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                          />
                        </div>
                      ) : (
                        <div style={{ width: "100%", display: "contents" }}>
                          {contextType.storeItems.map((item, index) => {
                            return (
                              <tr className="mad-product-item">
                                <td>
                                  <img
                                    className="cart-img"
                                    src={image_url + item?.image}
                                  />
                                </td>
                                <td data-cell-title="Product">
                                  <div className="mad-products mad-product-small">
                                    <div className="mad-col">
                                      {/* <!-- Product --> */}
                                      {/* <div className="mad-product">
                                        <a
                                          href="#"
                                          className="mad-product-image"
                                        ></a> */}
                                      {/* <!-- product-info --> */}
                                      {/* <div className="mad-product-description"> */}
                                      <h6 className="mad-product-title">
                                        <a href="#">{item?.name}</a>
                                      </h6>
                                      {/* <p>
                                        Colossal crabmeat, asparagus with
                                        bearnaise sauce
                                      </p> */}
                                      {/* </div> */}
                                      {/* <!--/ product-info --> */}
                                      {/* </div> */}
                                      {/* <!-- End of Product --> */}
                                    </div>
                                  </div>
                                </td>
                                <td data-cell-title="Price">
                                  <span className="mad-product-price">
                                    {item.price} $
                                  </span>
                                </td>
                                {/* <td data-cell-title="Quantity">
                        <div className="quantity">
                          <input type="text" value="1" readonly="" />
                          <button type="button" className="qty-plus">
                            <AiOutlinePlus />
                          </button>
                          <button type="button" className="qty-minus">
                            <AiOutlineMinus />
                          </button>
                        </div>
                      </td> */}
                                <td data-cell-title="Quantity">
                                  <div className="quantity">
                                    <div
                                      type="text"
                                      value={count}
                                      readonly=""
                                    />
                                    <button type="button" className="qty-plus">
                                      <AiOutlinePlus
                                        onClick={() =>
                                          contextType.countUpdation(index)
                                        }
                                      />
                                    </button>
                                    <div>{item.count}</div>
                                    <button type="button" className="qty-minus">
                                      <AiOutlineMinus
                                        onClick={() =>
                                          contextType.decrementUpdation(index)
                                        }
                                      />
                                    </button>
                                  </div>
                                </td>
                                {/* <td className="shopping-cart-full">
                                  <button>
                                    <ImBin color="#bf3030" size={25} />
                                  </button>
                                </td> */}
                              </tr>
                            );
                          })}
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* <div className="cart-footer  mt-1rem">
                  <div>
                    <p style={{ fontSize: "23px", marginBottom: "0px" }}>
                      GST:
                      <span style={{ color: "#b42727" }}>
                        {contextType.gst.toFixed(2)} $
                      </span>
                    </p>
                  </div>
                  <div></div>
                </div> */}
                {/* <div className="cart-footer  mt-1rem">
                  <div>
                    <p style={{ fontSize: "23px", marginBottom: "0px" }}>
                      QST:
                      <span style={{ color: "#b42727" }}>
                        {contextType.qst.toFixed(2)} $
                      </span>
                    </p>
                  </div>
                  <div></div>
                </div> */}
                {contextType.storeItems.length !== 0 ? (
                  <div className="cart-footer  mt-1rem">
                    <div className="cart-total">
                      <p style={{ fontSize: "23px", marginBottom: "0px" }}>
                        {t("gst.59")}{" "}
                        <span style={{ color: "#b42727", marginLeft: "11px" }}>
                          ${contextType.gst.toFixed(2)}
                        </span>
                      </p>
                      <p style={{ fontSize: "23px", marginBottom: "0px" }}>
                        {t("qst.60")}
                        <span style={{ color: "#b42727", marginLeft: "11px" }}>
                          ${contextType.qst.toFixed(2)}
                        </span>
                      </p>
                      {t("tot.61")}{" "}
                      <span className="cart-total-color">
                        $ {contextType.subTotal.toFixed(2)}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        flexDirection: "column",
                      }}
                    >
                      {" "}
                      <Link to="/checkout">
                        {" "}
                        <div className="btnn ">{t("checkout.54")}</div>
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <FooterOne />
      </div>
    </div>
  );
};

export default Checkout;
