import React from 'react';
import MessageItem from './MessageItem';
import { connect } from 'react-redux';

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, key) => {
        return <MessageItem key={key} index={key} message={message} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    messages: state.message.messages,
  };
};

export default connect(mapStateToProps)(MessageList);
