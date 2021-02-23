import { SCRIPTDAYS } from "_data/dummy-data";
import {
  DELETE_SCRIPT_DAY,
  CREATE_SCRIPT_DAY,
  UPDATE_SCRIPT_DAY,
  SET_SCRIPT_DAYS,
} from "_actions/scriptDays";
import ScriptDay from "_models/scriptDay";

const initialState = {
  scriptDays: SCRIPTDAYS,
  projectScriptDays: SCRIPTDAYS.filter(
    (pro) => pro.projectId === "3" //global.id
  ),
};

// id,
// projectId,
// name,
// remarks;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCRIPT_DAYS:
      return {
        scriptDays: action.scriptDays,
        projectScriptDays: action.projectScriptDays.filter(
          (pro) => pro.projectId === "3" //global.id
        ),
      };
    case CREATE_SCRIPT_DAY:
      const newScriptDay = new ScriptDay(
        new Date().toString(),
        action.scriptDayData.projectId,
        action.scriptDayData.name,
        action.scriptDayData.remarks
      );
      return {
        ...state,
        scriptDays: state.scriptDays.concat(newScriptDay),
        projectScriptDays: state.projectScriptDays.concat(newScriptDay),
      };
    case UPDATE_SCRIPT_DAY:
      const scriptDayIndex = state.projectScriptDays.findIndex(
        (proj) => proj.id === action.sid
      );

      const updatedScriptDay = new ScriptDay(
        action.sid,
        state.projectScriptDays[scriptDayIndex].projectId,
        action.scriptDayData.name,
        action.scriptDayData.remarks
      );
      const updatedProjectScripDays = [...state.projectScriptDays];
      updatedProjectScripDays[scriptDayIndex] = updatedScriptDay;
      const allScriptDaysIndex = state.scriptDays.findIndex(
        (scr) => scr.id === action.sid
      );
      const updatedAllScriptDays = [...state.scriptDays];
      updatedAllScriptDays[allScriptDaysIndex] = updatedScriptDay;
      return {
        ...state,
        scriptDays: updatedAllScriptDays,
        projectScriptDays: updatedProjectScripDays,
      };
    case DELETE_SCRIPT_DAY:
      return {
        ...state,
        projectScriptDays: state.projectScriptDays.filter(
          (proj) => proj.id !== action.sid
        ),
        scriptDays: state.scriptDays.filter((scr) => scr.id !== action.sid),
      };
  }
  return state;
};
