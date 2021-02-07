class Character {
  constructor(
    id,
    projectId,
    characterName,
    actorName,
    pictureFilename,
    callsheetNumber
  ) {
    this.id = id;
    this.projectId = projectId;
    this.characterName = characterName;
    this.actorName = actorName;
    this.pictureFilename = pictureFilename;
    this.callsheetNumber = callsheetNumber;
  }
}

export default Character;
