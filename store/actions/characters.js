export const ADD_TO_LIST = "ADD_TO_LIST";

export const addToList = (character) => {
  return { type: ADD_TO_LIST, character: character };
};
