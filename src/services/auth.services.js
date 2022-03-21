import axios from "axios";

//base de todas las llamadas a la API
const service = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/auth`
})

//esto nos permite enviar el token en cada request que se haga //solamente has esto si tienes el Token. y todos estos services los manda con el Token. 
//middleware. interceptor: antes que lo envies busca el token y mandalo con eso
service.interceptors.request.use((config) => {
    // aqui buscamos el token en localstorage
    const storedToken = localStorage.getItem("authToken")
    // si el toke existe lo agregamos a los headers del request
    config.headers = storedToken && { Authorization: `Bearer ${storedToken}` }
    return config;
  })


const signupMedicxService = (user) => {
    return service.post("/signup/medicx", user) //cuando paso user, le paso el req.body 
}

const singupClienteService = (user) => {
    return service.post("/signup/cliente", user) //cuando paso user, le paso el req.body 
}

const loginMedicxService = (user) => {
    return service.post(`/login/medicx`, user)
}

const loginClienteService = (user) => {
    return service.post(`/login/cliente`, user)
}

const verifyService = () => {
    return service.get("/verify")
}



export {
    signupMedicxService,
    singupClienteService,
    loginMedicxService,
    loginClienteService,
    verifyService

}