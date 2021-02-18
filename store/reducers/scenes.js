import { CHARACTERS } from "_data/dummy-data";
import {
  DELETE_CHARACTER,
  CREATE_CHARACTER,
  UPDATE_CHARACTER,
  SET_CHARACTERS,
} from "_actions/characters";
import Character from "_models/character";

const initialState = {
  characters: CHARACTERS,
  projectCharacters: CHARACTERS.filter((char) => char.projectId === "3"),
};

//id,
// name,
// created,
// creator,
// color,
// imageFilename

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        characters: action.characters,
        projectCharacters: characters.filter((char) => char.projectId === "3"),
      };
    case CREATE_CHARACTER:
      const newCharacter = new Character(
        new Date().toString(),
        "3",
        action.characterData.characterName,
        action.characterData.actorName,
        action.characterData.pictureFilename,
        action.characterData.callsheetNumber,
        action.characterData.remarks
      );
      console.log(newCharacter);
      return {
        ...state,
        characters: state.characters.concat(newCharacter),
        projectCharacters: state.projectCharacters.concat(newCharacter),
      };
    case UPDATE_CHARACTER:
      const characterIndex = state.projectCharacters.findIndex(
        (proj) => proj.id === action.cid
      );

      const updatedCharacter = new Character(
        action.cid,
        state.projectCharacters[characterIndex].projectId,
        action.characterData.characterName,
        action.characterData.actorName,
        action.characterData.pictureFilename,
        action.characterData.callsheetNumber,
        action.characterData.remarks
      );
      //console.log(updatedCharacter);
      const updatedProjectCharacters = [...state.projectCharacters];
      updatedProjectCharacters[characterIndex] = updatedCharacter;
      const allCharactersIndex = state.characters.findIndex(
        (char) => char.id === action.cid
      );
      const updatedAllCharacters = [...state.characters];
      updatedAllCharacters[allCharactersIndex] = updatedCharacter;
      return {
        ...state,
        characters: updatedAllCharacters,
        projectCharacters: updatedProjectCharacters,
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        projectCharacters: state.projectCharacters.filter(
          (proj) => proj.id !== action.cid
        ),
        characters: state.characters.filter((char) => char.id !== action.cid),
      };
  }
  return state;
};
