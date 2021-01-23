import axios from "axios";

const instance = axios.create({
  baseURL: "https://cookscorner-reactjs-default-rtdb.firebaseio.com/",
});

export default instance;
