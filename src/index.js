import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Routes";
import reportWebVitals from "./reportWebVitals";
import "./i18next";
import Logo from "./Logo.png";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// redux setup
import { Provider } from "react-redux";
import configureStore from "./store/";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const store = configureStore();

// Secret id
const stripePromise = loadStripe(
  "EB1g-E5jdyBM7reXIxOnH971PZrRZ-2pawA4w09EVxPBnZ1r6KEowAIf-PN_KkNbV3hyEpS3yHu19BBw"
);
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "135px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};
ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <React.StrictMode>
        <Suspense
          fallback={
            <div>
              {" "}
              <img src={Logo} alt="logo" className="logo-img-main" />
            </div>
          }
        >
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </Suspense>
      </React.StrictMode>
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
