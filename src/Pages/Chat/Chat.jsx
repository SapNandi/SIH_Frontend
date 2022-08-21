import React from "react";
import { useState } from "react";
import "./Chat.css";

const Chat = () => {

  const [chat, setChats] = useState([]);

  const data = {
    user_id : "12345",
    username : "Saptarshi Nandi",
    firstname : "saptarshi",
    lastname : "nandi",
  }

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">Conversations</div>
        </div>
      </div>

      <div className="Right-side-chat">Right Side</div>
    </div>
  );
};

export default Chat;
