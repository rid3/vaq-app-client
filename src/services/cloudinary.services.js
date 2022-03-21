import axios from "axios";

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/img`
})

const errorHandler = (err) => {
    throw err;
  };

const uploadImage = (file) => {
    return service.post("/upload", file)
      .then(res => res.data)
      .catch(errorHandler);
  };


  export {
      uploadImage
  }