//import Character from "_models/character";

export const DELETE_LOCATION = "DELETE_LOCATION ";
export const CREATE_LOCATION = "CREATE_LOCATION ";
export const UPDATE_LOCATION = "UPDATE_LOCATION ";
export const SET_LOCATIONS = "SET_LOCATIONS";

// id,
// projectId,
// name,
// remarks;

export const deleteLocation = (locationId) => {
  return { type: DELETE_LOCATION, lid: locationId };
};

export const createLocation = (projectId, name, remarks) => {
  return {
    type: CREATE_LOCATION,
    locationData: {
      projectId,
      name,
      remarks,
    },
  };
};

export const updateLocation = (id, projectId, name, remarks) => {
  return {
    type: UPDATE_LOCATION,
    lid: id,
    locationData: {
      projectId,
      name,
      remarks,
    },
  };
};
