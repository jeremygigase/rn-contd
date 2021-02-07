import { SCRIPTDAYS } from "_data/dummy-data";
//import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/projects';

const initialState = {
  scriptDays: SCRIPTDAYS,
  //userProjects: PROJECTS.filter(pro => pro.ownerId === 'u1')
};

const scriptDaysReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default scriptDaysReducer;
