import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import Alert from "react-bootstrap/Alert";
import { Upload, Modal } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import axiosInstance from "../axios-Instance";
import { Select } from "antd";
import { MdDeleteSweep } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { GrEdit } from "react-icons/gr";
const { Option } = Select;
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
  const [value, setvalue] = React.useState({
    items: [],
    tabledelete: null,
  });
  const [open, setOpen] = React.useState(false);
  const [deleteItemId, setDeleteItemId] = React.useState(null);
  const [values, setvalues] = React.useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    image: "",
    name: "",
    // smallPrice: "",
    // mediumPrice: "",
    // largePrice: "",
    gst: "5",
    qst: "9.775",
    price: "",
    stock: "Stock",
    storeitem: null,
    fileList: [],
    calculategst: "",
  });
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = (itemId) => {
    setIsModalVisible(true);
    setDeleteItemId(itemId);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCanceled = () => {
    setIsModalVisible(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    console.log(event.target);
    if (event.target.name === "gst") {
      const cal =
        (parseFloat(event.target.value) / 100) * parseFloat(values.price) +
        parseFloat(values.price);
      console.log("cal", cal);
      const calqst =
        (parseFloat(values.qst) / 100) * parseFloat(cal) + parseFloat(cal);

      setvalues({
        ...values,
        calculategst: calqst.toFixed(2),
        [event.target.name]: event.target.value,
      });
    } else if (event.target.name === "qst") {
      // var cal =
      //   (parseFloat(event.target.value) / 100) * parseFloat(values.price) +
      //   parseFloat(values.price);
      console.log("cal", values.calculategst);
      const calgst =
        (parseFloat(values.gst) / 100) * parseFloat(values.price) +
        parseFloat(values.price);
      console.log("cal", calgst);
      const cal =
        (parseFloat(event.target.value) / 100) * parseFloat(calgst) +
        parseFloat(calgst);

      setvalues({
        ...values,
        calculategst: cal.toFixed(2),
        [event.target.name]: event.target.value,
      });
    }

    // cal = cal + values.price;
    else {
      const cal =
        (parseFloat(values.gst) / 100) * parseFloat(event.target.value) +
        parseFloat(event.target.value);
      console.log("cal", cal);
      const calqst =
        (parseFloat(values.qst) / 100) * parseFloat(cal) + parseFloat(cal);

      setvalues({
        ...values,
        calculategst: calqst.toFixed(2),
        [event.target.name]: event.target.value,
      });
    }

    console.log(event.target.value);
    console.log("calculategst", values.calculategst);
  };
  const handleselect = (event) => {
    setvalues({ ...values, stock: event });
    console.log(values.stock);
    console.log(event);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleCancel = () => setvalues({ previewVisible: false });
  const handleChangeImage = ({ fileList }) => {
    setvalues({
      ...values,
      image: fileList[0].originFileObj,
      fileList: fileList,
    });

    console.log(fileList);
  };
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setvalues({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("imageeeeeeeeeeeeee", values.image);

    let data;
    let config;
    if (values.image !== "") {
      data = new FormData();
      config = { headers: { "Content-type": "multipart/form-data" } };
      data.append("name", values.name);
      data.append("stock", values.stock);
      data.append("image", values.image);
      data.append("calculategst", values.calculategst);
      data.append("price", values.price);
      data.append("gst", values.gst);
      data.append("qst", values.qst);

      // data.append("smallPrice", values.smallPrice);
      // data.append("mediumPrice", values.mediumPrice);
      // data.append("largePrice", values.largePrice);

      console.log("data=========", data);
      console.log("if");
    } else {
      config = { headers: { "Content-type": "application/json" } };
      data = {
        name: values.name,
        price: values.price,
        stock: values.stock,
      };
      console.log("else");
    }

    console.log(data);

    axiosInstance
      .post("store/add", data, config)
      .then((res) => {
        console.log(res.data);
        axiosInstance
          .get("store/storegetall")
          .then(async (res) => {
            console.log(res.data);
            setvalue({ items: res.data.item });
          })
          .catch((err) => {
            console.log(err);
          });
        // let itemss = [...values.items];
        // itemss.push(res.data.itemObj);
        setvalues({
          storeitem: {
            variant: "success",
            name: "",
            image: "",
            stock: "",
            price: "",
            fileList: [],
            message: "Item  Added successfully",
          },
        });

        console.log("Item  Added successfully ");
      })
      .catch((err) => {
        console.log(err);
        setvalues({
          storeitem: {
            variant: "danger",
            message: "Item  not Added",
          },
        });
      });
  };
  // const handledelete = (itemId) => {
  //   console.log("itemId", itemId);
  //   var del = value.items.filter((m) => m._id !== itemId);
  //   setvalue({ items: del });
  //   setIsModalVisible(false);
  // };
  const handleDelete = (id) => {
    console.log("delete id", id);
    // var del = value.items.filter((m) => m._id !== id._id);
    // setvalue({ items: del });
    axiosInstance
      .delete(`store/delete/${id}`)
      .then((res) => {
        console.log("item deleted", res.data);
        setIsModalVisible(false);
        axiosInstance
          .get("store/storegetall")
          .then(async (res) => {
            setvalues({
              items: res.data.item,

              // tabledelete: {
              //   variant: "danger",

              //   message: "Item Deleted succesfully ",
              // },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { previewVisible, previewImage, fileList, previewTitle } = values;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{t("upload.99")}</div>
    </div>
  );
  console.log("ewfewf", values.image);
  return (
    <div className="container-fluid   height-auto">
      <div className="text-center centered">
        {values.storeitem !== null && (
          <Alert
            style={{
              vertical: "top",
              horizontal: "center",
              width: "400px",
              fontWeight: "500",
              textAlign: "center",
              zIndex: "99",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            variant={values.storeitem?.variant}
          >
            {values.storeitem?.message}
          </Alert>
        )}
      </div>
      <div className="main-card-div">
        <div className="card-store">
          <span className="heading">{t("stor.98")}</span>
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
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                value={values.name}
                onChange={handleChange}
                name="name"
                placeholder="Name"
              />
            </Form.Item>
            <Form.Item
              className="fields"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                name="price"
                placeholder="Item Price"
                prefix="$"
                value={values.price}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              className="fields"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                name="gst"
                placeholder="Item GST"
                suffix="%"
                value={values.gst}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item
              className="fields"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                name="qst"
                placeholder="Item QST"
                suffix="%"
                value={values.qst}
                onChange={handleChange}
              />
            </Form.Item>
            {console.log(values)}
            {console.log(values.calculategst)}

            {values.calculategst == "" || isNaN(values.calculategst) ? (
              <p>0</p>
            ) : (
              <h3 style={{ color: "black" }}>${values.calculategst}</h3>
            )}

            <Select
              defaultValue={"Stock"}
              value={values.stock}
              onChange={handleselect}
              style={{ width: 197, marginBottom: "20px" }}
            >
              <Option value="Available">{t("avail.96")}</Option>
              <Option value="NotAvailable">{t("unavail.97")}</Option>
            </Select>
            <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              name="image"
              type="file"
              fileList={values.fileList}
              onPreview={handlePreview}
              onChange={handleChangeImage}
            >
              {uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
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
      <div className="row text-center mt-40">
        <h2 className="">{t("itemdet.94")}</h2>
      </div>
      <div className="row mlr-15 scroll-table-admin">
        <table
          style={{ width: "100%", backgroundColor: "white" }}
          className="table"
        >
          <tbody>
            <tr key={45} style={{ width: "100%" }}>
              <th className="table-heading">{t("Me.63")}</th>

              <th className="table-heading">{t("price.82")}</th>
              <th className="table-heading">
                {t("action.95")}{" "}
                {/* <MdAddCircleOutline
                      size={30}
                      className="mlr-10 cursor"
                      onClick={showModal}
                    /> */}
              </th>
            </tr>
            {value?.items?.map((item, index) => {
              return (
                <tr
                  key={item._id}
                  style={{ borderBottom: "1px solid lightgrey" }}
                >
                  <th>
                    {" "}
                    <span className="item-name"> {item.name}</span>
                  </th>
                  <th>
                    <div className="row">
                      <div className="col-4 item-name">
                        ${item.calculategst}
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-4 item-name">${item.smallPrice}</div>
                      <div className="col-4 item-name">${item.mediumPrice}</div>
                      <div className="col-4 item-name">${item.largePrice}</div>
                    </div> */}
                  </th>
                  <th className="table-heading">
                    {" "}
                    <div className="order-checkbox">
                      <MdDeleteSweep
                        className="cursor color"
                        size={35}
                        onClick={() => showModal(item._id)}
                      />
                      {/* <GrEdit
                        size={35}
                        className="mlr-10 cursor"
                        color="red"
                        // onClick={() => showUpdate(item._id)}
                      /> */}
                    </div>
                  </th>
                </tr>
              );
            })}
            <Modal
              title="Delete Item"
              visible={isModalVisible}
              onOk={() => handleDelete(deleteItemId)}
              onCancel={handleCanceled}
            >
              <p>{t("sure.93")}</p>
            </Modal>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Store;
