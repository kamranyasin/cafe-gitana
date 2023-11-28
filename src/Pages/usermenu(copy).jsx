import React, { useEffect, useState } from "react";
import Header from "../Components/Navbar";
import AshtraY from "../Asserts/ashtraY.jpg";
import Beer from "../Asserts/BEER.jpg";
import BlueSheesa from "../Asserts/blueshisha.jpg";
import RedSheesa from "../Asserts/yellowshisha.jpg";
import { Checkbox } from "antd";
import "./usermenu.css";
import { Modal, Button } from "antd";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import axiosInstance from "../axios-Instance";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { image_url } from "../config/index";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
function UserMenu(props) {
  const { t, i18n } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [error, seterror] = useState(false);
  const [order, setorder] = useState([]);
  const [value, setvalue] = useState({
    items: [],
    checked: false,
    total: null,
  });

  const [menuvalues, menusetvalues] = useState({
    name: "",
    surName: "",
    phoneNumber: "",
    emailAddress: "",
    tableNumber: "",
    MenuAlert: null,
    total: 0,
    titleNames: "",
    tableArray: [
      "CG208001",
      "CG208002",
      "CG208003",
      "CG208004",
      "CG208005",
      "CG208006",
      "CG208007",
      "CG208008",
      "CG208009",
      "CG208010",
      "CG208011",
      "CG208012",
      "CG208013",
      "CG208014",
      "CG208015",
      "CG208016",
      "CG208017",
      "CG208018",
      "CG208019",
      "CG208020",
      "CG208021",
      "CG208022",
      "CG208023",
      "CG208024",
      "CG208025",
      "CG208026",
      "CG208027",
      "CG208028",
      "CG208029",
      "CG208030",
      "CG208031",
      "CG208032",
      "CG208033",
      "CG208034",
      "CG208034",
      "CG208035",
      "CG208036",
      "CG208037",
      "CG208038",
      "CG208039",
      "CG208040",
      "CG208041",
      "CG208042",
      "CG208043",
      "CG208044",
      "CG208045",
      "CG208046",
      "CG208047",
      "CG208048",
      "CG208049",
      "CG208050",
      "CG208051",
      "CG208052",
      "CG208053",
      "CG208054",
      "CG208055",
      "CG208056",
      "CG208057",
      "CG208058",
      "CG208059",
      "CG208060",
    ],
  });
  const handleChange = (e) => {
    menusetvalues({ ...menuvalues, [e.target.name]: e.target.value });
    console.log(e.target.value);
    console.log(menuvalues.tableNumber);
    // if (menuvalues.tableNumber === "") {
    //   seterror(false);
    // }
    console.log(menuvalues);
  };

  const handleOk = () => {
    setIsModalVisible(true);
  };
  const errorcancel = () => {
    seterror(false);
  };
  const errorOk = () => {
    seterror(false);
  };
  useEffect(() => {
    if (menuvalues.tableNumber === "") {
      seterror(false);
    }
  }, [menuvalues.tableNumber]);
  const checkTable = () => {
    for (let i = 0; i < menuvalues.tableArray.length; i++) {
      if (menuvalues.tableNumber === menuvalues.tableArray[i]) {
        setIsModalVisible(false);
      } else if (menuvalues.tableNumber !== menuvalues.tableArray) {
        seterror(true);
      }
    }
  };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  // let arr = [];
  const handleChecked = (event, item) => {
    setvalue({ ...value, [event.target.name]: event.target.checked });
    console.log(event.target.checked);

    if (event.target.checked === true) {
      console.log(item);
      console.log(order);
      order.push(item);
      setorder(order);
      let total = 0;
      let titles = "";
      for (let key in order) {
        total = parseFloat(order[key].price) + total;
        titles = order[key].title + titles;
        // menusetvalues((prev) => {
        //   return {
        //     total: prev.total + total,
        //   };
        // });
        menusetvalues({ ...menuvalues, total: total, titleNames: titles });
        console.log("total", total);
        console.log(titles);
        console.log("menutotal", menuvalues.total);
      }
    } else if (event.target.checked == false) {
      var del = order.filter((m) => m._id !== item._id);
      let titles = "";
      for (let key in del) {
        total = parseFloat(del[key].price) + total;
        titles = del[key].title + titles;
        console.log(del);
        // menusetvalues((prev) => {
        //   return {
        //     total: prev.total + total,
        //   };
        // });

        menusetvalues({ ...menuvalues, total: total, titleNames: titles });
        console.log("total", total);

        console.log("menutotal", menuvalues.total);
      }
      setorder(del);
      console.log(del);
    }
    console.log(order);
    console.log(order);
  };

  var total = 0;
  useEffect(() => {
    console.log("titles", menuvalues.name);
    console.log("menutotal", menuvalues.total);
  }, [menuvalues.total]);

  // Adding total Price Of Client order

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: menuvalues.name,
      surName: menuvalues.surName,
      phoneNumber: menuvalues.phoneNumber,
      tableNumber: menuvalues.tableNumber,
      email: menuvalues.emailAddress,
      order: order,
      total: menuvalues.total,
      titleNames: menuvalues.titleNames,
    };
    axiosInstance
      .post("/userorder/add", user)
      .then((res) => {
        // alert(res.data.message);
        menusetvalues({
          MenuAlert: {
            variant: "success",
            name: "",
            surName: "",

            message: res.data.message,
          },
        });
      })
      .catch((err, res) => {
        console.log(err);

        menusetvalues({
          MenuAlert: {
            variant: "danger",
            message: "Error Data not Added",
          },
        });
      });
  };

  useEffect(() => {
    console.log(value.items);
    axiosInstance
      .get("menuorder/getAll")
      .then((res) => {
        setvalue({ items: res.data.item });
        console.log(res.data.item);
        console.log(value.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Header />

      <div className="container-fluid  height-auto">
        <div className="alert-center">
          {menuvalues.MenuAlert !== null && (
            <Alert
              style={{
                vertical: "top",
                horizontal: "center",
                width: "400px",
                fontWeight: "500",
                marginTop: "20px",
                zIndex: "99",
                textTransform: "capitalize",
              }}
              variant={menuvalues.MenuAlert?.variant}
            >
              {menuvalues?.MenuAlert?.message}
            </Alert>
          )}
        </div>

        <div className="user-menu-heading-wrapper">
          <div className="userMenu-heading text-center">
            User Menu{" "}
            <div>
              Hi:<span className="name">{menuvalues.name}</span>
            </div>
            Table Number:
            <span className="table-number">{menuvalues.tableNumber}</span>{" "}
            <div>
              <button className="menu-button" onClick={handleSubmit}>
                order
              </button>
            </div>
          </div>{" "}
          <div className="menu-button-wrapper">
            <div className="menu-order-wrapper">
              <div className="row">
                <div className="bucket-heading-wrapper">
                  <span className="bucket-heading">Order Bucket</span>
                  <div>
                    <span className="contact-h5">Total:</span>
                    <span className="total">${menuvalues.total}</span>
                  </div>
                </div>
                <span className="order">
                  <div className="row">
                    {order?.map((item, index) => {
                      return (
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <div className="order">
                            {item.title}
                            {item.price}
                          </div>
                          <div>
                            <img
                              src={image_url + item.image}
                              className="order-img"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="Usermenu-Main">
          {/* <div>
                            <span className="contact-h5">Total:</span>
                            <span className="total">${menuvalues.total}</span>
                          </div> */}
          <div className="row">
            {value.items.map((item, index) => {
              return (
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                  <img
                    src={"http://3.12.140.217/api/" + item.image}
                    alt="bluesheesa"
                    className="img-usermenu"
                  />
                  <div className="order-checkbox">
                    {" "}
                    <Checkbox
                      value={item.title}
                      label={item.title}
                      size="large"
                      name={item.title}
                      onChange={(e) => handleChecked(e, item)}
                    >
                      <span className="item-name"> {item.title}</span>
                    </Checkbox>
                    <div className="item-name">price:${item.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        footer={false}
        title="Menu"
        visible={isModalVisible}
        onOk={handleOk}
      >
        <div className="alert-center">
          {error !== false && (
            <Alert
              style={{
                vertical: "top",
                horizontal: "center",
                width: "400px",
                fontWeight: "500",
                marginTop: "20px",
                zIndex: "99",
                textTransform: "capitalize",
              }}
              variant="danger"
            >
              Error No Table found
            </Alert>
          )}
          {/* <Modal
            title="Error"
            visible={error}
            onOk={errorOk}
            onCancel={errorcancel}
          >
            <h3 className="error"> Error No table Found</h3>
          </Modal> */}
        </div>

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
                  value={menuvalues.name}
                  onChange={(e) => handleChange(e)}
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
                  value={menuvalues.surName}
                  onChange={(e) => handleChange(e)}
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
                  value={menuvalues.phoneNumber}
                  onChange={(e) => handleChange(e)}
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
                  value={menuvalues.emailAddress}
                  onChange={(e) => handleChange(e)}
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
                  value={menuvalues.tableNumber}
                  onChange={(e) => handleChange(e)}
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
          </form>

          <div className=" submit-btn-row">
            <div>
              <Link to="/home">
                <Button
                  // className="submit-btn"

                  style={{
                    backgroundColor: "#862222",
                    color: "white",
                    borderRadius: "23px",
                    fontFamily: "cursive",
                    fontWeight: "600",
                  }}
                >
                  <IoIosArrowBack /> Home
                </Button>
              </Link>
            </div>
            <div>
              <Button
                // className="submit-btn"
                onClick={checkTable}
                style={{
                  backgroundColor: "#862222",
                  color: "white",
                  borderRadius: "23px",
                  fontFamily: "cursive",
                  fontWeight: "600",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Continue
              </Button>
              {/*<Link to="/home">*/}
              {/*  <div className="submit-btn">Submit</div>*/}
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UserMenu;
