import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getUsersService, startChatService } from "../services/chat.services"

//a les mediques por este rato del chat les decimos a veces users

function UserList() {
  const [users, setUsers] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await getUsersService()
      setUsers(response.data);
    } catch (err) {
      navigate("/error");
    }
  };

  const handleClick = async (user) => {
    console.log(`Trying to start a chat with ${user.nombreCompleto}`)
    try {
      const response = await startChatService(user._id) //id de usuario con quien quiero empezar a chatear
      navigate(`/chat/${response.data._id}`); //redirecciono al chat con la persona
    } catch(err) {
      navigate("/error");
    }
  }

  if (!users) {
    return <h3>...Loading</h3>
  }

  return (
    <div>
      <h1>Medicxs</h1>
    

      {users.map((eachUser) => {
          return (
            <div className= "medicxsListChat"  key={eachUser._id}>
              <h2><b>Nombre:</b> <Link to ={`/${eachUser._id}/details`}>{eachUser.nombreCompleto}</Link></h2>
              <p><b>Especialización:</b> {eachUser.especializacion}</p>
              <p><b>Provincia:</b> {eachUser.provincia}</p>
              <button onClick={() => handleClick(eachUser)}>Enviar Mensaje</button>
            </div>
          );
        })
      }
    </div>
  );
}

export default UserList;