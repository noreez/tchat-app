export const addMessage = (message, pseudo) => {
  return {
    type: 'ADD_MESSAGE',
    message,
    pseudo,
  };
};

export const removeMessage = index => {
  return {
    type: 'REMOVE_MESSAGE',
    index,
  };
};
