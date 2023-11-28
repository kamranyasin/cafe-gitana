import React, { useEffect, useState } from "react";

import { Form, Input, Button } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { Upload, Modal } from "antd";
import Alert from "react-bootstrap/Alert";
import { PlusOutlined } from "@ant-design/icons";
import axiosInstance from "../axios-Instance";
import TextArea from "antd/lib/input/TextArea";
import { MdDeleteSweep } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import EditIcon from "@mui/icons-material/Edit";
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

// if(valuefrom contextapi.value.length === 0) {
//   value
// }
const TermAndCondition = () => {
  const { t, i18n } = useTranslation();
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [deleteItemId, setDeleteItemId] = React.useState(null);
  const [updatedItem, setUpdatedItem] = React.useState(null);

  const [isEdit, setEdit] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const [updateModel, setUpdateModel] = useState(false);
  const [SelectedTable, setSelectedTable] = useState();
  const [id, setId] = useState();

  const showModal = (itemId) => {
    setIsModalVisible(true);
    setDeleteItemId(itemId);
  };

  const showUpdateModal = (item) => {
    setUpdateModel(true);
    setUpdatedItem(item);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setUpdateModel(false);
  };

  const handleCanceled = () => {
    setIsModalVisible(false);
    setUpdateModel(false);
  };
  const [values, setvalues] = React.useState({
    id: "",
    title: "",
    description: "",
    alert: null,
  });
  const [value, setvalue] = React.useState({
    items: [],
    tabledelete: null,
  });
  console.log("items in terms and condition", value.items);
  const showUpdate = (id) => {
    setUpdateModel(true);
    // setId(id);
    // let table = value.items.find((table) => table._id == id);
    // setSelectedTable(table);
  };

  // Function to handle edit
  const handleEdit = (i) => {
    // If edit mode is true setEdit will
    // set it to false and vice versa
    setEdit(!isEdit);
  };

  // Function to handle save

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("zia", name, value);
    setvalues({ ...values, [name]: value });
  };
  const handleChangeOfEdit = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("zia", name, value);
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("values", Inputvalue);
    await axiosInstance
      .post("termAndCondition/add", {
        id: values.id,
        title: values.title,
        description: values.description,
        alert: values.alert,
      })
      .then((res) => {
        console.log("Respons.....e", res.data);
        setvalues({
          id: "",
          title: "",
          description: "",
          alert: null,
        });
        // const { status } = response.data;
        // console.log("Response:", response.data);
        // if (status === "success") {
        //   toast("Success! Check email for details", { type: "success" });
        // } else {
        //   toast("Something went wrong", { type: "error" });
        // }

        axiosInstance
          .get("termAndCondition/getAll")
          .then(async (res) => {
            console.log(res.data);
            setvalue({ items: res.data.item });
          })
          .catch((err) => {
            console.log(err);
          });
        // if (values.items) {
        //   let itemss = [...values.items];
        //   itemss.push(res.data.itemObj);
        //   console.log("added");
        // }
      })
      .catch((err) => {
        console.log(err);
        setvalue({
          id: "",
          title: " ",
          description: " ",
          alert: " ",
        });
      });
  };

  const handleDelete = (id) => {
    console.log("delete id", id);

    axiosInstance
      .delete(`termAndCondition/delete/${id}`)
      .then((res) => {
        console.log("item deleted", res);
        setIsModalVisible(false);
        let array = [...value.items];
        array = array.filter((c) => c._id !== res.data.result._id);
        setvalue({
          items: array,
          alert: {
            variant: "danger",
            message: "Item Deleted Successfully",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (id) => {
    setUpdateModel(false);
    console.log("id update  :", id);

    console.log("else");

    axiosInstance
      .put(`termAndCondition/update/${updatedItem._id}`, {
        id: updatedItem.id,
        title: updatedItem.title,
        description: updatedItem.description,
      })
      .then((res) => {
        console.log("I m in update response", res);
        let array = [...value.items];
        let index = value.items.findIndex(
          (itm) => itm._id === res.data.item._id
        );
        console.log("index", index);
        array[index] = res.data.item;
        setvalue({ ...value, items: array });

        // axiosInstance
        //   .get("termAndCondition/getAll")
        //   .then(async (res) => {
        //     console.log("resp on handel update :", res);
        //     setvalue({ items: res.data.items });
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

        console.log("updated");
        setUpdatedItem(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(async () => {
    await axiosInstance
      .get("termAndCondition/getAll")
      .then(async (response) => {
        console.log("response data", response.data);
        setvalue({ ...value, items: response.data.item });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container-fluid  height-auto ">
        <div className="row justify-content-center">
          {values.alert !== null && (
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
              variant={values.alert?.variant}
            >
              {values.alert?.message}
            </Alert>
          )}
        </div>

        <div className="height-ourspeciality  d-flex align-items-center">
          <div className="card">
            <p className="heading">{t("termscond.119")}</p>
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
                // className="fields"
                className="form-fieldsterm"
                rules={[
                  {
                    required: true,
                    message: "Please input a id!",
                  },
                ]}
              >
                <Input
                  value={values.id}
                  onChange={handleChange}
                  name="id"
                  placeholder="Id"
                  style={{ width: "100px" }}
                />
              </Form.Item>
              <Form.Item
                className="form-fieldsterm"
                rules={[
                  {
                    required: true,
                    message: "Please input a title!",
                  },
                ]}
              >
                <Input
                  value={values.title}
                  onChange={handleChange}
                  name="title"
                  placeholder="Title"
                  style={{ width: "350px", height: "50px" }}
                />
              </Form.Item>

              <Form.Item
                className="form-fieldsterm-textarea"
                rules={[
                  {
                    required: true,
                    message: "Please input a  description!",
                  },
                ]}
              >
                <TextArea
                  name="description"
                  placeholder="description"
                  value={values.description}
                  onChange={handleChange}
                  style={{ height: "150px" }}
                />
              </Form.Item>

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
        <div className="row text-center">
          <h2>{t("itemdet.94")}</h2>
        </div>
        <div className="row mlr-15 scroll-table-admin">
          <table
            style={{ width: "100%", backgroundColor: "white" }}
            className="table"
          >
            <tbody>
              <tr key={45} style={{ width: "100%" }}>
                <th className="table-heading">id</th>

                <th className="table-heading">{t("name.90")}</th>

                <th className="table-heading des_aqd">{t("desc.91")}</th>
                <th className="table-heading">{t("del.92")} </th>
                <th className="table-heading">Edit</th>
              </tr>
              {value?.items?.map((item, index) => {
                {
                  console.log("items in map method", item);
                }
                return (
                  <tr
                    key={item._id}
                    style={{ borderBottom: "1px solid lightgrey" }}
                  >
                    <th>
                      {" "}
                      <span className="item-name"> {item.id}</span>
                    </th>
                    <th>
                      {" "}
                      <span className="item-name"> {item.title}</span>
                    </th>
                    <th>
                      <span> {item.description}</span>
                    </th>
                    <th className="table-heading">
                      {" "}
                      <div className="order-checkbox">
                        <MdDeleteSweep
                          className="cursor color"
                          size={35}
                          onClick={() => showModal(item._id)}
                        />
                      </div>
                    </th>
                    <th className="table-heading">
                      {" "}
                      <div className="order-checkbox">
                        <EditIcon onClick={(e) => showUpdateModal(item)} />
                      </div>
                    </th>
                  </tr>
                );
              })}
              ;
              <Modal
                title="Update"
                visible={updateModel}
                onOk={() => handleUpdate()}
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
                    // className="fields"
                    className="form-fieldsterm"
                    rules={[
                      {
                        required: true,
                        message: "Please input a id!",
                      },
                    ]}
                  >
                    <Input
                      value={updatedItem?.id}
                      onChange={handleChangeOfEdit}
                      name="id"
                      placeholder="Id"
                      style={{ width: "100px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    className="form-fieldsterm"
                    rules={[
                      {
                        required: true,
                        message: "Please input a title!",
                      },
                    ]}
                  >
                    <Input
                      value={updatedItem?.title}
                      onChange={handleChangeOfEdit}
                      name="title"
                      placeholder={
                        SelectedTable ? SelectedTable.title : "Title"
                      }
                      style={{ width: "350px", height: "50px" }}
                    />
                  </Form.Item>
                  <Form.Item
                    className="form-fieldsterm-textarea"
                    rules={[
                      {
                        required: true,
                        message: "Please input a  description!",
                      },
                    ]}
                  >
                    <TextArea
                      name="description"
                      placeholder={
                        SelectedTable
                          ? SelectedTable.description
                          : "description"
                      }
                      value={updatedItem?.description}
                      onChange={handleChangeOfEdit}
                      style={{ height: "150px" }}
                    />
                  </Form.Item>
                </Form>
              </Modal>
              <Modal
                title="Delete Item"
                visible={isModalVisible}
                onOk={() => handleDelete(deleteItemId)}
                onCancel={handleCanceled}
              >
                <p>Are you sure to delete this item?</p>
              </Modal>
            </tbody>
          </table>
        </div>

        {/* <div className="container-fluid   height">
        <div>Hello World</div>
        {termCondition.map((optionterms) => (
          <>
            <div className="row text-center">
              <h2>{optionterms.heading}</h2>
            </div>

            <div className="row mlr-15 scroll-table-admin"></div>
            <table
              style={{ width: "100%", backgroundColor: "white" }}
              className="table"
            >
              {optionterms.MenuItem.map((termDes) => (
                <tbody>
                  <th className="table-heading">{termDes.conditionName}</th>
                  <th className="table-heading">{termDes.description}</th>
                </tbody>
              ))}
            </table>
          </>
        ))}
      </div> */}
      </div>
    </>
  );
};

export default TermAndCondition;
