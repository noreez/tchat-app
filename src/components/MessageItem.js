import React from 'react';

function MessageItem({message}){
  return (
    <li>
      <h3>{message.pseudo}</h3>
      <h4>{message.message_send}</h4>
    </li>
  );
}

export default MessageItem;