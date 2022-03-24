import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllMessagesService } from "../services/chat.services";
import io from "socket.io-client";

//variable global dentro del componente, donde se guarda todo el socket que creamos en el FE para mandárselo al BE
let socket; 

function Chat() {

  const [ allMessages, setAllMessages ] = useState([])
  const [ text, setText ] = useState("")

  const { chatId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getAllMessages()
    socketConnection()
  }, [])

  const socketConnection = () => {
    // establecemos el socket
    const storedToken = localStorage.getItem("authToken")
    socket = io.connect(process.env.REACT_APP_SOCKETURL, {
      extraHeaders: { Authorization: `Bearer ${storedToken}` }
    })

    socket.emit("join_chat", chatId)
    //"emito" que me quiero agregar a un chat

    socket.on("receive_message", (newMessage) => {
      setAllMessages(previousState => {
        console.log(newMessage)
        const newState = [...previousState, newMessage]
        return newState
      })
    })

  }

  const getAllMessages = async () => {
    // agarramos todos los mensajes de la BD con un service
    try {
      const response = await getAllMessagesService(chatId)
      setAllMessages(response.data)
    } catch(err) {
      navigate("/error")
    }
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const sendMessage = () => {
    console.log("Trying to send a message!")
    const messageObj = { text, chatId }
    socket.emit("send_message", messageObj)
    setText("")
  }

  return (
    <div>
      <h1>Red de Médicxs</h1>
      <hr />

        {/* <div className="chatMed" > */}
          {allMessages.map((eachMessage) => {
              return (
                <div className="chatMed"  key={eachMessage._id}>
                  <p>{eachMessage.sender.nombreCompleto}: {eachMessage.text}</p>
                  <br />
                  <br />
                </div>
              );
            })}
        {/* </div> */}

        <div>
          <hr /><hr /><hr />
          <input
            type="text"
            placeholder="Message..."
            name="text"
            value={text}
            onChange={handleChange}
          />
          <button onClick={sendMessage}>Enviar</button>
          <br />
          <br />
          <br />
          <hr /> <hr /><hr />
        </div>
    </div>
  );
}

export default Chat;