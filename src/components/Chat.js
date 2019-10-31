import React from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";


const chat_interface = {
  borderRadius: 10,
  width: 800,
  backgroundColor: 'gray',
  padding: 60,
};

const Chat = () => {
  return (
    <div style={chat_interface}>
      <MessageList />
      <MessageBar />
    </div>
  );
};

export default Chat;