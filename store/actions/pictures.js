export const DELETE_PICTURE = "DELETE_PICTURE";
export const CREATE_PICTURE = "CREATE_PICTURE";
export const UPDATE_PICTURE = "UPDATE_PICTURE";
export const SET_PICTURES = "SET_PICTURES";

// id,
// userId,
// sceneId,
// filename,
// uploadDatetime;

export const deletePicture = (pictureId) => {
  return { type: DELETE_PICTURE, pid: pictureId };
};

export const createPicture = (userId, sceneId, filename, uploadDatetime) => {
  return {
    type: CREATE_PICTURE,
    pictureData: {
      userId,
      sceneId,
      filename,
      uploadDatetime,
    },
  };
};

export const updatePicture = (
  id,
  userId,
  sceneId,
  filename,
  uploadDatetime
) => {
  return {
    type: UPDATE_PICTURE,
    cid: id,
    pictureData: {
      userId,
      sceneId,
      filename,
      uploadDatetime,
    },
  };
};
