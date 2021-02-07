import { PROJECTS } from "_data/dummy-data";
//import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/projects';

const initialState = {
  projects: PROJECTS,
  //userProjects: PROJECTS.filter(pro => pro.ownerId === 'u1')
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
