import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { perfilprivClienteService } from "../services/cliente.services"

function PerfilCliente(props) {

  const { userId } = props

  const [ useClienteDetails, setClienteDetails ] = useState(null)
  const [ useMedicxs, setMedicxs ] = useState(null)
  const navigate = useNavigate()

  // props.setIsCliente(true)

  useEffect (() => {
    getClienteDetails()
  }, [])

  const getClienteDetails = async () => {

    try {
      const response = await perfilprivClienteService (userId)
      setClienteDetails(response.data.nombre)
      setMedicxs (response.data.medicxs)
      //console.log(response.data.medicxs.nombreCompleto) => da error
    } catch (err) {
      navigate("/error")
    }
  }

  if (!userId || !useClienteDetails) {
    return <h3>...cargan2</h3>
  }


  return (
    <div>
        <h1>Bienvenidx {useClienteDetails} a tu perfil como cliente</h1>

        <h3>¡Gracias por formar parte de esta red! <br /> Si llegas a tener algún inconveniente con algunx de les profesionales que se encuentran en nuestro listado, por favor mandanos un mail a : vamoaquidarno@gmail.com</h3>

        {/* { useMedicxs.map((eachMedicx) => {
          return (
            <div key = {eachMedicx._id}>
        <p>Médicxs guardadxs: {eachMedicx.nombreCompleto}</p>
            </div>
          )
        })
        } */}


        <Link to={`/perfilcliente/edit/${userId}`}>Editar Perfil</Link>
    </div>
  )
}

export default PerfilCliente