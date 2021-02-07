import { LOCATIONS } from "_data/dummy-data";
//import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/projects';

const initialState = {
  locations: LOCATIONS,
  //userProjects: PROJECTS.filter(pro => pro.ownerId === 'u1')
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default locationsReducer;
