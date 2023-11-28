import React, { useState } from "react";

// Admin and staff css
import "./admin.css";
import { Form, Input, Button } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockOpenAlt, BiLockAlt } from "react-icons/bi";
import axiosInstance from "../axios-Instance";
import Alert from "react-bootstrap/Alert";
import { FaUserTie } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
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

function Admin(props) {
  const [values, setvalues] = useState({
    userName: "",
    password: "",
    Loginalert: null,
  });
  const handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("loginToken", "token");
    // window.location.href = "/overView";
    const user = {
      userName: values.userName,
      password: values.password,
    };
    axiosInstance
      .post("/Register/Login", user)
      .then((res) => {
        const token = res.data.token;
        let loginID = res.data.id;
        console.log("login Id:", res.data.id);

        localStorage.setItem("logintoken", token);
        localStorage.setItem("loginId", loginID);
        // alert(res.data.message);
        setvalues({
          Loginalert: {
            variant: "success",
            userName: "",
            password: "",
            loginID: loginID,
            message: res.data.message,
          },
        });

        window.location.href = "/adminOurSpeciality";
        // props.history.push("/overView");
      })
      .catch((err, res) => {
        console.log(err);

        setvalues({
          Loginalert: {
            variant: "danger",
            message: err.response.data.message,
          },
        });
      });
  };

  return (
    <div>
      <div className="container-fluid  height align height-100">
        <div className="row width-height">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="cus-row ">
              <div className="login-one"></div>
              <div className="login-two"></div>
            </div>
            <div className="cus-row2">
              <div className="login-five"></div>
              <div className="box2">
                <div className="login-three"></div>
                <div className="login-four"></div>
              </div>
            </div>
            <div className="cus-row3">
              <div className="login-six"></div>
              <div className="login-seven"></div>
              <div className="login-eight"></div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
            <div className="row">
              <div className="centered">
                {values.Loginalert !== null && (
                  <Alert
                    style={{
                      vertical: "top",
                      horizontal: "center",
                      width: "400px",
                      fontWeight: "500",
                      marginTop: "20px",
                      zIndex: "99",
                    }}
                    variant={values.Loginalert.variant}
                  >
                    {values.Loginalert.message}
                  </Alert>
                )}
              </div>
            </div>

            <div className="card-wrapper">
              <div className="card">
                <span className="heading">Admin Login</span>
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
                      name="userName"
                      onChange={(event) => handleChange(event)}
                      value={values.userName}
                      placeholder="Username"
                      suffix={<AiOutlineUser />}
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
                    <Input.Password
                      name="password"
                      value={values.password}
                      onChange={(event) => handleChange(event)}
                      placeholder="Password"
                      iconRender={(visible) =>
                        visible ? <BiLockOpenAlt /> : <BiLockAlt />
                      }
                    />
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="store-btn"
                      onClick={(event) => handleSubmit(event)}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
                <div className="change-user">
                  <div className="admin-button">
                    <Link to="/adminLogin"></Link>
                    <FaUserTie
                      size={20}
                      color={
                        window.location.pathname === "/adminLogin"
                          ? "white"
                          : "black"
                      }
                    />
                  </div>
                  <div className="staff-button">
                    <Link to="/staffLogin">
                      <FaUsers size={18} color="black" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
