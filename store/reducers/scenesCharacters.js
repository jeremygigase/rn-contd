import { SCENECHARACTERS } from "_data/dummy-data";
import {
  DELETE_SCENE_CHARACTER,
  CREATE_SCENE_CHARACTER,
  UPDATE_SCENE_CHARACTER,
  SET_SCENE_CHARACTERS,
} from "_actions/scenesCharacters";
import SceneCharacter from "_models/sceneCharacter";

const initialState = {
  scenesCharacters: SCENECHARACTERS,
  projectScenesCharacters: SCENECHARACTERS, //SCENECHARACTERS.filter(pro => pro.ownerId === 'u1')
};

// id,
// sceneId,
// characterId;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCENE_CHARACTERS:
      return {
        scenesCharacters: action.sceneCharacters,
        projectScenesCharacters: sceneCharacters,
      };
    case CREATE_SCENE_CHARACTER:
      const newSceneCharacter = new SceneCharacter(
        new Date().toString(),
        action.sceneCharacterData.sceneId,
        action.sceneCharacterData.characterId
      );
      return {
        ...state,
        scenesCharacters: state.scenesCharacters.concat(newSceneCharacter),
        projectScenesCharacters: state.projectScenesCharacters.concat(
          newSceneCharacter
        ),
      };
    case UPDATE_SCENE_CHARACTER:
      const sceneCharacterIndex = state.projectSceneCharacters.findIndex(
        (proj) => proj.id === action.sid
      );

      const updatedSceneCharacter = new SceneCharacter(
        action.sid,
        //state.projectCharacters[characterIndex].projectId,
        action.sceneCharacterData.sceneId,
        action.sceneCharacterData.characterId
      );
      const updatedProjectScenesCharacters = [...state.projectScenesCharacters];
      updatedProjectScenesCharacters[
        sceneCharacterIndex
      ] = updatedSceneCharacter;
      const allScenesCharactersIndex = state.scenesCharacters.findIndex(
        (sce) => sce.id === action.sid
      );
      const updatedAllScenesCharacters = [...state.scenesCharacters];
      updatedAllScenesCharacters[
        allScenesCharactersIndex
      ] = updatedSceneCharacter;
      return {
        ...state,
        scenesCharacters: updatedAllScenesCharacters,
        projectScenesCharacters: updatedProjectScenesCharacters,
      };
    case DELETE_SCENE_CHARACTER:
      return {
        ...state,
        projectScenesCharacters: state.projectScenesCharacters.filter(
          (pro) => pro.id !== action.sid
        ),
        scenesCharacters: state.scenesCharacters.filter(
          (sce) => sce.id !== action.sid
        ),
      };
  }
  return state;
};
