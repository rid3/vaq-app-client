import axios from "axios";


const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/medicx`
})

//middleware. interceptor: antes que lo envies busca el token y mandalo con eso
service.interceptors.request.use((config) => {
    // aqui buscamos el token en localstorage
    const storedToken = localStorage.getItem("authToken")
    // si el token existe lo agregamos a los headers del request
    config.headers = storedToken && { Authorization: `Bearer ${storedToken}` }
    return config;
  })


//página editar perfil público
const updatePerfilService = (id, updatedPerfil ) => {
    return service.patch(`/${id}`, updatedPerfil)
}

const deleteCuentaService = (id) => {
    return service.delete(`${id}`)
}


export {
    updatePerfilService,
    deleteCuentaService
}