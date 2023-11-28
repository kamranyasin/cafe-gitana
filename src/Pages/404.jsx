import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";
import Logo from "../Asserts/Logo.png";
function NotFound(props) {
  return (
    <div>
      {/* <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          
        }
      /> */}

      <div
        className="container-fluid flex-direction align height"
        style={{ justifyContent: "center" }}
      >
        <div className="row text-center">
          <img src={Logo} alt="logo" className="logo-img-main" />
        </div>
        <div className="row text-center">
          <h2 className="erroor-heading">404</h2>
          <p>Sorry, the page you visited does not exist</p>
          <Link to="">
            <Button className="error-button" type="primary ">
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
