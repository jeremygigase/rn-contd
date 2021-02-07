import { SCENES } from "_data/dummy-data";
//import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/projects';

const initialState = {
  scenes: SCENES,
  //userProjects: PROJECTS.filter(pro => pro.ownerId === 'u1')
};

const scenesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default scenesReducer;
