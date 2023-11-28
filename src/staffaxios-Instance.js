import axios from "axios";

//Staff Login Token

var StaffToken = localStorage.getItem("StaffloginToken");
const axiosInstance = axios.create({
  // baseURL: process.env.PORT || " http://localhost:8001/",
  baseURL: process.env.PORT || "http://3.130.183.255/",
  headers: {
    "Content-Type": "application/json",
    authorization: `${StaffToken}`,
  },
});

export default axiosInstance;
