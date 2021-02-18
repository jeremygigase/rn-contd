export const DELETE_PROJECT = "DELETE_PROJECT";
export const CREATE_PROJECT = "CREATE_PROJECT";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const SET_PROJECTS = "SET_PROJECTS";

// id,
// name,
// created,
// creator,
// color,
// imageFilename

export const deleteProject = (projectId) => {
  return { type: DELETE_PROJECT, pid: projectId };
};

export const createProject = (name, created, creator, color, imageFilename) => {
  return {
    type: CREATE_PROJECT,
    projectData: {
      name,
      created,
      creator,
      color,
      imageFilename,
    },
  };
};

export const updateProject = (
  id,
  name,
  created,
  creator,
  color,
  imageFilename
) => {
  return {
    type: UPDATE_PROJECT,
    pid: id,
    projectData: {
      name,
      created,
      creator,
      color,
      imageFilename,
    },
  };
};
