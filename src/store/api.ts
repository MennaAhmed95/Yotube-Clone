import axios from "axios";

console.log(process.env.DATA_API_KEY);
const httpRequest = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBdT9NVewzwHrcGzMTpsPmTWtgUwH_5MyM",
  },
});

export default httpRequest;
