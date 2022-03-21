
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { getAllMedicxsService } from "../services/public.services"



function PerfilesMed() {

    const [ allMedicxs, setAllMedicxs ] = useState (null)

    const navigate = useNavigate()


    //INTENTO DE BÚSQUEDA-------------------------------------

    // const [ medicxsToRender, setMedicxsToRender ] = useState(null)

    // const addMedicx = (medicx) => {
    //     setAllMedicxs ( [ ...allMedicxs,medicx ] )
    //     setMedicxsToRender ( [ ...allMedicxs, medicx ] )
    // }

    // const searchMedicxs = (searchQuery) => {
        
    //     const filteredMedicxs = allMedicxs.filter((eachMedicx) => {
    //         return eachMedicx.especializacion.includes(searchQuery)
    //     })
    //     setMedicxsToRender(filteredMedicxs)
    // }



    //-------------------------------------------------------------------



    useEffect (() => {
        getAllMedicxs()
    }, [])

    const getAllMedicxs = async () => {

        try {
            const response = await getAllMedicxsService()
            setAllMedicxs(response.data)
        } catch (err) {
            navigate("/error")
        }
    }

    if (!allMedicxs) {
        return <h4>...ya casi estamos</h4>
    }

  return (
  
  <div>
  <br />
  <br />
      {/* <Search searchMedicxs={searchMedicxs} /> */}
      <br />
      <br />
      
    { allMedicxs.map ((eachMedicx) => {
        return (
            <div key = {eachMedicx._id} >
            <h3>{eachMedicx.nombreCompleto}</h3>
            <p>Especializacion: {eachMedicx.especializacion}</p>
            <p>Provincia: {eachMedicx.provincia}</p>
            <Link to={`/${eachMedicx._id}/details`}>Más Información</Link>
            </div>
        )
    }) 
    }

    </div>
  )
}

export default PerfilesMed