import { SCENES } from "_data/dummy-data";
import {
  DELETE_SCENE,
  CREATE_SCENE,
  UPDATE_SCENE,
  SET_SCENES,
} from "_actions/scenes";
import Scene from "_models/scene";

const initialState = {
  scenes: SCENES,
  projectScenes: SCENES.filter((sce) => sce.projectId === "3"),
};
// id,
// projectId,
// scriptDayId,
// locationId,
// created,
// sceneNumber,
// remarks,
// date;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCENES:
      return {
        scenes: action.scenes,
        projectScenes: scenes.filter((sce) => sce.projectId === "3"),
      };
    case CREATE_SCENE:
      console.log(action);
      const newScene = new Scene(
        new Date().toString(),
        action.sceneData.projectId, // DEZE KOMT WEL DOOR???
        action.sceneData.scriptDayId, //ScriptDay
        action.sceneData.locationId, // location
        new Date().toString(),
        action.sceneData.sceneNumber,
        action.sceneData.remarks,
        action.sceneData.date
      );
      return {
        ...state,
        scenes: state.scenes.concat(newScene),
        projectScenes: state.projectScenes.concat(newScene),
      };
    case UPDATE_SCENE:
      console.log(action);
      const sceneIndex = state.projectScenes.findIndex(
        (proj) => proj.id === action.sid
      );

      const updatedScene = new Scene(
        action.sid,
        state.projectScenes[sceneIndex].projectId,
        action.sceneData.scriptDayId,
        action.sceneData.locationId,
        state.projectScenes[sceneIndex].created,
        action.sceneData.sceneNumber,
        action.sceneData.remarks,
        action.sceneData.date
      );
      console.log(updatedScene);
      const updatedProjectScenes = [...state.projectScenes];
      updatedProjectScenes[sceneIndex] = updatedScene;
      const allScenesIndex = state.scenes.findIndex(
        (sce) => sce.id === action.sid
      );
      const updatedAllScenes = [...state.scenes];
      updatedAllScenes[allScenesIndex] = updatedScene;
      return {
        ...state,
        scenes: updatedAllScenes,
        projectScenes: updatedProjectScenes,
      };
    case DELETE_SCENE:
      return {
        ...state,
        projectScenes: state.projectScenes.filter(
          (proj) => proj.id !== action.sid
        ),
        scenes: state.scenes.filter((sce) => sce.id !== action.sid),
      };
  }
  return state;
};
