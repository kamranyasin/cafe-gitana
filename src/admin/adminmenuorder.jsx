import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { Upload, Modal } from "antd";
import Alert from "react-bootstrap/Alert";
import { PlusOutlined } from "@ant-design/icons";
import axiosInstance from "../axios-Instance";
import { MdAddCircleOutline } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { Checkbox } from "antd";
import { GrEdit } from "react-icons/gr";
import { BiLockOpenAlt, BiLockAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";

// import { Select } from "@material-ui/core";
// import { Modal, Button } from "antd";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    // offset: 8,
    span: 24,
  },
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Store(props) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [value, setvalue] = React.useState({
    items: [],
    tables: [],
  });
  const [subMenuNameDisplay, setSubMenuNameDisplay] = React.useState([]);
  const [values, setvalues] = React.useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    image: "",
    title: "",
    smallPrice: "",
    mediumPrice: "",
    largePrice: "",
    stock: "",
    dataAdded: null,
    itemSizeOne: "",
    itemSizeTwo: "",
    itemSizeThree: "",
    itemOneLock: true,
    itemTwoLock: true,
    itemThreeLock: true,
    gst: "5",
    qst: "9.775",
    calculateSmall: "",
    calculateMedium: "",
    calculateLarge: "",
    Table: "Select Table",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [updateModel, setUpdateModel] = useState(false);
  const [table, setTable] = useState("Select Menu"); //tableName
  const [currentMenu, setCurrentMenu] = useState("Select Sub menu"); //subMenu
  const [tables, setTables] = useState();
  const [tableNames, setTableNames] = useState();
  const [id, setId] = useState();
  const [SelectedTable, setSelectedTable] = useState();
  const [deleteItemId, setDeleteItemId] = React.useState(null);
  const [subMenuName, setSubMenuNames] = React.useState([]);
  const [valuesSub, setValuesSub] = React.useState({
    tableName: null,
    subMenu: null,
  });
  const [deletevisible, setdeletevisible] = React.useState(false);

  const deletemodel = (itemId) => {
    setdeletevisible(true);
    setDeleteItemId(itemId);
  };

  const handleclose = () => {
    setdeletevisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showUpdate = (id) => {
    setUpdateModel(true);
    setId(id);
    let table = value.items.find((table) => table._id == id);
    setSelectedTable(table);
  };
  const handleitemSizeOne = (e) => {
    setvalues({ ...values, itemOneLock: !values.itemOneLock });
  };
  const handleitemSizeTwo = (e) => {
    setvalues({ ...values, itemTwoLock: !values.itemTwoLock });
  };
  const handleitemSizeThree = (e) => {
    setvalues({ ...values, itemThreeLock: !values.itemThreeLock });
  };

  const deleteTableName = (id) => {
    console.log(id, "id");
    let config = { headers: { "Content-type": "application/json" } };
    let data = { id: id };
    axiosInstance
      .delete(`menuTable/deleteTable`, { data, config })
      .then((res) => {
        axiosInstance
          .get("menuTable/getAll")
          .then((res) => {
            setTableNames(res.data.menuTable);
            console.log("All Tables", res.data.menuTable);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdate = () => {
    setUpdateModel(false);
    let data;
    let config;
    config = { headers: { "Content-type": "application/json" } };
    data = {
      id: id,
      title: values.title,
      price: values.price,
      table: table,
      smallPrice: values.smallPrice,
      mediumPrice: values.mediumPrice,
      largePrice: values.largePrice,
      calculateSmall: values.calculateSmall,
      calculateMedium: values.calculateMedium,
      calculateLarge: values.calculateLarge,
      gst: values.gst,
      qst: values.qst,
    };
    console.log("else");

    console.log(data);

    axiosInstance
      .post("menuOrder/update", data, config)
      .then((res) => {
        axiosInstance
          .get("menuorder/getAll")
          .then(async (res) => {
            setvalue({ items: res.data.items });
            let Tables =
              (await res.data) && res.data.items
                ? res.data.items.reduce(function (acc, obj) {
                    let key = obj.table;
                    (acc[key] ? acc[key] : (acc[key] = null || [])).push(obj);
                    return acc;
                  }, Object.create(null))
                : null;
            setTables(Tables);
          })
          .catch((err) => {
            console.log(err);
          });

        console.log("updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCanceled = () => {
    setUpdateModel(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    if (event.target.name === "gst") {
      const calSmall =
        (parseFloat(event.target.value) / 100) * parseFloat(values.smallPrice) +
        parseFloat(values.smallPrice);
      const calMedium =
        (parseFloat(event.target.value) / 100) *
          parseFloat(values.mediumPrice) +
        parseFloat(values.mediumPrice);
      const calLarge =
        (parseFloat(event.target.value) / 100) * parseFloat(values.smallPrice) +
        parseFloat(values.largePrice);

      setvalues({
        ...values,
        calculateSmall: calSmall.toFixed(2),
        calculateMedium: calMedium.toFixed(2),
        calculateLarge: calLarge.toFixed(2),

        [event.target.name]: event.target.value,
      });
    } else if (event.target.name === "qst") {
      console.log("cal", values.calculateSmall);
      console.log("cal", values.calculateMedium);
      console.log("cal", values.calculateLarge);

      const calgstSmall =
        (parseFloat(values.gst) / 100) * parseFloat(values.smallPrice) +
        parseFloat(values.smallPrice);

      const calSmall =
        (parseFloat(event.target.value) / 100) * parseFloat(calgstSmall) +
        parseFloat(calgstSmall);

      setvalues({
        ...values,
        calculateSmall: calSmall.toFixed(2),
        [event.target.name]: event.target.value,
      });
    } else {
      console.log("else", values.calculateSmall);
      if (event.target.name === "smallPrice") {
        const cal =
          (parseFloat(values.gst) / 100) * parseFloat(event.target.value) +
          parseFloat(event.target.value);
        console.log("cal", cal);
        const calqst =
          (parseFloat(values.qst) / 100) * parseFloat(cal) + parseFloat(cal);

        setvalues({
          ...values,
          calculateSmall: calqst.toFixed(2),
          [event.target.name]: event.target.value,
        });
      } else if (event.target.name === "mediumPrice") {
        const cal =
          (parseFloat(values.gst) / 100) * parseFloat(event.target.value) +
          parseFloat(event.target.value);
        console.log("cal", cal);
        const calqst =
          (parseFloat(values.qst) / 100) * parseFloat(cal) + parseFloat(cal);

        setvalues({
          ...values,
          calculateMedium: calqst.toFixed(2),
          [event.target.name]: event.target.value,
        });
      } else if (event.target.name === "largePrice") {
        const cal =
          (parseFloat(values.gst) / 100) * parseFloat(event.target.value) +
          parseFloat(event.target.value);
        console.log("cal", cal);
        const calqst =
          (parseFloat(values.qst) / 100) * parseFloat(cal) + parseFloat(cal);

        setvalues({
          ...values,
          calculateLarge: calqst.toFixed(2),
          [event.target.name]: event.target.value,
        });
      } else {
        setvalues({
          ...values,

          [event.target.name]: event.target.value,
        });
      }
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { Option } = Select;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tableNames.length > 0 || subMenuNameDisplay.length > 0) {
      let data;
      let config;

      config = { headers: { "Content-type": "application/json" } };
      data = {
        table: table,
        subMenu: currentMenu,
        title: values.title,
        itemSizeOne: values.itemSizeOne,
        itemSizeTwo: values.itemSizeTwo,
        itemSizeThree: values.itemSizeThree,
        smallPrice: values.smallPrice,
        mediumPrice: values.mediumPrice,
        largePrice: values.largePrice,
        calculateSmall: values.calculateSmall,
        calculateMedium: values.calculateMedium,
        calculateLarge: values.calculateLarge,
        gst: values.gst,
        qst: values.qst,
      };

      console.log(data);

      axiosInstance
        .post("menuorder/add", data, config)
        .then((res) => {
          console.log(res.data);

          axiosInstance
            .get("menuorder/getAll")
            .then(async (res) => {
              setvalue({ items: res.data.items });
              let Tables =
                (await res.data) && res.data.items
                  ? res.data.items.reduce(function (acc, obj) {
                      let key = obj.table;
                      (acc[key] ? acc[key] : (acc[key] = null || [])).push(obj);
                      return acc;
                    }, Object.create(null))
                  : null;
              setTables(Tables);
            })
            .catch((err) => {
              console.log(err);
            });

          setTables("");
          setTable("Select Menu name");
          setCurrentMenu("Select Sub Menu Name");
          currentMenu("");
          setvalues({
            title: "",
            price: "",
            smallPrice: "",
            itemSizeOne: "",
            itemSizeTwo: "",
            itemSizeThree: "",
            mediumPrice: "",
            largePrice: "",
            Table: "Select Table",
            dataAdded: {
              variant: "success",
              message: "added",
            },
          });

          console.log("Order Added");
        })
        .catch((err) => {
          console.log(err);
          setvalues({
            Loginalert: {
              variant: "danger",
              message: "not Added",
            },
          });
        });
      axiosInstance
        .get("menuorder/getAll")
        .then(async (res) => {
          setvalue({ items: res.data.items });
          let Tables =
            (await res.data) && res.data.items
              ? res.data.items.reduce(function (acc, obj) {
                  let key = obj.table;
                  (acc[key] ? acc[key] : (acc[key] = null || [])).push(obj);
                  return acc;
                }, Object.create(null))
              : null;
          setTables(Tables);
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("error");
    }
  };
  console.log(value.items);
  const handleDelete = (id) => {
    console.log("delete id", id);
    // var del = value.items.filter((m) => m._id !== id._id);
    // setvalue({ items: del });
    axiosInstance
      .delete(`menuOrder/delete/${id}`)
      .then((res) => {
        setdeletevisible(false);
        console.log("item deleted", res.data);
        axiosInstance
          .get("menuorder/getAll")
          .then(async (res) => {
            setvalue({ items: res.data.items });
            let Tables =
              (await res.data) && res.data.items
                ? res.data.items.reduce(function (acc, obj) {
                    let key = obj.table;
                    (acc[key] ? acc[key] : (acc[key] = null || [])).push(obj);
                    return acc;
                  }, Object.create(null))
                : null;
            setTables(Tables);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleTable = () => {
    console.log("createTable");
    let data = { tableName: values.tableName };
    axiosInstance.post("menuTable/add", data).then((res) => {
      console.log("table response =>", res.data);
    });
    axiosInstance
      .get("menuTable/getAll")
      .then((res) => {
        setTableNames(res.data.menuTable);
        console.log("All Tables", res.data.menuTable);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleMenuTable = () => {
    console.log("createTable");
    let data = { tableName: valuesSub.tableName, subMenu: valuesSub.subMenu };
    axiosInstance
      .post("subMenu/add", data)
      .then((res) => {
        console.log("table response =>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axiosInstance
      .get("menuTable/getAll")
      .then(async (res) => {
        setTableNames(await res.data.menuTable);
        console.log("All Tables", res.data.menuTable);
      })
      .catch((err) => {
        console.log(err);
      });

    ///sub menu
    axiosInstance
      .get("subMenu/getAll")
      .then(async (res) => {
        setSubMenuNames(await res.data.subMenu);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance
      .get("menuorder/getAll")
      .then(async (res) => {
        setvalue({ items: await res.data.items });
        let Tables =
          res.data && res.data.items
            ? await res.data.items.reduce(function (acc, obj) {
                let key = obj.table;
                (acc[key] ? acc[key] : (acc[key] = null || [])).push(obj);
                return acc;
              }, Object.create(null))
            : null;
        setTables(Tables);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(async () => {
  //   // console.log("Tables", tables)
  //   console.log("SelectedTable",SelectedTable.title)
  // }, [tables, tableNames ,SelectedTable.title])

  let MenuTables = [];
  if (tables) {
    for (let i = 0; i < Object.keys(tables).length; i++) {
      let tableValues = Object.values(tables);
      MenuTables.push(
        <div className="Usermenu-Main">
          <div className="row">
            <h2>{Object.keys(tables)[i]}</h2>
          </div>
          <div className="row scroll-table-admin">
            <table style={{ width: "100%" }} className="table table-bg">
              <tbody>
                <tr key={45} style={{ width: "100%" }}>
                  <th className="table-heading">{t("name.90")}</th>

                  <th className="table-heading">{t("imagess.57")}</th>
                  <th className="table-heading">
                    {t("action.95")}
                    {/* <MdAddCircleOutline
                      size={30}
                      className="mlr-10 cursor"
                      onClick={showModal}
                    /> */}
                  </th>
                </tr>
                {tableValues[i].map((item, index) => {
                  return (
                    <tr
                      key={item._id}
                      style={{ borderBottom: "1px solid lightgrey" }}
                    >
                      <th>
                        {" "}
                        <span className="item-name"> {item.title}</span>
                      </th>
                      <th>
                        <div className="row">
                          {item.itemSizeOne || item.calculateSmall ? (
                            <div className="col item-name">
                              <div>{item.itemSizeOne}</div>
                              <div>${item.calculateSmall}</div>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.itemSizeTwo || item.calculateMedium ? (
                            <div className="col item-name">
                              <div>{item.itemSizeTwo}</div>
                              <div> ${item.calculateMedium}</div>
                            </div>
                          ) : (
                            ""
                          )}
                          {item.itemSizeThree || item.calculateLarge ? (
                            <div className="col item-name">
                              <div>{item.itemSizeThree}</div>
                              <div> ${item.calculateLarge}</div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </th>
                      <th className="table-heading">
                        {" "}
                        <div className="order-checkbox">
                          <GrEdit
                            size={35}
                            className="mlr-10 cursor"
                            onClick={() => showUpdate(item._id)}
                          />
                          <TiDelete
                            size={35}
                            className="mlr-10"
                            onClick={() => deletemodel(item._id)}
                          />
                        </div>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  const { previewVisible, previewImage, fileList, previewTitle } = values;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{t("upload.99")}</div>
    </div>
  );
  return (
    <div className="container-fluid   height-auto ">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="menu-card">
            <span className="heading">{t("cmenu.115")}</span>
            <Form {...layout} name="basic">
              <Form.Item
                className="fields"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  value={values.tableName}
                  onChange={handleChange}
                  name="tableName"
                  placeholder="New Table Name"
                />
              </Form.Item>
              <Button className="store-btn" onClick={handleTable}>
                {t("create.116")}
              </Button>
            </Form>
            <span
              className="heading"
              style={{ fontSize: "30px", marginTop: "20px" }}
            >
              Create SubMenu
            </span>
            <Form
              {...layout}
              name="basic"
              // initialValues={{
              //   remember: true,
              // }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
            >
              <div>Select Table Name</div>
              <select
                className="user_select_sub_menu"
                onChange={(e) =>
                  setValuesSub({ ...valuesSub, tableName: e.target.value })
                }
              >
                {tableNames &&
                  tableNames.map((item) => {
                    return <option>{item.tableName}</option>;
                  })}
              </select>
              <Form.Item
                className="fields"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  value={valuesSub.subMenu}
                  onChange={(e) =>
                    setValuesSub({ ...valuesSub, subMenu: e.target.value })
                  }
                  name="tableName"
                  placeholder="New Sub-menu Name"
                />
              </Form.Item>
              <Button className="store-btn" onClick={handleMenuTable}>
                {t("create.116")}
              </Button>
            </Form>
            <div
              style={{
                textAlign: "left",
                height: "500px",
                overflowY: "scroll",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "50px",
                  textAlign: "center",
                }}
              >
                <b>All table names</b>
              </div>
              {tableNames
                ? tableNames.map((t, i) => {
                    console.log("t", t);
                    return (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          borderBottom: "1px solid black",
                        }}
                      >
                        <div
                          style={{
                            padding: "5px 0px",
                          }}
                        >
                          {t.tableName}
                        </div>{" "}
                        <TiDelete
                          size={35}
                          className="mlr-10"
                          onClick={() => deleteTableName(t._id)}
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <div className="menu-card-1">
            <span className="heading">{t("citems.117")}</span>
            <Form>
              <Form.Item
                style={{
                  width: "50%",
                  margin: "auto",
                }}
                className="fields"
                // name="Table"
                rules={[
                  {
                    // required: true,
                    message: "Select Table!",
                  },
                ]}
              >
                <Select
                  className="input-margin"
                  name="Table"
                  value={table}
                  defaultValue="Select Table"
                  onChange={(value) => {
                    console.log("value", value);
                    let temp = subMenuName.filter((name) => {
                      console.log("table matching", name.tableName, value);
                      return value == name.tableName;
                    });
                    setSubMenuNameDisplay(temp);
                    setTable(value);
                  }}
                >
                  {tableNames
                    ? tableNames.map((t, i) => (
                        <Option value={String(t.tableName)} key={i}>
                          {t.tableName}
                        </Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>
              <Form.Item
                style={{
                  width: "50%",
                  margin: "auto",
                }}
                className="fields"
                // name="Table"
                rules={[
                  {
                    // required: true,
                    message: "Select Table!",
                  },
                ]}
              >
                <br />
                <Select
                  className="input-margin"
                  name="Table"
                  defaultValue="Select Sub-Menu Name"
                  value={subMenuNameDisplay.length == 0 ? null : currentMenu}
                  onChange={(value) => {
                    console.log("value", value);
                    setCurrentMenu(value);
                  }}
                >
                  {subMenuNameDisplay
                    ? subMenuNameDisplay.map((t, i) => (
                        <Option value={String(t.subMenu)} key={i}>
                          {t.subMenu}
                        </Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>

              <Form.Item
                style={{ width: "50%", margin: "auto" }}
                className="fields mtb-1rem"
                rules={[
                  {
                    // required: true,
                    message: "Title is empty!",
                  },
                ]}
              >
                <Input
                  style={{ marginTop: "10px" }}
                  className="input-margin mtb-1rem"
                  value={values.title}
                  onChange={handleChange}
                  name="title"
                  placeholder="Item Title"
                />
              </Form.Item>

              <Form.Item
                style={{ width: "50%", margin: "auto" }}
                className="fields"
                rules={[
                  {
                    // required: true,
                    message: "Title is empty!",
                  },
                ]}
              >
                <Input
                  className="input-margin"
                  value={values.gst}
                  onChange={handleChange}
                  suffix="%"
                  name="gst"
                  placeholder="Item Gst"
                />
              </Form.Item>
              <Form.Item
                style={{ width: "50%", margin: "auto" }}
                className="fields"
                rules={[
                  {
                    // required: true,
                    message: "Title is empty!",
                  },
                ]}
              >
                <Input
                  className="input-margin"
                  suffix="%"
                  value={values.qst}
                  onChange={handleChange}
                  name="qst"
                  placeholder="Item Qst"
                />
              </Form.Item>
              <div className="row">
                <div className="col-5">
                  <Form.Item
                    style={{ width: "50%", margin: "auto" }}
                    className="fields"
                    rules={[
                      {
                        // required: true,
                        message: "Price field is empty!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="input-margin"
                      name="itemSizeOne"
                      placeholder="Item Name"
                      value={values.itemSizeOne}
                      onChange={handleChange}
                      aria-describedby="component-error-text"
                      disabled={values.itemOneLock}
                    />
                  </Form.Item>
                </div>
                <div className="col-5">
                  <Form.Item
                    style={{ width: "50%", margin: "auto" }}
                    className="fields"
                    rules={[
                      {
                        // required: true,
                        message: "Price field is empty!",
                      },
                    ]}
                  >
                    <Input
                      prefix="$"
                      className="input-margin"
                      name="smallPrice"
                      type="number"
                      placeholder="Item Small Price "
                      value={values.smallPrice}
                      onChange={handleChange}
                      aria-describedby="component-error-text"
                      disabled={values.itemOneLock}
                    />
                  </Form.Item>
                </div>
                <div className="col-2 d-flex">
                  <button onClick={handleitemSizeOne} className="locked-btn ">
                    {values.itemOneLock ? (
                      <span>
                        <BiLockOpenAlt />
                      </span>
                    ) : (
                      <span>
                        <BiLockAlt />
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-5">
                  `{" "}
                  <Form.Item
                    style={{ width: "50%", margin: "auto" }}
                    className="fields"
                    rules={[
                      {
                        // required: true,
                        // message: "Price field is empty!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="input-margin"
                      name="itemSizeTwo"
                      placeholder="Item Name"
                      value={values.itemSizeTwo}
                      onChange={handleChange}
                      disabled={values.itemTwoLock}
                      aria-describedby="component-error-text"
                    />
                  </Form.Item>
                  `
                </div>
                <div className="col-5 d-flex  align-items-center">
                  <Form.Item
                    style={{ width: "50%", margin: "auto" }}
                    className="fields"
                    // rules={[
                    //   {
                    //     required: true,
                    //     message: "Price field is empty!",
                    //   },
                    // ]}
                  >
                    <Input
                      prefix="$"
                      type="number"
                      className="input-margin"
                      name="mediumPrice"
                      placeholder="Item Medium Price"
                      value={values.mediumPrice}
                      onChange={handleChange}
                      disabled={values.itemTwoLock}
                      aria-describedby="component-error-text"
                    />
                  </Form.Item>
                </div>
                <div className="col-2 d-flex  align-items-center">
                  <button onClick={handleitemSizeTwo} className="locked-btn">
                    {values.itemTwoLock ? (
                      <span>
                        <BiLockOpenAlt />
                      </span>
                    ) : (
                      <span>
                        <BiLockAlt />
                      </span>
                    )}
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <Form.Item
                    style={{ width: "50%", margin: "auto" }}
                    className="fields"
                    rules={[
                      {
                        // required: true,
                        // message: "Price field is empty!",
                      },
                    ]}
                  >
                    <Input
                      className="input-margin"
                      name="itemSizeThree"
                      type="text"
                      placeholder="Item Name"
                      value={values.itemSizeThree}
                      onChange={handleChange}
                      disabled={values.itemThreeLock}
                      aria-describedby="component-error-text"
                    />
                  </Form.Item>
                </div>
                <div className="col-5">
                  <Form.Item
                    className="fields"
                    style={{ width: "50%", margin: "auto" }}
                    rules={[
                      {
                        // required: true,
                        // message: "Price field is empty!",
                      },
                    ]}
                  >
                    <Input
                      prefix="$"
                      type="number"
                      className="input-margin"
                      name="largePrice"
                      placeholder="Item Large  Price "
                      value={values.largePrice}
                      onChange={handleChange}
                      disabled={values.itemThreeLock}
                      aria-describedby="component-error-text"
                    />
                  </Form.Item>
                </div>
                <div className="col-2 d-flex  align-items-center">
                  <button onClick={handleitemSizeThree} className="locked-btn">
                    {values.itemThreeLock ? (
                      <span>
                        <BiLockOpenAlt />
                      </span>
                    ) : (
                      <span>
                        <BiLockAlt />
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  {values.calculateSmall == "" ||
                  isNaN(values.calculateSmall) ? (
                    <p style={{ color: "white" }}>0</p>
                  ) : (
                    <span style={{ color: "white" }}>
                      {" "}
                      {values.calculateSmall}
                    </span>
                  )}
                </div>
                <div className="col-4">
                  {values.calculateMedium == "" ||
                  isNaN(values.calculateMedium) ? (
                    <p style={{ color: "white" }}>0</p>
                  ) : (
                    <span style={{ color: "white" }}>
                      {" "}
                      {values.calculateMedium}
                    </span>
                  )}
                </div>
                <div className="col-4">
                  {values.calculateLarge == "" ||
                  isNaN(values.calculateLarge) ? (
                    <p style={{ color: "white" }}>0</p>
                  ) : (
                    <span style={{ color: "white" }}>
                      {" "}
                      {values.calculateLarge}
                    </span>
                  )}
                </div>
              </div>
              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="store-btn"
                  onClick={(event) => handleSubmit(event)}
                >
                  {t("submit.62")}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="text-center centered">
        {values.tabledelete !== null && (
          <Alert
            style={{
              vertical: "top",
              horizontal: "center",
              width: "400px",
              fontWeight: "500",
              textAlign: "center",
              zIndex: "99",
            }}
            variant={values.tabledelete?.variant}
          >
            {values.tabledelete?.message}
          </Alert>
        )}
      </div>
      <div className="row text-center">
        <h2>{t("idetail.118")}</h2>
      </div>
      {MenuTables.map((table) => table)}
      {/* Add Update Data Model Box */}
      <Modal
        title="Update"
        visible={updateModel}
        onOk={handleUpdate}
        onCancel={handleCanceled}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            className="fields"
            name="title"
            rules={[
              {
                required: true,
                message: "Title is Empty !",
              },
            ]}
          >
            <Input
              value={SelectedTable?.title}
              // defaultValue={SelectedTable.title}
              onChange={handleChange}
              name="title"
              placeholder={SelectedTable ? SelectedTable.title : "Title"}
            />
          </Form.Item>

          <Form.Item
            className="fields"
            name="updateTable"
            rules={[
              {
                required: true,
                message: "Select Table!",
              },
            ]}
          >
            <Select
              name="updateTable"
              defaultValue="Select Table"
              onChange={(value) => {
                console.log("value", value);
                setTable(value);
              }}
            >
              {tableNames
                ? tableNames.map((t, i) => (
                    <Option value={String(t.tableName)} key={i}>
                      {t.tableName}
                    </Option>
                  ))
                : ""}
            </Select>
          </Form.Item>

          <Form.Item
            className="fields"
            name="smallPrice"
            rules={[
              {
                required: true,
                message: "Price field is empty !",
              },
            ]}
          >
            {console.log("SelectedTable", SelectedTable)}
            {console.log("values.smallPrice", values?.smallPrice)}
            <Input
              name="smallPrice"
              placeholder={
                SelectedTable ? SelectedTable.smallPrice : "smallPrice"
              }
              value={values.smallPrice}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            className="fields"
            name="mediumPrice"
            rules={[
              {
                required: true,
                message: "Price field is empty !",
              },
            ]}
          >
            <Input
              name="mediumPrice"
              placeholder={
                SelectedTable ? SelectedTable.mediumPrice : "mediumPrice"
              }
              value={values.mediumPrice}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item
            className="fields"
            name="largePrice"
            rules={[
              {
                required: true,
                message: "Price field is empty !",
              },
            ]}
          >
            <Input
              name="largePrice"
              placeholder={
                SelectedTable ? SelectedTable.largePrice : "largePrice"
              }
              value={values.largePrice}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Delete Item"
        visible={deletevisible}
        onOk={() => handleDelete(deleteItemId)}
        onCancel={handleclose}
      >
        <p>{t("sure.93")}</p>
      </Modal>
    </div>
  );
}

export default Store;
