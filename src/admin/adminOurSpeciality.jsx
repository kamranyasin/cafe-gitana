import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { Upload, Modal } from "antd";
import Alert from "react-bootstrap/Alert";
import { PlusOutlined } from "@ant-design/icons";
import axiosInstance from "../axios-Instance";
import TextArea from "antd/lib/input/TextArea";
import { MdDeleteSweep } from "react-icons/md";
import { useTranslation } from "react-i18next";

// import Alert from "react-bootstrap/Alert";
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

function AdminOurSpeciality(props) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [values, setvalues] = React.useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    image: "",
    title: "",
    description: "",
    alert: null,
    fileList: [],
  });
  const [value, setvalue] = React.useState({
    items: [],
    tabledelete: null,
  });
  const handleClick = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  useEffect(() => {
    console.log("state-values", values);
  }, [values]);

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
      image: fileList[0]?.originFileObj,
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
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [deleteItemId, setDeleteItemId] = React.useState(null);
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
  const { previewVisible, previewImage, fileList, previewTitle } = values;
  console.log(fileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("imageeeeeeeeeeeeee", values.image);
    // console.log(this.state.barCode)
    let data;
    let config;
    if (values.image !== "") {
      data = new FormData();
      config = { headers: { "Content-type": "multipart/form-data" } };
      data.append("title", values.title);
      data.append("image", values.image);
      data.append("description", values.description);

      console.log("data=========", data);
      console.log("if");
    } else {
      config = { headers: { "Content-type": "application/json" } };
      data = {
        title: values.title,
        description: values.description,
      };
      console.log("else");
    }

    console.log(data);

    axiosInstance
      .post("ourSpeciality/add", data, config)
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
        setvalues({
          image: "",
          title: "",
          // fileList: [],
          previewVisible: false,
          description: "",
          previewImage: "",
          previewTitle: "",
          fileList: [],
          alert: {
            variant: "success",

            message: "Item added succesfully ",
          },
        });
        axiosInstance
          .get("ourSpeciality/getAll")
          .then(async (res) => {
            console.log(res.data);
            setvalue({ items: res.data.item });
          })
          .catch((err) => {
            console.log(err);
          });
        if (values.items) {
          let itemss = [...values.items];
          itemss.push(res.data.itemObj);
          console.log("added");
        }
      })
      .catch((err) => {
        console.log(err);
        setvalues({
          image: "",
          title: "",
          alert: {
            variant: "danger",
            message: "Data not Added",
          },
        });
      });
  };
  const handleDelete = (id) => {
    console.log("delete id", id);
    // var del = value.items.filter((m) => m._id !== id._id);
    // setvalue({ items: del });
    axiosInstance
      .delete(`ourSpeciality/delete/${id}`)
      .then((res) => {
        setIsModalVisible(false);
        console.log("item deleted", res.data);
        axiosInstance
          .get("ourSpeciality/getAll")
          .then(async (res) => {
            setvalue({
              items: res.data.item,

              tabledelete: {
                variant: "danger",

                message: "Item Deleted succesfully ",
              },
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
  useEffect(() => {
    console.log(value.items);
    axiosInstance
      .get("ourSpeciality/getAll")
      .then((res) => {
        setvalue({ items: res.data.item });
        console.log(res.data.item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
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
          <p className="heading">{t("Navsss.6")}</p>
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
                value={values.title}
                onChange={handleChange}
                name="title"
                placeholder="Title"
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
              <TextArea
                name="description"
                placeholder="description"
                value={values.description}
                onChange={handleChange}
              />
            </Form.Item>

            <Upload
              listType="picture-card"
              // name="image"
              fileList={values.fileList}
              type="file"
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
      <div className="row text-center">
        <h2>{t("itemdet.94")}</h2>
      </div>
      <div
        className="row mlr-15 scroll-table-admin
      
      "
      >
        <table
          style={{ width: "100%", backgroundColor: "white" }}
          className="table"
        >
          <tbody>
            <tr key={45} style={{ width: "100%" }}>
              <th className="table-heading">{t("name.90")}</th>

              <th className="table-heading des_aqd">{t("desc.91")}</th>
              <th className="table-heading">{t("del.92")} </th>
            </tr>
            {value?.items?.map((item, index) => {
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

export default AdminOurSpeciality;
