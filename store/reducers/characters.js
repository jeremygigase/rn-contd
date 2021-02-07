import { CHARACTERS } from "_data/dummy-data";
import { ADD_TO_LIST, SET_FILTERS } from "_actions/characters";

const initialState = {
  characters: CHARACTERS,
  //userProjects: PROJECTS.filter(pro => pro.ownerId === 'u1')
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default charactersReducer;
