import { Link, useParams } from "react-router-dom"

function PerfilCliente(props) {

  const { userId } = props


  return (
    <div>
        <h1>Bienvenidx a tu perfil como cliente</h1>

        <Link to={`/perfilcliente/edit/${userId}`}>Editar Perfil</Link>
    </div>
  )
}

export default PerfilCliente