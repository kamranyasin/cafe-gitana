import React, { useState } from "react";
import { Modal, Button } from "antd";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));
function Menu(props) {
  const { t, i18n } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const classes = useStyles();
  new Typewriter("#typewriter", {
    strings: ["Hello", "World"],
    autoStart: true,
  });
  return (
    <div>
      <Modal
        footer={false}
        title="Menu"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Me.63")}</h5>
              </div>
              <div className="col-8  text-center">
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Men.64")}</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  label="SurName"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Menu.65")}</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Menus.66")}</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 contact-name-center">
                <h5 className="contact-h5">{t("Menuss.67")}</h5>
              </div>
              <div className="col-8 text-center">
                <TextField
                  id="outlined-basic"
                  label="Table Number"
                  variant="outlined"
                  className="text-field" //assign the width as your requirement
                />
              </div>
            </div>
            <div className="row  submit-btnn-row">
              <Link to="/home">
                <div className="submit-btn">{t("submit.62")}</div>
              </Link>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Menu;
