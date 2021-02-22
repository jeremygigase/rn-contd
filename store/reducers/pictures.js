import { PICTURES } from "_data/dummy-data";
import {
  DELETE_PICTURE,
  CREATE_PICTURE,
  UPDATE_PICTURE,
  SET_PICTURES,
} from "_actions/pictures";
import Picture from "_models/picture";

const initialState = {
  pictures: PICTURES,
  scenePictures: PICTURES.filter((sce) => sce.sceneId === "4"),
};

// id,
// userId,
// sceneId,
// filename,
// uploadDatetime;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PICTURES:
      return {
        pictures: PICTURES,
        scenePictures: PROJECTS.filter((sce) => sce.sceneId === "4"),
      };
    case CREATE_PICTURE:
      const newPicture = new Picture(
        new Date().toString(),
        "3", //user
        "3", //scene
        action.pictureData.filename,
        new Date().toString()
      );
      return {
        ...state,
        pictures: state.pictures.concat(newPicture),
        scenePictures: state.scenePictures.concat(newPicture),
      };
    case UPDATE_PICTURE:
      const pictureIndex = state.scenePictures.findIndex(
        (sce) => sce.id === action.pid
      );

      const updatedPicture = new Picture(
        action.pid,
        state.scenePictures[pictureIndex].sceneId,
        "3", //change scene
        action.pictureData.filename,
        new Date().toString()
      );

      const updatedScenePictures = [...state.scenePictures];
      updatedScenePictures[pictureIndex] = updatedPictures;
      const allPicturesIndex = state.pictures.findIndex(
        (pic) => pic.id === action.pid
      );
      const updatedAllPictures = [...state.pictures];
      updatedAllPictures[allPicturesIndex] = updatedPicture;
      return {
        ...state,
        pictures: updatedAllPictures,
        scenePictures: updatedScenePictures,
      };
    case DELETE_PICTURE:
      return {
        ...state,
        scenePictures: state.scenePictures.filter(
          (sce) => sce.id !== action.pid
        ),
        pictures: state.pictures.filter((char) => char.id !== action.pid),
      };
  }
  return state;
};
