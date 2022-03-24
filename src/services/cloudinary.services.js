import axios from "axios";

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/img`
})


const uploadImage = (file) => {
    return service.post("/upload", file)
  };


  export {
      uploadImage
  }