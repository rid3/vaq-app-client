import axios from "axios";

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/cliente`
})

service.interceptors.request.use((config) => { 
    const storedToken = localStorage.getItem("authToken")
    config.headers = storedToken && { Authorization: `Bearer ${storedToken}` }
    return config;
  })


const updatePerfilClienteService= (id, updatedPerfilCliente ) => {
    return service.patch(`/${id}`, updatedPerfilCliente)
}

const deleteCuentaClienteService = (id) => {
    return service.delete(`${id}`)
}



export  {
    updatePerfilClienteService,
    deleteCuentaClienteService
}