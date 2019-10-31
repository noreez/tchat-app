export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (message, username) => {
  return {
    type: ADD_MESSAGE,
    message,
    username,
  };
};
