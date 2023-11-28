import React, { useState, useEffect } from "react";
import "./staff.css";
import axiosInstance from "../axios-Instance";
import jsPDF from "jspdf";
import Logo from "../Asserts/Logo.png";
import { FaDownload } from "react-icons/fa";
import moment from "moment";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { Modal } from "antd";
import Alert from "react-bootstrap/Alert";
function Stafforder(props) {
  const [value, setvalue] = useState({
    items: [],
    alert: null,
  });

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const [isModalView, setIsModalView] = React.useState(false);
  const [deleteItemId, setDeleteItemId] = React.useState(null);
  const [item, setitem] = React.useState([]);
  // const [orderitem, setOrderItem] = React.useState([]);

  // const [Alert, setalert] = React.useState(true);
  const showModal = (itemId) => {
    setIsModalVisible(true);
    setDeleteItemId(itemId);
  };
  const showModalView = (item) => {
    setIsModalView(true);
    const array = [];
    array.push(item);
    // setitem(item);
    setitem(array);
    console.log("array", item);
  };
  const handleViewCanceled = () => {
    setIsModalView(false);
  };
  const handleCanceled = () => {
    setIsModalVisible(false);
  };
  console.log(item);
  useEffect(() => {
    console.log("values of items in value.items", value.items);
    axiosInstance
      .get("userorder/getAll")
      .then((res) => {
        setvalue({ items: res.data.item });
        console.log(res.data.item);
        console.log(value.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(item);
  const handleDelete = (id) => {
    console.log("delete id", id);

    axiosInstance
      .delete(`userorder/delete/${id}`)
      .then((res) => {
        console.log("item deleted", res.data);
        setIsModalVisible(false);
        axiosInstance
          .get("userorder/getAll")
          .then(async (res) => {
            setvalue({
              items: res.data.item,
              alert: {
                variant: "danger",
                message: "Item Deleted Successfully",
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
  const pdfgenerter = (item, idx) => {
    console.log("pddf item", item);
    var doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(Logo, "png", 45, 45, 45, 45);
    doc.setFont("serif");
    doc.text(120, 30, "Order#:");
    doc.text(160, 30, String(idx));
    doc.text(120, 50, "Name:");
    doc.text(160, 50, item.name);
    doc.text(120, 70, "Phone Number:");
    doc.text(200, 70, item.phoneNumber);
    doc.text(320, 70, "Table Number:");
    doc.text(400, 70, item.tableNumber);

    doc.text(120, 90, "Email:");
    doc.text(160, 90, item.email);
    // doc.lineTo(80,300,"|")
    doc.rect(80, 120, 500, 200);

    let y = 140;
    item.order.map((orderitem) => {
      doc.text(100, y, orderitem.title);
      doc.text(300, y, orderitem.selectedSize);
      doc.text(360, y, String(orderitem.noOfItem));
      doc.text(500, y, ` ${orderitem.selectedPrice}$`);
      y = y + 20;

      // doc.text(200, 90, orderitem.);
    });

    doc.text(100, 300, "Total");
    doc.text(500, 300, `${item.total}$`);

    doc.rect(80, 320, 500, 80);

    doc.text(85, 350, "Comments:");

    {
      item.comments
        ? doc.text(165, 350, item?.comments)
        : doc.text(165, 350, "No Comments");
    }
    doc.rect(80, 400, 500, 30);

    // doc.text(100, 150, item.order);

    // doc.text(60, 160, "Phone Number:");
    // doc.text(60, 180, "Table Number:");
    // doc.text(60, 200, "Order:");
    // doc.text(60, 220, "Total:$");
    // doc.text(60, 240, "Comments:");

    // doc.text(150, 160, item.phoneNumber);
    // doc.text(150, 180, item.tableNumber);

    // doc.text(100, 200, item.titleNames);
    // doc.html(document.querySelector("#content"), {
    //   callback: function (pdf) {
    //     pdf.save(`CustomerOrder${item.tableNumber}.pdf`);
    //   },
    // });

    doc.save(`${item.tableNumber}KASAA2.pdf`);
  };

  console.log("staff order ", item);
  return (
    <div className="container-fluid  height-100">
      {/* <div id="content">
        <p style={{ fontFamily: "cursive", color: "red" }}>heelo</p>
      </div> */}
      <div className="row justify-content-center">
        {value.alert !== null && (
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
            variant={value.alert?.variant}
          >
            {value.alert?.message}
          </Alert>
        )}
      </div>

      <span className="heading">Orders</span>

      <div className="row  scroll-table">
        <table
          style={{ width: "100%", backgroundColor: "white" }}
          className="table"
        >
          <tbody>
            <tr key={45} style={{ width: "100%" }}>
              <th className="table-heading">Name</th>
              <th className="table-heading">Phone Number</th>
              <th className="table-heading">Email</th>
              <th className="table-heading">Table number</th>
              {/* <th className="table-heading">Status</th> */}
              <th className="table-heading">
                <div className="row">
                  <div className="col-6">Order</div>
                  <div className="col-6">Price</div>
                </div>
              </th>
              <th className="table-heading">Total</th>
              <th className="table-heading">time</th>
              <th className="table-heading">Comments</th>
              <th className="table-heading">
                <div className="d-flex justify-content-around">
                  <div>Download</div>
                  <div>Delete</div>
                </div>
              </th>
            </tr>

            {value.items.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th style={{ width: "0" }} className="table-heading">
                    {item?.name}
                  </th>
                  <th style={{ width: "0" }} className="table-heading">
                    {item?.phoneNumber}
                  </th>
                  <th
                    style={{ width: "0", lineBreak: "anywhere" }}
                    className="table-heading"
                  >
                    {item?.email}
                  </th>
                  <th style={{ width: "0" }} className="table-heading">
                    {item?.tableNumber}
                  </th>
                  {/* <th style={{ width: "0" }} className="table-heading">
                    {checkorder.value ? (
                      <span className="done">done</span>
                    ) : (
                      <span className="pending">pending</span>
                    )}
                  </th> */}
                  <th style={{ width: "0" }} className="table-heading">
                    {item.order.map((item, idx) => {
                      return (
                        <div className="row">
                          <div className="col-8">{item?.title}</div>

                          <div className="col-4">${item?.selectedPrice}</div>
                        </div>
                      );
                    })}
                  </th>
                  <th style={{ width: "0" }} className="table-heading">
                    ${item?.total}
                  </th>
                  <th style={{ width: "0" }} className="table-heading">
                    {moment(item.createdAt).format("MMM D YYYY HH:mm")}
                  </th>
                  <th style={{ width: "0" }} className="table-heading">
                    {item?.comments ? (
                      <span> {item?.comments}</span>
                    ) : (
                      <span>No Comments</span>
                    )}
                  </th>
                  <th
                    style={{ width: "0", textAlign: "center" }}
                    className="table-heading"
                  >
                    <div className="d-flex justify-content-around p-10">
                      <button
                        className="btn-done"
                        onClick={() => showModalView(item)}
                      >
                        <AiFillEye size={20} color="black" />
                      </button>
                      <button
                        className="btn-done"
                        onClick={() => showModal(item._id)}
                      >
                        <AiFillDelete size={20} />
                      </button>
                      <button
                        className="btn-done"
                        onClick={(e) => pdfgenerter(item, index)}
                      >
                        <FaDownload size={20} />
                      </button>
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        title="Delete Item"
        visible={isModalVisible}
        onOk={() => handleDelete(deleteItemId)}
        onCancel={handleCanceled}
      >
        <p>Are you sure to delete this item?</p>
      </Modal>
      <div>
        <Modal
          title="User Order"
          visible={isModalView}
          onOk={handleViewCanceled}
          onCancel={handleViewCanceled}
        >
          {item.map((key, i) => {
            return (
              <div className="row">
                <div className="d-flex">
                  <img src={Logo} className="view-img" />
                </div>
                <div className="col-12 d-flex">
                  <span className="view-text-bold">Name:</span>
                  <span className="view-text">{key.name}</span>
                </div>
                <div className="col-12 d-flex">
                  <span className="view-text-bold">Email</span>
                  <span className="view-text">{key.email}</span>
                </div>
                <div className="col-12 d-flex">
                  <span className="view-text-bold">Phone Number:</span>
                  <span className="view-text">{key.phoneNumber}</span>
                </div>
                <div className="col-12 d-flex">
                  <span className="view-text-bold">Table Number:</span>
                  <span className="view-text">{key.tableNumber}</span>
                </div>
                <div className="col-12 d-flex">
                  <span className="view-text-bold">Order:</span>
                  <span className="view-text">{key.titleNames}</span>
                </div>
                <div className="col-12 d-flex">
                  <span className="view-text-bold">Total :</span>
                  <span className="view-text">${key.total}</span>
                </div>

                <div className="col-12 d-flex">
                  <span className="view-text-bold">Comments :</span>
                  <span className="view-text">
                    {key.comments ? (
                      <span>{key.comments}</span>
                    ) : (
                      <span>No Comments</span>
                    )}
                  </span>
                </div>

                {/* <div className="col-12 d-flex justify-content-center">
                  <span className="view-text-bold m-r-10">Download Pdf </span>
                  <button
                    className="btn-done"
                    onClick={(e) => pdfgenerter(key)}
                  >
                    <FaDownload size={20} />
                  </button>
                </div> */}
              </div>
            );
          })}
        </Modal>
      </div>
    </div>
  );
}

export default Stafforder;
