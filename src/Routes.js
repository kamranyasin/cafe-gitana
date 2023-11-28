// import "./Main.css";
import "./style.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "antd/dist/antd.css";
// User Routes
import Home from "./Pages/Home";
import HomeTwo from "./Pages/Hometwo";

import MainPage from "./Pages/Mainpage";
import Contactus from "./Pages/ContactUs";
import Menu from "./Pages/Menu";
import Onlinestore from "./Pages/Onlinestore";
import NotFound from "./Pages/404";
import OurSpeciality from "./Pages/OurSpecialities";
import AboutUs from "./Pages/aboutsUs";
import Store from "./Pages/Store";
import Usermenu from "./Pages/UserMenu";
import Cart from "./Pages/cart";
import Checkout from "./Pages/checkout/checkout";
import tempCheckout from "./Pages/checkout/tempPayment";
//Admin Routes
import AdminLogin from "../src/auth/adminLogin";
import Dashbaord from "./admin/adminlayout";
import AdminOnlineStore from "../src/admin/adminonlinestore";
import AdminOurSpeclity from "../src/admin/adminOurSpeciality";
import AdminStore from "../src/admin/store";
import AdminMenuOrder from "../src/admin/adminmenuorder";
import AdminOrdersQueue from "../src/admin/adminOrdersQueue";
import TermAndCondition from "../src/admin/adminTermAndCondition";

import SupportChat from "../src/admin/supportChats/SupportChats";
import ChatBox from "../src/admin/chatBox/ChatBox";

// Staff Routes

import StaffLogin from "../src/auth/staffLogin";
import StaffLayout from "../src/staff/stafflayout";
import StaffOrder from "../src/staff/stafforder";

//Context Api
import ContextApiProvider from "./ContextApi/ContextApi";

import { MyChatWidget } from "./Components/MyChatWidget/MyChatWidget";
import Sound from "react-sound";
import { BASE_URL } from "./config/";
import socketIOClient from "socket.io-client";
import Header from "../src/Components/Header/header";
import TermPolicy from "../src/Pages/termPolicy";
import StorePickup from "./admin/storePickUpOrder";
import { useLocation } from "react-router-dom";

function Routes() {
  const socket = socketIOClient(BASE_URL);

  const [check, setcheck] = useState({
    loginToken: localStorage.getItem("logintoken")
      ? localStorage.getItem("logintoken")
      : null,
    isShow: true,
  });
  const [staffcheck, setstaffcheck] = useState({
    loginToken: localStorage.getItem("stafflogintoken")
      ? localStorage.getItem("stafflogintoken")
      : null,
    isShow: true,
  });
  const [newMessage, setNewMessage] = useState("");
  const [play, setPlay] = useState(false);

  console.log(check.loginToken);
  console.log(localStorage.getItem("stafflogintoken"));

  useEffect(() => {
    if (!localStorage.getItem("USERID"))
      localStorage.setItem("USERID", "USER" + new Date().getTime());
    socket.emit("join", { userid: localStorage.getItem("USERID") });
    socket.on("chats", (data) => {
      setPlay(true);
      setNewMessage(data);
    });
  }, [newMessage]);

  return (
    <ContextApiProvider>
      <Router>
        <React.Fragment>
          {
            //Admin Routes
            check.loginToken ? (
              <Switch>
                <Dashbaord>
                  <Route
                    exact
                    path="/dashboard"
                    render={() => {
                      if (check.loginToken) return <AdminOnlineStore />;
                      else return <Redirect to="/adminLogin" />;
                    }}
                  />
                  <Route
                    exact
                    path="/adminOurSpeciality"
                    render={() => {
                      if (check.loginToken) return <AdminOurSpeclity />;
                      else return <Redirect to="/adminLogin" />;
                    }}
                  />
                  <Route
                    exact
                    path="/adminStore"
                    render={() => {
                      if (check.loginToken) return <AdminStore />;
                      else return <Redirect to="/adminLogin" />;
                    }}
                  />
                  <Route
                    exact
                    path="/adminmenuorder"
                    render={() => {
                      if (check.loginToken) return <AdminMenuOrder />;
                      else return <Redirect to="/adminLogin" />;
                    }}
                  />
                  <Route
                    exact
                    path="/ordersQueue"
                    render={() => {
                      if (check.loginToken) return <AdminOrdersQueue />;
                      else return <Redirect to="/adminLogin" />;
                    }}
                  />
                  <Route
                    exact
                    path="/storepickup"
                    render={() => {
                      if (check.loginToken) return <StorePickup />;
                      else return <Redirect to="/adminLogin" />;
                    }}
                  />
                  <Route
                    exact
                    path="/support-chats"
                    render={() => {
                      if (check.loginToken) return <SupportChat />;
                      else return <Redirect to="/adminLogin" />;
                    }}
                  />
                  <Route
                    exact
                    path="/termAndCondition"
                    render={() => {
                      if (check.loginToken) return <TermAndCondition />;
                      else return <Redirect to="/adminLogin" />;
                    }}
                  />
                  <Route
                    exact
                    path="/chat-box/:id"
                    render={() => {
                      if (check.loginToken) return <ChatBox />;
                      else return <Redirect to="/chat-box/:id" />;
                    }}
                  />
                </Dashbaord>
              </Switch>
            ) : (
              <div>
                {/* Staff Routes */}
                {staffcheck.loginToken ? (
                  <StaffLayout>
                    <Route
                      exact
                      path="/staffOrder"
                      render={() => {
                        if (staffcheck.loginToken) return <StaffOrder />;
                        else return <Redirect to="/staffLogin" />;
                      }}
                    />
                  </StaffLayout>
                ) : (
                  // User Routes
                  <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/aboutus" component={AboutUs} />
                    <Route exact path="/contactUs" component={Contactus} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/homeTwo" component={HomeTwo} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/termpolicy" component={TermPolicy} />
                    <Route
                      exact
                      path="/tempCheckout"
                      component={tempCheckout}
                    />
                    <Route
                      exact
                      path="/ourSpeciality"
                      component={OurSpeciality}
                    />
                    <Route exact path="/onlinestore" component={Onlinestore} />
                    <Route exact path="/store" component={Store} />
                    {/* Admin Login */}
                    <Route exact path="/adminLogin" component={AdminLogin} />
                    {/* Staff Login  */}
                    <Route exact path="/staffLogin" component={StaffLogin} />
                    <Route exact path="/UserMenu" component={Usermenu} />
                    <Route exact path="*" component={NotFound} />{" "}
                  </Switch>
                )}
              </div>
            )
          }
        </React.Fragment>
      </Router>
      {check.loginToken ? null : <MyChatWidget newMessage={newMessage} />}
      <Sound
        url={
          "https://www.stockringtone.com/download/messages-ringtones/4108/Sms_Tone_Mp3_Ringtone"
        }
        playStatus={play ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setPlay(false)}
      />
    </ContextApiProvider>
  );
}

export default Routes;
