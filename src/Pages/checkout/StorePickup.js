import React, { useState, useEffect, useRef, useContext } from "react";
import axiosInstance from "../../axios-Instance";
import { toast } from "react-toastify";

import { Modal, Button } from "antd";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import { useTranslation } from "react-i18next";
// import { DatePicker, TimePicker, Select, Space } from 'antd';
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { ContextApi } from "../../ContextApi/ContextApi";
import "../../index.css";
import "../../../src/style.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },

  boxBtnSubmitReturn: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  btnSubmit: {
    color: "white",
    textAlign: "center",

    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
    width: 150,

    borderRadius: 20,
    marginRight: 50,
    textAlign: "center",
    "&.hover": {
      backgroundColor: "green !important",
    },
  },
  btnReturn: {
    color: "white",
    textAlign: "center",

    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "black",
    width: 150,
    textAlign: "center",

    borderRadius: 20,
  },
}));

const StorePickup = ({ isModalShow, handleCancel, handleOk, Loading }) => {
  const [value, setValue] = useState(null);
  const contextType = useContext(ContextApi);
  const { t, i18n } = useTranslation();
  const [Inputvalue, setInputValue] = useState({
    fname: "",
    sirname: "",
    phoneNumber: "",
    datetime: "",
    emailAddress: "",
  });

  useEffect(() => {}, [Inputvalue]);

  console.log("allll---");

  const classes = useStyles();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue({ ...Inputvalue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("values", Inputvalue);
    let totalPrice = contextType.subTotal;
    let storeItems = contextType.storeItems;
    axiosInstance
      .post("storepickUp/add", {
        name: Inputvalue.fname,
        surName: Inputvalue.sirname,
        phoneNumber: Inputvalue.phoneNumber,
        emailaddress: Inputvalue.emailAddress,
        dateandTime: Inputvalue.datetime,
        totalPrice: totalPrice,
        storeItems: storeItems,
      })
      .then((response) => {
        console.log("Response", response.data);
        const { status } = response.data;
        console.log("Response:", response.data, status, "status");
        handleCancel();
        setInputValue({
          fname: "",
          sirname: "",
          phoneNumber: "",
          datetime: "",
          emailAddress: "",
        });
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

  console.log("props in store pickup");
  return (
    <div>
      <Modal
        footer={false}
        title="Menu"
        visible={isModalShow}
        // onOk={props.okModal}
        onCancel={handleCancel}
      >
        <div>
          <form className="root" noValidate autoComplete="off">
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">Name</h5>
              </div>
              <div className="col-8  text-center">
                <TextField
                  id="outlined-basic"
                  // label="Name"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                  value={Inputvalue.fname}
                  name="fname"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">SurName</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  // label="SurName"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                  value={Inputvalue.sirname}
                  name="sirname"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">Phone Number</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  // label="Phone Number"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                  value={Inputvalue.phoneNumber}
                  name="phoneNumber"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">Email Address</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  // label="Email Address"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                  value={Inputvalue.emailAddress}
                  name="emailAddress"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">Date and Time</h5>
              </div>
              <div className="col-8 text-center">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => (
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        {...props}
                        name="datetime"
                      />
                    )}
                    value={Inputvalue.datetime}
                    onChange={(newValue) => {
                      console.log("newValue", newValue);
                      setInputValue({ ...Inputvalue, datetime: newValue });
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className={classes.boxBtnSubmitReturn}>
              <div className={`row + ${classes.boxBtnReturn}`}>
                <Link to="/home">
                  <Button className={classes.btnReturn} onClick={handleCancel}>
                    Return
                  </Button>
                </Link>
              </div>
              <div
                className={`row + ${classes.boxBtnSubmit}`}
                loading={Loading}
                onClick={handleOk}
              >
                <Button className={classes.btnSubmit} onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>

            <div></div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default StorePickup;
