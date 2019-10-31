import React from 'react';

function MessageItem({message}){
  return (
    
    <li
      style={{
        marginBottom: 10,
        backgroundColor: 'black',
        padding: 10,
      }}
    >
      <small>{message.username}</small>
      <div>{message.message}</div>
    </li>
  );
}

export default MessageItem;