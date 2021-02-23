import { LOCATIONS } from "_data/dummy-data";
import {
  DELETE_LOCATION,
  CREATE_LOCATION,
  UPDATE_LOCATION,
  SET_LOCATIONS,
} from "_actions/locations";
import Location from "_models/location";

const initialState = {
  locations: LOCATIONS,
  projectLocations: LOCATIONS.filter((loc) => loc.projectId === "3"),
};

// id,
// projectId,
// name,
// remarks;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return {
        locations: state.locations,
        projectLocations: locations.filter((loc) => loc.projectId === "3"),
      };
    case CREATE_LOCATION:
      const newLocation = new Location(
        new Date().toString(),
        action.locationData.projectId,
        action.locationData.name,
        action.locationData.remarks
      );
      return {
        ...state,
        locations: state.locations.concat(newLocation),
        projectLocations: state.projectLocations.concat(newLocation),
      };
    case UPDATE_LOCATION:
      const locationIndex = state.projectLocations.findIndex(
        (proj) => proj.id === action.lid
      );

      const updatedLocation = new Location(
        action.lid,
        state.projectLocations[locationIndex].projectId,
        action.locationData.name,
        action.locationData.remarks
      );
      const updatedProjectLocations = [...state.projectLocations];
      updatedProjectLocations[locationIndex] = updatedLocation;
      const allLocationsIndex = state.locations.findIndex(
        (loc) => loc.id === action.lid
      );
      const updatedAllLocations = [...state.locations];
      updatedAllLocations[allLocationsIndex] = updatedLocation;
      return {
        ...state,
        locations: updatedAllLocations,
        projectLocations: updatedProjectLocations,
      };
    case DELETE_LOCATION:
      return {
        ...state,
        projectLocations: state.projectLocations.filter(
          (proj) => proj.id !== action.lid
        ),
        locations: state.locations.filter((loc) => loc.id !== action.lid),
      };
  }
  return state;
};
