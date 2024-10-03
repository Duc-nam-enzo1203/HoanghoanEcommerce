import axios from "axios";
export default axios.create({
  baseURL: "http://apixm.devmaster.vn/api",
  headers: { "Content-Type": "application/json" },
});
