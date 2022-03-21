import axios from "axios";

const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/public`
})


//página con el display de todes les mediques registrades
const getAllMedicxsService = () => {
    return service.get("/perfilesmed")
}

//página de detalles del medique ( más información )
const getDetailsService = (id) => {
    return service.get(`/details/${id}`)
}



export {
    getAllMedicxsService,
    getDetailsService
}

