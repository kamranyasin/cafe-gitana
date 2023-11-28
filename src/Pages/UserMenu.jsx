import React, { useEffect, useState } from "react";
// import Header from "../Components/Navbar";
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
import styled, { css } from "styled-components";
import TextArea from "antd/lib/input/TextArea";
import { Radio } from "antd";
import Header from "../Components/Header/header";
import FooterOne from "../Components/Footer/footerOne";
import ImageOne from "../Asserts/special-4.jpg";
import ImageTwo from "../Asserts/special-5.jpg";

import ImageThree from "../Asserts/special-6.jpg";

import ImageFourth from "../Asserts/special-7.jpg";

import ImageFive from "../Asserts/special-8.jpg";

import ImageSix from "../Asserts/SALEP.jpg";
import { data, map } from "jquery";
import { BiMinus, BiPlus } from "react-icons/bi";
import one from "../Asserts/11.jpg";
import two from "../Asserts/1.jpg";
import three from "../Asserts/2.jpg";
import four from "../Asserts/3.jpg";
import five from "../Asserts/4.jpg";
import six from "../Asserts/5.png";
import seven from "../Asserts/6.png";
import { BiArrowBack } from "react-icons/bi";
import { Select } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { useAlert } from "react-alert";

const imagesArray = [one, two, three, four, five, six, seven];
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
function UserMenu(props) {
  const alert = useAlert();
  const { Option } = Select;
  const { t, i18n } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [error, seterror] = useState(false);
  const [order, setOrder] = useState([]);
  const [bb, setBb] = useState([]);
  const [tables, setTables] = useState();
  const [radioItems, setRadioItems] = useState([]);
  const [check, setCheck] = useState(false);
  const [activeObj, setActiveObj] = useState();
  const [letter, setLetter] = useState();
  const [subMen, setSubMenu] = useState();
  const [type, SetType] = useState([]);
  const [itemSeke, setItemSeke] = useState([]);
  const [cartItem, setCartitem] = useState([]);
  const [showHide, setShowHide] = useState(false);
  const [errorfield, seterrorfield] = useState({
    nameerror: false,
    tableerror: false,
    emailerror: false,
  });
  const [tableErrorFlag, setableErrorFlag] = useState(false);
  const [value, setvalue] = useState({
    items: [],
    checked: false,
    total: null,
  });
  const [sidebae, setSidebae] = useState(false);
  const [size, setsize] = useState({
    small: "small",
    medium: "medium",
    large: "large",
  });
  const [active, setActive] = useState([]);
  const [mobile, setMobile] = useState(false);
  const data = (key) => {
    setShowHide(true);
    console.log(tables[key], "==================");
    let submenu = tables[key].reduce(function (acc, obj) {
      let key = obj.subMenu;
      (acc[key] ? acc[key] : (acc[key] = null || [])).push(obj);
      return acc;
    }, Object.create(null));
    setSubMenu(submenu);
  };
  const [menuvalues, menusetvalues] = useState({
    name: "",
    surName: "",
    phoneNumber: "",
    price: "",
    selectedPrice: "",
    emailAddress: "",
    tableNumber: "",
    MenuAlert: null,
    comments: "",
    total: 0,
    size: {},
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
      "",
    ],
  });
  const addItemSize = (index) => {
    let dumy = [...cartItem];
    dumy[index].noOfItem = cartItem[index].noOfItem + 1;
    console.log("plus", dumy[index].noOfItem);
    setCartitem(dumy);
    let totald = 0.0;
    totald =
      parseFloat(menuvalues.total) + parseFloat(dumy[index].selectedIprice);
    console.log(
      "totald",
      totald,
      "menuvalues.total",
      menuvalues.total,
      "dumy[index].selectedPrice",
      dumy[index]
    );
    menusetvalues({
      ...menuvalues,
      total: totald.toFixed(2),
    });
  };
  const minusItemSize = (index) => {
    let dumy = [...cartItem];
    if (cartItem[index].noOfItem > 1) {
      dumy[index].noOfItem = cartItem[index].noOfItem - 1;
      console.log("plus", dumy[index].noOfItem);
      setOrder(dumy);
      let totald = 0.0;
      totald =
        parseFloat(menuvalues.total) - parseFloat(dumy[index].selectedIprice);
      menusetvalues({
        ...menuvalues,
        total: totald.toFixed(2),
      });
    }
  };
  function truncate(source, size) {
    return source?.length > size ? source?.slice(0, size - 1) : source;
  }
  const handleChange = (e) => {
    if (e.target.name === "name" && e.target.value === "") {
      seterrorfield({ nameerror: true });
    } else if (e.target.name === "tableNumber" && e.target.value === "") {
      seterrorfield({ tableerror: true });
    } else {
      seterrorfield(false);
    }
    menusetvalues({ ...menuvalues, [e.target.name]: e.target.value });

    console.log(menuvalues);
  };
  const onChange = (e) => {
    setCheck(e.target.checked);
    console.log(`checked = ${e.target.checked}`);
  };
  const onChange1 = (e) => {
    setLetter(e.target.checked);
    console.log(`checked = ${e.target.checked}`);
  };

  const handleOk = () => {
    setIsModalVisible(true);
  };
  const deleteSelect = (index) => {
    let deletedItem = cartItem.filter((data, i) => i != index);
    setCartitem(deletedItem);
    console.log("deletedItem", deletedItem);
  };

  const handleCancel = () => {
    props.history.push("/home");
  };
  useEffect(() => {
    if (menuvalues.tableNumber === "") {
      seterror(false);
    }
  }, [menuvalues.tableNumber]);

  useEffect(() => {
    console.log(active);
  }, [active]);

  const checkTable = async () => {
    letter &&
      (await axiosInstance.post("/Register/newsLetter", {
        email: menuvalues.emailAddress,
        to: "muhammadsulamanmalik@gmail.com",
      }));

    for (let i = 0; i < menuvalues.tableArray.length; i++) {
      if (menuvalues.tableNumber === menuvalues.tableArray[i]) {
        setIsModalVisible(false);
      } else if (menuvalues.tableNumber !== menuvalues.tableArray) {
        seterror(true);
      }
    }
  };

  var total = 0;
  useEffect(() => {}, [menuvalues]);
  useEffect(() => {}, [order]);

  // Function for  Price Size
  const handlesize = async (event, p, item, itemId, itemSize) => {
    console.log("event", event.target, itemSize);
    let spilcedArr = [];
    let radioObj = [];
    if (value) {
      let obj = value.items.find((f) => f._id == itemId);
      spilcedArr.push({
        ...obj,
        selectedPrice: event.target.value,
        selectedIprice: p,
        selectedSize: itemSize,
        noOfItem: 1,
      });
      setRadioItems(spilcedArr);
    }
    let setval = { ...menuvalues, price: event.target.value };

    setvalue({ ...value, [event.target.name]: event.target.checked });
    if (event.target.checked === true) {
      //new add 1 line
      let newOrder = [];
      if (order !== []) {
        newOrder = order?.filter((f) => f.title != item.title);
      }

      console.log(spilcedArr);

      let itm = spilcedArr?.find((f) => f._id === itemId);
      // console.log(itm);
      newOrder.push(itm);
      setOrder(newOrder);
      // setOrder(newOrder);
      let total = 0.0;
      let titles = "";
      let menuVal = setval;
      for (let key in newOrder) {
        total =
          parseFloat(newOrder[key].noOfItem * newOrder[key]?.selectedPrice) +
          total;
        titles = newOrder[key]?.title + "  " + " " + titles;
        menuVal = { ...menuVal, total: total.toFixed(2), titleNames: titles };
      }
      console.log(newOrder);

      menusetvalues(menuVal);
    } else if (event.target.checked == false) {
      var del = order.filter((m) => m._id !== item._id);
      let titles = "";
      for (let key in del) {
        total = parseFloat(del[key].price) + total;
        titles = del[key].title + titles;
        menusetvalues({ ...menuvalues, total: total, titleNames: titles });
      }
      setOrder(del);
    }
  };

  // Adding total Price Of Client order
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: menuvalues.name,
      surName: menuvalues.surName,
      phoneNumber: menuvalues.phoneNumber,
      tableNumber: menuvalues.tableNumber,
      email: menuvalues.emailAddress,
      order: cartItem,
      total: menuvalues.total,
      titleNames: menuvalues.titleNames,
      comments: menuvalues.comments,
    };
    axiosInstance
      .post("/userorder/add", user)
      .then((res) => {
        // alert(res.data.message);
        setCartitem([]);
        menusetvalues({
          MenuAlert: {
            variant: "success",
            name: "",
            surName: "",
            comments: "",

            message: res.data.message,
          },
        });
      })
      .catch((err, res) => {
        // console.log(err);

        menusetvalues({
          MenuAlert: {
            variant: "danger",
            message: "Error Data not Added",
          },
        });
      });
  };
  useEffect(() => {}, [menuvalues, itemSeke]);
  useEffect(() => {
    // console.log(value.items);

    axiosInstance
      .get("menuorder/getAll")
      .then(async (res) => {
        setvalue({ items: await res.data.items });
        let Tables =
          (await res.data) && res.data.items
            ? res.data.items.reduce(function (acc, obj) {
                let key = obj.table;
                (acc[key] ? acc[key] : (acc[key] = null || [])).push(obj);
                return acc;
              }, Object.create(null))
            : null;
        setTables(Tables);
        // console.log("???", Tables);
      })

      .catch((err) => {
        // console.log(err);
      });
  }, []);
  const handleSelect = async (event, p, item, itemId, itemSize) => {
    let itemSle = [...itemSeke];
    let selectedItemForCart = [];
    let radioObj = [];
    if (value?.items) {
      let obj = value?.items.find((f) => f._id == itemId);
      console.log(value, "value");
      selectedItemForCart.push();
      obj = {
        ...obj,
        selectedPrice: event,
        selectedIprice: p,
        selectedSize: itemSize,
        noOfItem: 1,
      };
      itemSle = itemSle.filter((f) => f._id != itemId);
      itemSle.push(obj);
      setItemSeke(itemSle);
      console.log("selectedItemForCart", selectedItemForCart);
      //   // setRadioItems(spilcedArr);
    }
  };
  const addItemToCart = (id) => {
    let cartIte = [...cartItem];

    let obj = itemSeke?.find((f) => f._id == id);
    if (obj !== undefined) {
      if (cartIte.length === 0) {
        cartIte.push(obj);
        setCartitem(cartIte);
      } else if (cartIte?.find((f) => f._id == id) !== undefined) {
        let cartAddedItem = cartIte?.filter(
          (f) => f._id === id && f.selectedSize === obj.selectedSize
        );
        console.log("softthrive", cartAddedItem);
        if (cartAddedItem.length > 0) {
          let index = cartIte.findIndex(
            (data) => data._id === id && data.selectedSize === obj.selectedSize
          );
          console.log("gggg", cartIte[index]);
          let x = { ...cartIte[index] };
          x.noOfItem = x.noOfItem + 1;
          console.log("x", x);
          cartIte[index] = x;
          setCartitem(cartIte);
        } else {
          cartIte.push(obj);
          setCartitem(cartIte);
        }
      } else {
        cartIte.push(obj);
        setCartitem(cartIte);
      }

      let setval = { ...menuvalues, price: obj.selectedPrice };
      let total = 0.0;
      let titles = "";
      let menuVal = setval;

      for (let key in cartIte) {
        total =
          parseFloat(cartIte[key].noOfItem * cartIte[key]?.selectedIprice) +
          total;
        titles = cartIte[key]?.title + "  " + " " + titles;
        menuVal = { ...menuVal, total: total.toFixed(2), titleNames: titles };
      }
      console.log(
        cartIte,
        "cartIte",
        total,
        cartIte[0].noOfItem,
        cartIte[0]?.selectedPrice
      );
      console.log(menuVal);

      menusetvalues(menuVal);
      console.log("obj", obj, cartIte);
    } else {
      console.log("alert");
      alert.error("Please select the size of item!");
    }
  };
  const selSizePrice = (id) => {
    let obj = itemSeke?.find((f) => f._id == id);
    console.log("obj", obj, itemSeke);
    if (obj !== undefined) {
      return obj.selectedIprice;
    } else {
      return null;
    }
  };
  const classes = useStyles();
  let MenuTables = [];
  let itemSek = [[]];
  if (subMen) {
    for (let i = 0; i < Object.keys(subMen).length; i++) {
      let tableValues = Object.values(subMen);
      MenuTables.push(
        <div class="mad-tabs-container">
          <div
            id="tab-1"
            tabindex="0"
            role="tabpanel"
            aria-labelledby="tab-1-link"
            class="mad-tab"
          >
            <div class="row vr-size-4">
              <div class="col-lg-12">
                <div class="content-element-8">
                  <h4
                    class="mad-color-title"
                    style={{ color: "#b42727", fontWeight: "600" }}
                  >
                    {Object.keys(subMen)[i]}
                  </h4>
                  <div class="mad-specs ">
                    <div className="d-flex justify-content-start flex-wrap">
                      {" "}
                      {tableValues[i].map((item, index) => {
                        //  " let id = {item._id:""};"
                        // active[i] = "";
                        // console.log("active all", item);

                        return (
                          <div className="item_card_main">
                            {" "}
                            <h5 className=" clw">{item.title}</h5>
                            <div style={{ margin: "10px 0px" }}>
                              Select Size & Type
                            </div>
                            <Select
                              className="input-margin selet_Item"
                              name="Table"
                              // value={table}
                              defaultValue="Select Size"
                              onChange={(eValue) => {
                                console.log("eValue", eValue, item._id);
                                if (eValue === item.itemSizeOne)
                                  handleSelect(
                                    eValue,
                                    item.calculateSmall,
                                    item,
                                    item._id,
                                    item.itemSizeOne
                                  );
                                else if (eValue === item.itemSizeTwo)
                                  handleSelect(
                                    eValue,
                                    item.calculateMedium,
                                    item,
                                    item._id,
                                    item.itemSizeTwo
                                  );
                                else if (eValue === item.itemSizeThree)
                                  handleSelect(
                                    eValue,
                                    item.calculateLarge,
                                    item,
                                    item._id,
                                    item.itemSizeThree
                                  );
                                //
                                // let temp = subMenuName.filter((name) => {
                                //   console.log(
                                //     "table matching",
                                //     name.tableName,
                                //     value
                                //   );
                                //   return value == name.tableName;
                                // });
                                // setSubMenuNameDisplay(temp);
                                // setTable(value);
                              }}
                            >
                              <Option
                                value={String(item.itemSizeOne)}
                                key={index}
                              >
                                {item.itemSizeOne}
                              </Option>
                              <Option
                                value={String(item.itemSizeTwo)}
                                key={index}
                              >
                                {item.itemSizeTwo}
                              </Option>
                              <Option
                                value={String(item.itemSizeThree)}
                                key={index}
                              >
                                {item.itemSizeThree}
                              </Option>
                              {/* {tableNames
                                ? tableNames.map((t, i) => (
                                    <Option value={String(t.tableName)} key={i}>
                                      {t.tableName}
                                    </Option>
                                  ))
                                : ""} */}
                            </Select>
                            {/* <div className="mt-2">Select Quantity</div> */}
                            {/* <div
                              className="d-flex justify-content-between mt-2 "
                              style={{ padding: "0px 12px" }}
                            >
                              <div>-</div>
                              <div>1</div>
                              <div>+</div>
                            </div> */}
                            <div
                              className=" text-center d-flex justify-content-between buttonItems"
                              onClick={() => addItemToCart(item._id)}
                            >
                              <div>Add to cart</div>
                              <div>
                                {selSizePrice(item._id) == null
                                  ? item.calculateSmall
                                  : selSizePrice(item._id)}
                                {}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  // //console.log("tables", tables);
  const ModalContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
  `;
  const changeBackground = () => {
    console.log("window.scrollY ", window.scrollY);
    if (window.scrollY >= 80) {
      setSidebae(true);
    } else {
      setSidebae(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div style={{ position: "relative" }}>
      <Header />
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
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex alig">
          <div className="shopping-cart mad-dropdown-element h-17rem">
            <div className="mad-products mad-product-small">
              <div className="mad-col">
                <div className="row">
                  <div>
                    <span className="bucket-hi"> {t("hi.72")}:</span>
                    <span className="bucket-name">{menuvalues.name}</span>
                  </div>
                  <div style={{ margin: "10px 0px" }}>
                    <span className="bucket-table">{t("table.73")}:</span>{" "}
                    <span className="bucket-number">
                      {truncate(menuvalues.tableNumber, 6)}XX
                    </span>{" "}
                  </div>

                  <div className="w-100 mar-auto">
                    <TextArea
                      style={{ resize: "none" }}
                      rows={3}
                      name="comments"
                      placeholder="Comments"
                      value={menuvalues.comments}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mWidth70">
        <div className="button_basket" onClick={() => setMobile(true)}>
          Your Basket
        </div>
      </div>
      <div
        className="side_checkout_mobile"
        style={mobile == true ? { display: "block" } : { display: "none" }}
      >
        <div onClick={() => setMobile(false)}>
          {" "}
          <AiOutlineClose size={25} />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              margin: "15px auto",
              color: "black",
              fontWeight: "700",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Your Basket
          </div>
          <div className="side_checkout_item">
            {cartItem.map((item, index) => {
              return (
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex justify-content-between m-2">
                    <div className="d-flex">
                      <div
                        style={{ marginRight: "10px", cursor: "pointer" }}
                        onClick={() => deleteSelect(index)}
                      >
                        <AiOutlineClose style={{ opacity: "0.25" }} />
                      </div>
                      <div>{item.title}</div>
                    </div>

                    <div>${item.selectedIprice}</div>
                  </div>{" "}
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "5px" }}
                  >
                    <div>
                      <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                        Size:
                      </span>
                      {item.selectedSize}
                    </div>
                    <div>
                      {" "}
                      <span
                        style={{ marginRight: "5px", cursor: "pointer" }}
                        onClick={() => minusItemSize(index)}
                      >
                        -
                      </span>
                      {item.noOfItem}
                      <span
                        style={{ marginLeft: "5px", cursor: "pointer" }}
                        onClick={() => addItemSize(index)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total_price">
            <div className="total_price_te">
              <div>
                {" "}
                <span>Total:</span>{" "}
                <span>{menuvalues.total > 0 && menuvalues.total}</span>
              </div>{" "}
              <div style={{ fontSize: "10px" }}>*inclusive all taxes</div>
            </div>

            <div className="button_order" onClick={(e) => handleSubmit(e)}>
              Order
            </div>
          </div>
        </div>
      </div>
      <div
        className="side_checkout none-mobile "
        style={sidebae ? { top: "0px" } : {}}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              margin: "15px auto",
              color: "black",
              fontWeight: "700",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Your Basket
          </div>
          <div className="side_checkout_item">
            {cartItem.map((item, index) => {
              return (
                <div style={{ marginBottom: "10px" }}>
                  <div className="d-flex justify-content-between m-2">
                    <div className="d-flex">
                      <div
                        style={{ marginRight: "10px", cursor: "pointer" }}
                        onClick={() => deleteSelect(index)}
                      >
                        <AiOutlineClose style={{ opacity: "0.25" }} />
                      </div>
                      <div>{item.title}</div>
                    </div>

                    <div>${item.selectedIprice}</div>
                  </div>{" "}
                  <div
                    className="d-flex justify-content-between"
                    style={{ marginTop: "5px" }}
                  >
                    <div>
                      <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                        Size:
                      </span>
                      {item.selectedSize}
                    </div>
                    <div>
                      {" "}
                      <span
                        style={{ marginRight: "5px", cursor: "pointer" }}
                        onClick={() => minusItemSize(index)}
                      >
                        -
                      </span>
                      {item.noOfItem}
                      <span
                        style={{ marginLeft: "5px", cursor: "pointer" }}
                        onClick={() => addItemSize(index)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="total_price">
            <div className="total_price_te">
              <div>
                {" "}
                <span>Total:</span>{" "}
                <span>{menuvalues.total > 0 && menuvalues.total}</span>
              </div>{" "}
              <div style={{ fontSize: "10px" }}>*inclusive all taxes</div>
            </div>

            <div className="button_order" onClick={(e) => handleSubmit(e)}>
              Order
            </div>
          </div>
        </div>
      </div>
      <div className="row"></div>
      {/* <Header />

   
      {/* <!--================ End of Breadcrumb ================--> */}
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

      <div class="mad-content no-pd maxW">
        <div class="container">
          <div class="mad-section mad-section--stretched mad-colorizer--scheme-">
            <div class="mad-colorizer-bg-color">
              <div class="with-svg-item">
                <img src="images/837x297_bgimg1.jpg" alt="" />
              </div>
              <div class="with-svg-item svg-right-side bottom">
                <img src="images/garlic.png" alt="" />
              </div>
            </div>
            {/* <!--================ Tabs ================--> */}
            <div
              onClick={() => {
                setShowHide(false);
              }}
            >
              {showHide == true ? (
                <div className="bo_back">
                  <BiArrowBack /> Go back
                </div>
              ) : null}
            </div>
            {showHide == true ? MenuTables.map((table) => table) : null}
            {showHide == false ? (
              <div className="Usermenu-Main d-flex justify-content-center flex-wrap">
                {console.log(tables, "tables")}
                {tables !== undefined &&
                  Object.keys(tables).map((item, index) => {
                    return (
                      <div onClick={() => data(item)}>
                        <div
                          style={{
                            width: "400px",
                            height: "505px",

                            padding: "0px 15px",
                          }}
                        >
                          <div style={{ margin: "15px 0px" }}>
                            <div
                              className="bg_image"
                              style={{
                                backgroundImage: `url("${imagesArray[index]}")`,
                              }}
                            ></div>
                            <div
                              style={{
                                textAlign: "center",
                                padding: "2rem 1rem",
                                color: "white",
                                fontWeight: "800",
                                background: "rgb(17,17,17)",
                              }}
                            >
                              {item}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : null}
            <div class="mad-tabs"></div>
          </div>
        </div>

        <div className="user-model">
          <Modal
            footer={false}
            title="Menu"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={700}
            className="hell"
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
                  {t("error.71")}
                </Alert>
              )}
            </div>

            <div>
              <form className={classes.root} noValidate autoComplete="off">
                <div className="row">
                  <div
                    className="col-lg-2 col-4  contact-name-center"
                    style={{ paddingRight: "0px" }}
                  >
                    <h5 className="contact-h5 fontstyle">{t("Me.63")}</h5>
                  </div>
                  <div
                    className="col-lg-4  col-8 text-center"
                    style={{ paddingLeft: "0px" }}
                  >
                    {errorfield.nameerror ? (
                      <TextField
                        error
                        id="outlined-basic"
                        aria-describedby="component-error-text"
                        name="name"
                        value={menuvalues.name}
                        helperText={errorfield ? "The Field is Required" : ""}
                        onChange={(e) => handleChange(e)}
                        variant="outlined"
                        className="text-field" //assign the width as your requirement
                      />
                    ) : (
                      <TextField
                        id="outlined-basic"
                        aria-describedby="component-error-text"
                        name="name"
                        value={menuvalues.name}
                        onChange={(e) => handleChange(e)}
                        variant="outlined"
                        className="text-field" //assign the width as your requirement
                      />
                    )}
                  </div>
                  <div
                    className="col-lg-2 col-4 contact-name-center"
                    style={{ paddingRight: "0px" }}
                  >
                    <h5 className="contact-h5 fontstyle">{t("Men.64")}</h5>
                  </div>
                  <div
                    className="col-lg-4 col-8  text-center"
                    style={{ paddingLeft: "0px" }}
                  >
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

                <div className="row" style={{ padding: "16px 0px" }}>
                  <div
                    className="col-lg-2 col-4 contact-name-center"
                    style={{ paddingRight: "0px" }}
                  >
                    <h5 className="contact-h5">{t("Menu.65")}</h5>
                  </div>
                  <div
                    className="col-lg-4 col-8 text-center"
                    style={{ paddingLeft: "0px" }}
                  >
                    <TextField
                      id="outlined-basic"
                      name="phoneNumber"
                      value={menuvalues.phoneNumber}
                      onChange={(e) => handleChange(e)}
                      variant="outlined"
                      className="text-field" //assign the width as your requirement
                    />
                  </div>
                  <div
                    className="col-lg-2 col-4 contact-name-center"
                    style={{ paddingRight: "0px" }}
                  >
                    <h5 className="contact-h5">{t("Menus.66")}</h5>
                  </div>
                  <div
                    className="col-lg-4 col-8 text-center"
                    style={{ paddingLeft: "0px" }}
                  >
                    {errorfield.emailerror ? (
                      <TextField
                        error
                        id="outlined-basic"
                        name="emailAddress"
                        helperText={errorfield ? "The Field is Required" : ""}
                        value={menuvalues.emailAddress}
                        onChange={(e) => handleChange(e)}
                        variant="outlined"
                        className="text-field" //assign the width as your requirement
                      />
                    ) : (
                      <TextField
                        id="outlined-basic"
                        name="emailAddress"
                        value={menuvalues.emailAddress}
                        onChange={(e) => handleChange(e)}
                        variant="outlined"
                        className="text-field" //assign the width as your requirement
                      />
                    )}
                  </div>
                </div>

                <div className="row d-flex justify-content-center">
                  <div
                    className="col-lg-2  col-4 contact-name-center"
                    style={{ paddingRight: "0px" }}
                  >
                    <h5 className="contact-h5">
                      {t("Menuss.67")}
                      <span style={{ color: "#ff0000" }}>*</span>
                    </h5>
                  </div>
                  <div
                    className="col-lg-10 col-8 text-center ll"
                    style={{ paddingLeft: "0px" }}
                  >
                    {errorfield.tableerror ? (
                      <TextField
                        error
                        id="outlined-basic"
                        name="tableNumber"
                        helperText={errorfield ? "The Field is Required" : ""}
                        value={menuvalues.tableNumber}
                        onChange={(e) => handleChange(e)}
                        variant="outlined"
                        className="text-field" //assign the width as your requirement
                      />
                    ) : (
                      <TextField
                        id="outlined-basic"
                        name="tableNumber"
                        value={menuvalues.tableNumber}
                        onChange={(e) => handleChange(e)}
                        variant="outlined"
                        className="text-field" //assign the width as your requirement
                      />
                    )}
                  </div>
                </div>
                <span style={{ color: "#505050" }}>
                  {" "}
                  <span
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "600",
                      paddingRight: "2px",
                      verticalAlign: "top",
                    }}
                  >
                    *
                  </span>
                  {t("please.68")}
                </span>

                <div>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1zuYDWV-DouaMm6ek2WpkK_Aqf6vXntyY/view?usp=sharing"
                  >
                    {" "}
                    <span style={{ color: "#505050" }}>
                      {" "}
                      <span
                        style={{
                          color: "red",
                          fontSize: "20px",
                          fontWeight: "600",
                          paddingRight: "2px",
                          verticalAlign: "top",
                        }}
                      >
                        *
                      </span>
                      {t("condition.87")}
                    </span>
                  </a>
                  <span style={{ marginLeft: "10px" }}>
                    <Checkbox onChange={(e) => onChange(e)}></Checkbox>
                  </span>
                </div>

                <div>
                  <span style={{ color: "#505050" }}>
                    {" "}
                    <span
                      style={{
                        color: "red",
                        fontSize: "20px",
                        fontWeight: "600",
                        paddingRight: "2px",
                        verticalAlign: "top",
                      }}
                    >
                      *
                    </span>
                    {t("would.88")}
                  </span>
                  <span style={{ marginLeft: "10px" }}>
                    <Checkbox onChange={(e) => onChange1(e)}></Checkbox>
                  </span>
                </div>
              </form>

              <div className=" submit-btn-row row">
                <div className="col-6" style={{ paddingRight: "24px" }}>
                  <Link to="/home">
                    <button
                      className="store-btn"
                      style={{ padding: "10px", width: "100%" }}
                    >
                      <IoIosArrowBack style={{ marginBottom: "2px" }} />{" "}
                      {t("Nav.3")}
                    </button>
                  </Link>
                </div>
                <div className="col-6" style={{ paddingRight: "24px" }}>
                  <button
                    onClick={check && checkTable}
                    className="store-btn"
                    style={{ padding: "10px", width: "100%" }}
                  >
                    {t("continue.69")}
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      {/* <FooterOne /> */}
    </div>
  );
}

export default UserMenu;
