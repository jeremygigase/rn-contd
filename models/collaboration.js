class Collaboration {
  constructor(id, userId, projectId, role, request, sync) {
    this.id = id;
    this.userId = userId;
    this.projectId = projectId;
    this.role = role; // creator, viewer, editor
    this.request = request; //"send", accepted, denied
    this.sync = sync; // bool
  }
}

export default Collaboration;
