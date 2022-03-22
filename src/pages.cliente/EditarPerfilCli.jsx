import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deleteCuentaClienteService, updatePerfilClienteService, perfilprivClienteService } from "../services/cliente.services"


function EditarPerfilCli(props) {

  const [ nombre, setNombre ] = useState ("")
  const [ pronombres, setPronombres ] = useState("")
  const [ imgCliente, setImgCliente ] = useState("")

  const {id} = useParams()
  const navigate = useNavigate()

  const handleNombre = (e) => setNombre(e.target.value)
  const handlePronombres = (e) => setPronombres(e.target.value)
  const handleImgCliente = (e) => setImgCliente(e.target.value)

  useEffect(() => {
    getClienteDetails()
  },[])

  const getClienteDetails = async () => {

    try {
      const response = await perfilprivClienteService(id)
      setNombre (response.data.nombre)
      setPronombres(response.data.pronombres)
      setImgCliente(response.data.imgCliente)
    } catch (err) {
      navigate("/error")
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
     await updatePerfilClienteService (id, { nombre, pronombres, imgCliente })
      navigate("/")

        }catch(err) {
      navigate("/error")
    }
  }

  const handleOnClick = async () =>  {
    try {
      await deleteCuentaClienteService(id)
    } catch(err) {
      navigate("/error")
    }
  } 
  


  return (
    <div>

    <h2>Editar Perfil</h2>

    <form onSubmit={ handleSubmit }>

    <label htmlFor="nombre">Nombre: </label>
    <input type="text" name="nombre" value={nombre} onChange={ handleNombre } />
    <br />
    <br />

    <label htmlFor="pronombres">Pronombres: </label>
    <input type="text" name="pronombres" value={pronombres} onChange={ handlePronombres } />
    <br />
    <br />

    <label htmlFor="imgCliente">Imagen: </label>
    <input type="file" name="imgCliente" value={imgCliente} onChange={ handleImgCliente } />
    <br />
    <br />
    <br />
    <button>Editar Perfil</button>
    <br />
    <br />
    <br />

    <button onClick={ handleOnClick } >Eliminar cuenta </button>
    </form>




    </div>
  )
}

export default EditarPerfilCli