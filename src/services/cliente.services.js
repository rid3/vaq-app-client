import axios from "axios";

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/cliente`
})

service.interceptors.request.use((config) => { 
    const storedToken = localStorage.getItem("authToken")
    config.headers = storedToken && { Authorization: `Bearer ${storedToken}` }
    return config;
  })

const perfilprivClienteService = (id) => {
    return service.get(`/perfilcli/${id}`)
} 

const updatePerfilClienteService= (id, updatedPerfilCliente ) => {
    return service.patch(`/${id}`, updatedPerfilCliente)
}

const deleteCuentaClienteService = (id) => {
    return service.delete(`${id}`)
}

const guardarService = (id) => {
    return service.post(`/${id}/guardar`)
}


export  {
    updatePerfilClienteService,
    deleteCuentaClienteService,
    guardarService,
    perfilprivClienteService
}