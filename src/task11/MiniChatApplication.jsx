import { useState } from "react";
import "./MiniChatApplication.css";

function MiniChatApplication() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="div">
        
    <div className="chat-container">

        <div className="head">
            <h2>Mini Chat Application</h2>
        </div>
        
      

      

      <div className="message-list">
        <h3>Messages </h3>

        
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))
        )}
      </div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={sendMessage}>Send Message</button>
      </div>

       
    </div>

    <div className="message-count">

         {messages.length > 0 && (
          <p className="msg-count">{messages.length} message{messages.length !== 1 ? "s" : ""}</p>
        )}
    </div>



    
    </div>
  );
}

export default MiniChatApplication;