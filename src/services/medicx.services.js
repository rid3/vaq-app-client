import axios from "axios";


const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/medicx`
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