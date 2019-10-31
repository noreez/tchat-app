import React from 'react';

function MessageItem({message}){
  return (
    <li>
      <h3>{message.username}</h3>
      <h4>{message.message}</h4>
    </li>
  );
}

export default MessageItem;