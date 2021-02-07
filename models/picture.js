class Picture {
  constructor(id, userId, sceneId, filename, uploadDatetime) {
    this.id = id;
    this.userId = userId;
    this.sceneId = sceneId;
    this.filename = filename;
    this.uploadDatetime = uploadDatetime;
  }
}

export default Picture;
