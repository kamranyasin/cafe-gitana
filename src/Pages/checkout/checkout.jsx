import React, { useState, useEffect, useContext } from "react";
// import Header from "../../Components/Navbar";
import Header from "../../Components/Header/header";
import FooterOne from "../../Components/Footer/footerOne";

// Css
import "./checkout.css";
import { Modal } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import { ImPaypal } from "react-icons/im";
import { FaStripeS } from "react-icons/fa";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Radio } from "antd";
import { toast } from "react-toastify";
import { ContextApi } from "../../ContextApi/ContextApi";
import StripeCheckout from "react-stripe-checkout";
import axiosInstance from "../../axios-Instance";
import Paypal from "../checkout/Paypal";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import StorePickup from "./StorePickup";
import { AiFillShopping } from "react-icons/ai";
toast.configure();
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

const Checkout = (props) => {
  const [isModalVisible, setShowModel] = useState(false);
  const [paypalCheckOut, setPaypalCheckout] = useState(false);
  const [open, setOpen] = useState(false);
  const [Loading, setLoading] = useState(false);

  const contextType = useContext(ContextApi);
  const [values, setvalues] = useState({
    name: "Shahrukh khan",
    price: 30,
    email: "",
    phoneNumber: "",
    address: "",
    description: "",

    images: ["A", "B", "C"],
    ImagesData: [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
    ],
  });

  useEffect(() => {
    let ImagesData = [
      {
        original: "https://picsum.photos/id/1018/1000/600/",
        thumbnail: "https://picsum.photos/id/1018/250/150/",
      },
    ];
    let imagesObj = { ...values.images };
    console.log("===", Object.keys(imagesObj));
    let Arr = [];
    // let object={};
    let obj = {
      original: "",
      thumbnail: "",
    };
    // for (let key in imagesObj) {
    //   obj=imagesObj[key];
    // }
    values.images.forEach((val) => (obj.original = val));
    Arr.push(obj);
    console.log("ImagesData", ImagesData);
    console.log("imagesFinal", Arr);
  }, []);

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleToken = (token, addresses) => {
    console.log("token", token);
    console.log("addresses", addresses);
    let totalPrice = contextType.subTotal;
    let storeItems = contextType.storeItems;
    const body = {
      token,
      totalPrice,
      storeItems,
    };
    axiosInstance
      .post("userorder/checkout", body)
      .then((response) => {
        console.log("Response", response.data);
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { t, i18n } = useTranslation();
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target.value);
    console.log(values.name);
  };

  const showModal = () => {
    // setShowModel(true);
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);

    console.log("off model ===123");
  };

  const handleCancel = () => {
    // setShowModel(false);
    setOpen(false);
    console.log("off model ===");
  };

  console.log("openopenopenopen======>", open);
  return (
    <div>
      <Header />
      <div
        className="mad-breadcrumb with-bg checkout-bg"
        data-bg-image-src="images/1920x400_bg3.jpg"
      >
        <div className="container">
          {/* <nav className="mad-breadcrumb-path">
            <span>
              <Link to="/">{t("Nav.3")}</Link>
            </span>{" "}
            / <span>{t("checkout.54")}</span>
          </nav> */}
          <h1 className="mad-page-title">{t("checkout.54")} </h1>
        </div>
      </div>
      {/* <!--================ End of Breadcrumb ================--> */}
      <div className="container mtb-8rem">
        <div className="flex flex-wrap justify-content-center">
          <div className="payment-card d-flex justify-content-center align-items-center">
            <div>
              <div className="text-center mtb-10">
                <span> {t("stripe.84")}</span>
              </div>
              <div className="text-center mtb-10">
                <FaStripeS color="#6b6bcb" size={60} />
              </div>

              <div className="text-center mtb-10 strip-button ">
                <StripeCheckout
                  stripeKey="pk_test_51I7MxrImK1h8PcwnbtRyHBfGKSDYjDV4pVpdjnrWhAH2pzfpwxLGt2vQSMzcE0zxeKHGWaaCSfmgV31DJQEYExKJ00Gu4g3a98"
                  // stripeKey="pk_test_51KWGcuIxVny6yD3rtIdIH6MIbMxXcVV0ddJ9ZLXPbPjsT2RqDtgj9m10FVjKg1h6UiIs6BYmzAt5LXw4KDVDXc8200NBSEggRc"
                  token={handleToken}
                  amount={contextType.chartTotal * 100}
                  name="Payment"
                  billingAddress
                  shippingAddress
                />
              </div>
            </div>
          </div>
          <div className="payment-card  d-flex justify-content-center align-items-center">
            <div className="text-center mtb-10">
              <div className="text-center mtb-10">
                <span> Paypal</span>
              </div>
              <div className="text-center mtb-10">
                <ImPaypal color="white" size={60} />
                <img src={Paypal} />
              </div>
              {paypalCheckOut ? (
                <Paypal />
              ) : (
                <button
                  className="text-center mtb-10 btnn"
                  onClick={() => setPaypalCheckout(true)}
                >
                  {t("paypal.85")}
                </button>
              )}
            </div>
          </div>
          <div className="payment-card  d-flex justify-content-center align-items-center">
            <div className="text-center mtb-10">
              <div className="text-center mtb-10">
                <span> In Store Pickup</span>
              </div>
              <div className="text-center mtb-10 popupMenu" onClick={showModal}>
                <AiFillShopping color="white" size="40px" />
              </div>
              <StorePickup
                // handleCancel={handleCancel}
                handleCancel={handleCancel}
                Loading={Loading}
                okModal={handleOk}
                isModalShow={open}
              />
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
      {/* <Header />
      <div className="container-fluid  height bg">
        <div className="row  text-center">
          <span className="checkout-heading">Checkout</span>
        </div>
        <div className="container ">
          <div className="flex">
            <div className="payment-card d-flex justify-content-center align-items-center">
              <div>
                <div className="text-center mtb-10">
                  <span> Stripe</span>
                </div>
                <div className="text-center mtb-10">
                  <FaStripeS color="#6b6bcb" size={60} />
                </div>
             
                <div className="text-center mtb-10 strip-button">
                  <StripeCheckout
                    stripeKey="pk_test_51IjIuLDLUefkE4zhkOlc8nNMmu0jSQQgf4ZUIeqpTKBRMz7Ry3RpKDs3GgF4FSumbo0ehQ2UkQpJuoSPAoGzfRlJ00x4MB3fLv"
                    token={handleToken}
                    amount={contextType.chartTotal * 100}
                    name="Payment"
                    billingAddress
                    shippingAddress
                  />
                </div>
              </div>
            </div>
            <div className="payment-card  d-flex justify-content-center align-items-center">
              <div className="text-center mtb-10">
                <div className="text-center mtb-10">
                  <span> Paypal</span>
                </div>
                <div className="text-center mtb-10">
                  <ImPaypal color="white" size={60} />
                  <img src={Paypal} />
                </div>
                {paypalCheckOut ? (
                  <Paypal />
                ) : (
                  <button
                    className="text-center mtb-10 paypal-btn"
                    onClick={() => setPaypalCheckout(true)}
                  >
                    Paypal
                  </button>
                )}
              </div>
            </div> */}
      {/* <div className="card-checkout">
            <div className="row">
              <form noValidate autoComplete="on">
                <div className="row mtb-10">
                  <div className="col-4 contact-name-center">
                    <h5 className="contact-h5">Name</h5>
                  </div>
                  <div className="col-8  text-center">
                    <TextField
                      id="outlined-basic"
                      name="name"
                      value={values.name}
                      onChange={(e) => handleChange(e)}
                      variant="outlined"
                      className="text-field" //assign the width as your requirement
                    />
                  </div>
                </div>
                <div className="row mtb-10">
                  <div className="col-4 contact-name-center">
                    <h5 className="contact-h5">Price</h5>
                  </div>
                  <div className="col-8 text-center">
                    <TextField
                      id="outlined-basic"
                      name="price"
                      value={values.price}
                      onChange={(e) => handleChange(e)}
                      variant="outlined"
                      className="text-field" //assign the width as your requirement
                    />
                  </div>
                </div>
                <div className="row mtb-10">
                  <div className="col-4 contact-name-center">
                    <h5 className="contact-h5">Phone Number</h5>
                  </div>
                  <div className="col-8 text-center">
                    <TextField
                      id="outlined-basic"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={(e) => handleChange(e)}
                      variant="outlined"
                      className="text-field" //assign the width as your requirement
                    />
                  </div>
                </div>
                <div className="row mtb-10">
                  <div className="col-4 contact-name-center">
                    <h5 className="contact-h5">Email Address</h5>
                  </div>
                  <div className="col-8 text-center">
                    <TextField
                      id="outlined-basic"
                      name="email"
                      value={values.email}
                      onChange={(e) => handleChange(e)}
                      variant="outlined"
                      className="text-field" //assign the width as your requirement
                    />
                  </div>
                </div>
                <div className="row mtb-10">
                  <div className="col-4 contact-name-center">
                    <h5 className="contact-h5">Address</h5>
                  </div>
                  <div className="col-8 text-center">
                    <TextField
                      id="outlined-basic"
                      name="address"
                      value={values.address}
                      onChange={(e) => handleChange(e)}
                      variant="outlined"
                      className="text-field" //assign the width as your requirement
                    />
                  </div>
                </div>
                <div className="row mtb-30">
                  <div className="col-6 contact-name-center  centered">
                    <h5 className="contact-h5">Total:$0</h5>
                  </div>
                  <div className="col-6 contact-name-center centered">
                    <span className="checkout-btn" onClick={handleOk}>
                      Pay now
                    </span>
                  </div>
                </div>
              </form>
              <Modal
                footer={false}
                title="Pay Now"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="flex">
                  <div className="payment-card">
                    <div className="text-center mtb-10">
                      <span> Stripe</span>
                    </div>
                    <div className="text-center mtb-10">
                      <FaStripeS color="#6b6bcb" size={60} />
                    </div>
                    {/* <div className="text-center mtb-10">
                      <Radio color="primary" />
                    </div> */}
      {/* <div className="text-center mtb-10">
                      <StripeCheckout
                        stripeKey="pk_test_51IjIuLDLUefkE4zhkOlc8nNMmu0jSQQgf4ZUIeqpTKBRMz7Ry3RpKDs3GgF4FSumbo0ehQ2UkQpJuoSPAoGzfRlJ00x4MB3fLv"
                        token={handleToken}
                        amount={values.price * 100}
                        name="Payment"
                        billingAddress
                        shippingAddress
                      />
                    </div>
                  </div>
                  <div className="payment-card">
                    <div className="text-center mtb-10">
                      <span> Paypal</span>
                    </div>
                    <div className="text-center mtb-10">
                      {/* <ImPaypal color="white" size={60} /> */}
      {/* <img src={Paypal} />
                    </div>
                    <div className="text-center mtb-10">
                      <Radio color="primary" />
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>  */}
      {/* </div>
        </div>
      </div> */}

      {/* <div
        className="mad-breadcrumb with-bg checkout-bg"
        data-bg-image-src="images/1920x400_bg3.jpg"
      >
        <div className="container"> */}
      {/* <nav className="mad-breadcrumb-path">
            <span>
              <Link to="/">{t("Nav.3")}</Link>
            </span>{" "}
            / <span>{t("checkout.54")}</span>
          </nav> */}
      {/* <h1 className="mad-page-title">{t("checkout.54")} </h1>
        </div>
      </div> */}
      {/* <!--================ End of Breadcrumb ================--> */}
      {/* <div className="container mtb-8rem">
        <div className="flex flex-wrap justify-content-center">
          <div className="payment-card d-flex justify-content-center align-items-center">
            <div>
              <div className="text-center mtb-10">
                <span> {t("stripe.84")}</span>
              </div>
              <div className="text-center mtb-10">
                <FaStripeS color="#6b6bcb" size={60} />
              </div>

              <div className="text-center mtb-10 strip-button ">
                <StripeCheckout
                  stripeKey="pk_test_51IjIuLDLUefkE4zhkOlc8nNMmu0jSQQgf4ZUIeqpTKBRMz7Ry3RpKDs3GgF4FSumbo0ehQ2UkQpJuoSPAoGzfRlJ00x4MB3fLv"
                  token={handleToken}
                  amount={contextType.chartTotal * 100}
                  name="Payment"
                  billingAddress
                  shippingAddress
                />
              </div>
            </div>
          </div>
          <div className="payment-card  d-flex justify-content-center align-items-center">
            <div className="text-center mtb-10">
              <div className="text-center mtb-10">
                <span> Paypal</span>
              </div>
              <div className="text-center mtb-10">
                <ImPaypal color="white" size={60} />
                <img src={Paypal} />
              </div>
              {paypalCheckOut ? (
                <Paypal />
              ) : (
                <button
                  className="text-center mtb-10 btnn"
                  onClick={() => setPaypalCheckout(true)}
                >
                  {t("paypal.85")}
                </button>
              )}
            </div>
          </div>
          <div className="payment-card  d-flex justify-content-center align-items-center">
            <div className="text-center mtb-10">
              <div className="text-center mtb-10">
                <span> In Store Pickup</span>
              </div>
              <div className="text-center mtb-10" onClick={showModal } >
                <StorePickup  cancelModal={handleCancel} okModal={handleOk} ShowModal={showModal} />
                <AiFillShopping color="white" size="40px"  />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <FooterOne /> */}
    </div>
  );
};

export default Checkout;
