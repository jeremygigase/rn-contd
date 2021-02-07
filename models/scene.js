class Scene {
  constructor(
    id,
    projectId,
    scriptDayId,
    locationId,
    created,
    sceneNumber,
    remarks,
    date
  ) {
    this.id = id;
    this.projectId = projectId;
    this.scriptDayId = scriptDayId;
    this.locationId = locationId;
    this.created = created;
    this.sceneNumber = sceneNumber;
    this.remarks = remarks;
    this.date = date;
  }
}

export default Scene;
