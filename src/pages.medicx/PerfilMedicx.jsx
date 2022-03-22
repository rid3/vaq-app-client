import { Link, useParams } from "react-router-dom"

function PerfilMedicx (props) {

const { userId } = props


  return (
    <div>
        <h1>Bievenidx a tu portal!</h1>

        <Link to={`/perfilmedicx/edit/${userId}`}>Editar Perfil</Link>
    </div>
  )
}

export default PerfilMedicx