import axios from "axios";

// Admin Login token

var userToken = localStorage.getItem("loginToken");
const axiosInstance = axios.create({
  baseURL: process.env.PORT || "http://3.130.183.255/",

  // baseURL: process.env.PORT || "http://localhost:8001/",
  // sharukh baseURL: process.env.PORT || " http://3.12.140.217/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    crossorigin: true,
  },
});
// http://3.12.140.217/api/
// http://localhost:8001/
export default axiosInstance;
