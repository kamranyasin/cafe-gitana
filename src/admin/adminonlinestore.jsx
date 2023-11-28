import React, { useContext } from "react";
import { Form, Input, Button } from "antd";

import { Upload, Modal } from "antd";

import { PlusOutlined } from "@ant-design/icons";
import axiosInstance from "../axios-Instance";
import { useTranslation } from "react-i18next";
// import { ContextApi } from "../Components/ContextApi/ContextApi";
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

function Adminonlinestore(props) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [values, setvalues] = React.useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    image: "",
    title: "",
    link: "",
    dataAdded: null,
  });

  const handleClick = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleCancel = () => setvalues({ previewVisible: false });
  const handleChangeImage = ({ fileList }) => {
    setvalues({ ...values, image: fileList[0].originFileObj });
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("imageeeeeeeeeeeeee", values.image);

    let data;
    let config;
    if (values.image !== "") {
      data = new FormData();
      config = { headers: { "Content-type": "multipart/form-data" } };
      data.append("title", values.title);
      data.append("image", values.image);
      data.append("link", values.link);

      console.log("data=========", data);
      console.log("if");
    } else {
      config = { headers: { "Content-type": "application/json" } };
      data = {
        title: values.title,
        link: values.link,
      };
      console.log("else");
    }

    console.log(data);

    axiosInstance
      .post("onlineStore/add", data, config)
      .then((res) => {
        console.log(res.data);

        let itemss = [...values.items];
        itemss.push(res.data.itemObj);
        setvalues({
          dataAdded: {
            variant: "success",
            title: "",
            image: "",
            link: "",
            message: "added",
          },
        });

        console.log("added");
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
  };
  const { previewVisible, previewImage, fileList, previewTitle } = values;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{t("upload.99")}</div>
    </div>
  );
  console.log("ewfewf", values.image);
  // const contextType = useContext(ContextApi);
  return (
    <div className="container-fluid   height ">
      <div className="row text-center">
        <h2>{t("cartdetails.110")}</h2>
      </div>
      <div className="row mlr-15">
        <table style={{ width: "100%" }} className="table">
          <tbody>
            <tr key={45} style={{ width: "100%" }}>
              <th className="table-heading">{t("name.90")}</th>

              <th className="table-heading">{t("email.105")}</th>
              <th className="table-heading">{t("imagess.57")} </th>
              <th className="table-heading">{t("images.56")} </th>

              <th className="table-heading">{t("payment.107")}</th>

              <th className="table-heading">{t("time.109")}</th>
            </tr>
            {/* {value?.items?.map((item, index) => {
              return (
                <tr key={item._id}>
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
              <p>Are you sure to delete this item?</p>
            </Modal> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminonlinestore;
