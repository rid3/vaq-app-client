import { useState, useEffect } from "react"
import { Link, useNavigate} from "react-router-dom"
import { getDetailsService } from "../services/public.services"

function PerfilMedicx (props) {

const { userId } = props

const navigate = useNavigate()

const [ useNombreCompleto, setNombreCompleto ] = useState(null)

useEffect (() => {
  getMedicxDetails()
}, [])

const getMedicxDetails = async () => {
  try {
    const response = await getDetailsService(userId)
    setNombreCompleto(response.data.nombreCompleto)
   
  } catch (err) {
    navigate("/error")
  }
}

if (!userId) {
  return <h3>...cargan2</h3>
}



  return (
    <div>
        <h1>Bievenidx {useNombreCompleto} a tu portal!</h1>

        <Link to={`/perfilmedicx/edit/${userId}`}>Editar Perfil</Link>
    </div>
  )
}

export default PerfilMedicx