export const DELETE_SCENE_CHARACTER = "DELETE_SCENE_CHARACTER";
export const CREATE_SCENE_CHARACTER = "CREATE_SCENE_CHARACTER";
export const UPDATE_SCENE_CHARACTER = "UPDATE_SCENE_CHARACTER";
export const SET_SCENE_CHARACTERS = "SET_SCENE_CHARACTERS";

// id,
// sceneId,
// characterId;

export const deleteSceneCharacter = (sceneCharacterId) => {
  return { type: DELETE_CHARACTER, sid: sceneCharacterId };
};

export const createSceneCharacter = (sceneId, characterId) => {
  return {
    type: CREATE_CHARACTER,
    sceneCharacterData: {
      sceneId,
      characterId,
    },
  };
};

export const updateSceneCharacter = (id, sceneId, characterId) => {
  return {
    type: UPDATE_CHARACTER,
    sid: id,
    sceneCharacterData: {
      sceneId,
      characterId,
    },
  };
};
