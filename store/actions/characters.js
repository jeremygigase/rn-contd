export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const CREATE_CHARACTER = "CREATE_CHARACTER";
export const UPDATE_CHARACTER = "UPDATE_CHARACTER";
export const SET_CHARACTERS = "SET_CHARACTERS";

// id,
// projectId,
// characterName,
// actorName,
// pictureFilename,
// callsheetNumber
// remarks

export const deleteCharacter = (characterId) => {
  return { type: DELETE_CHARACTER, cid: characterId };
};

export const createCharacter = (
  projectId,
  characterName,
  actorName,
  pictureFilename,
  callsheetNumber,
  remarks
) => {
  return {
    type: CREATE_CHARACTER,
    characterData: {
      projectId,
      characterName,
      actorName,
      pictureFilename,
      callsheetNumber,
      remarks,
    },
  };
};

export const updateCharacter = (
  id,
  characterName,
  actorName,
  pictureFilename,
  callsheetNumber,
  remarks
) => {
  return {
    type: UPDATE_CHARACTER,
    cid: id,
    characterData: {
      characterName,
      actorName,
      pictureFilename,
      callsheetNumber,
      remarks,
    },
  };
};
