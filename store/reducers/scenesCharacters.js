import { SCENECHARACTERS } from "_data/dummy-data";
//import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/projects';

const initialState = {
  scenesCharacters: SCENECHARACTERS,
  //userProjects: PROJECTS.filter(pro => pro.ownerId === 'u1')
};

const scenesCharactersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default scenesCharactersReducer;
