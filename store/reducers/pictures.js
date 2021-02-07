import { PICTURES } from "_data/dummy-data";
//import { ADD_TO_LIST, SET_FILTERS } from "../actions/characters";

const initialState = {
  pictures: PICTURES,
  //userProjects: PROJECTS.filter(pro => pro.ownerId === 'u1')
};

const picturesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default picturesReducer;
