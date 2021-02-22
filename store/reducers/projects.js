import { PROJECTS } from "_data/dummy-data";
import {
  DELETE_PROJECT,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  SET_PROJECTS,
} from "_actions/characters";
import Project from "_models/project";

const initialState = {
  projects: PROJECTS,
  userProjects: PROJECTS,
};

// id,
// name,
// created,
// color,
// imageFilename

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        projects: action.projects,
        userProjects: projects,
      };
    case CREATE_PROJECT:
      const newProject = new Project(
        new Date().toString(),
        action.projectData.name,
        new Date().toString(),
        action.projectData.color,
        action.projectData.imageFilename
      );

      return {
        ...state,
        projects: state.projects.concat(newProject),
        userProjects: state.userProjects.concat(newProject),
      };
    case UPDATE_PROJECT:
      const projectIndex = state.userProjects.findIndex(
        (proj) => proj.id === action.pid
      );

      const updatedProject = new Project(
        action.pid,
        //state.userProjects[projectIndex].projectId,
        action.projectData.name,
        action.projectData.color,
        action.projectData.imageFilename
      );
      const updatedProjects = [...state.projects];
      updatedProjects[projectIndex] = updatedProject;
      const allProjectsIndex = state.projects.findIndex(
        (pro) => pro.id === action.pid
      );
      const updatedAllProjects = [...state.projects];
      updatedAllProjects[allProjectsIndex] = updatedProject;
      return {
        ...state,
        projects: updatedAllProjects,
        userProjects: updatedProjects,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter((pro) => pro.id !== action.pid),
        projects: state.projects.filter((pro) => pro.id !== action.pid),
      };
  }
  return state;
};
