//import Character from "_models/SCENE";

export const DELETE_SCENE = "DELETE_SCENE";
export const CREATE_SCENE = "CREATE_SCENE";
export const UPDATE_SCENE = "UPDATE_SCENE";
export const SET_SCENES = "SET_SCENES";

// id,
// projectId,
// scriptDayId,
// locationId,
// created,
// sceneNumber,
// remarks,
// date;

export const deleteScene = (sceneId) => {
  return { type: DELETE_SCENE, sid: sceneId };
};

export const createScene = (
  projectId,
  scriptDayId,
  locationId,
  created,
  sceneNumber,
  remarks,
  date
) => {
  return {
    type: CREATE_SCENE,
    sceneData: {
      projectId,
      scriptDayId,
      locationId,
      created,
      sceneNumber,
      remarks,
      date,
    },
  };
};

export const updateScene = (
  id,
  projectId,
  scriptDayId,
  locationId,
  created,
  sceneNumber,
  remarks,
  date
) => {
  return {
    type: UPDATE_SCENE,
    sid: id,
    sceneData: {
      projectId,
      scriptDayId,
      locationId,
      created,
      sceneNumber,
      remarks,
      date,
    },
  };
};
