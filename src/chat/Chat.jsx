import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getAllMessagesService } from "../services/chat.services";

import io from "socket.io-client";
let socket; //variable global dentro del componente, donde se guarda todo el socket que creamos en el FE para mandárselo al BE

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
    socket = io.connect("http://localhost:5005", {
      extraHeaders: { Authorization: `Bearer ${storedToken}` }
    })

    //"emito" que me quiero agregar a un chat
    socket.emit("join_chat", chatId)

    socket.on("receive_message", (newMessage) => {
      setAllMessages(previousState => {
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
      <h3>Red de Medicxs</h3>

        <div>
          {allMessages.map((eachMessage) => {
              return (
                <div key={eachMessage._id}>
                  <p>{eachMessage.sender.nombreCompleto}: {eachMessage.text}</p>

                </div>
              );
            })}
        </div>

        <div>
          <input
            type="text"
            placeholder="Message..."
            name="text"
            value={text}
            onChange={handleChange}
          />
          <button onClick={sendMessage}>Enviar</button>
        </div>
    </div>
  );
}

export default Chat;