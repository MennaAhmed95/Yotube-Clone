import axios from "axios";

console.log(process.env.DATA_API_KEY);
const httpRequest = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyCxGSsMKzGMhX0v5-CS0NvphP14C4ePrDs",
  },
});

export default httpRequest;
