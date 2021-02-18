export const DELETE_SCRIPT_DAY = "DELETE_SCRIPT_DAY";
export const CREATE_SCRIPT_DAY = "CREATE_SCRIPT_DAY";
export const UPDATE_SCRIPT_DAY = "UPDATE_SCRIPT_DAY";
export const SET_SCRIPT_DAYS = "SET_SCRIPT_DAYS";

// id,
// projectId,
// name,
// remarks;

export const deleteScriptDay = (scriptDayId) => {
  return { type: DELETE_SCRIPT_DAY, sid: scriptDayId };
};

export const createScriptDay = (projectId, name, remarks) => {
  return {
    type: CREATE_SCRIPT_DAY,
    scriptDayData: {
      projectId,
      name,
      remarks,
    },
  };
};

export const updateScriptDay = (id, projectId, name, remarks) => {
  return {
    type: UPDATE_SCRIPT_DAY,
    sid: id,
    scriptDayData: {
      projectId,
      name,
      remarks,
    },
  };
};
