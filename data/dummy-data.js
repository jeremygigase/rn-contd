//Models
import Character from "_models/character";
import Location from "_models/location";
import Picture from "_models/picture";
import Project from "_models/project";
import Scene from "_models/scene";
import SceneCharacter from "_models/sceneCharacter";
import ScriptDay from "_models/scriptDay";

export const CHARACTERS = [
  // id,
  // projectId,
  // characterName,
  // actorName,
  // pictureFilename,
  // callsheetNumber
  //characters
  new Character(
    "1",
    "1",
    "Spike Spiegel",
    "Steven Blum",
    "https://i.pinimg.com/originals/09/1b/70/091b7031232b73a19bddcf5e43c7a5bc.jpg",
    "1",
    "remarks hier"
  ),
  new Character(
    "2",
    "1",
    "Jet Black",
    "Iemand Jet",
    "https://cdn.myanimelist.net/images/characters/11/253723.jpg",
    "2",
    "remarks hier"
  ),
  new Character(
    "3",
    "3",
    "Anna",
    "Alejandra Theus",
    "https://www.writersunlimited.nl/thumbs/700x700r/2017/12/20171207170236_1.jpg",
    "1",
    "remarks hier"
  ),
  new Character(
    "4",
    "3",
    "Lou",
    "Kes Bakker",
    "https://www.writersunlimited.nl/thumbs/700x700r/2017/12/20171207170236_1.jpg",
    "6",
    "remarks hier"
  ),
  new Character(
    "5",
    "3",
    "Vic",
    "Mo Bakker",
    "https://www.writersunlimited.nl/thumbs/700x700r/2017/12/20171207170236_1.jpg",
    "7",
    "remarks hier"
  ),
  new Character(
    "6",
    "3",
    "Nicole",
    "Tine Embrechts",
    "https://img.static-rmg.be/a/view/q100/w900/h600/2106760/tinee-png.png",
    "3",
    "remarks hier"
  ),
  new Character("7", "3", "Bob", "Man?", "", "15", "remarks hier"),
];
export const LOCATIONS = [
  new Location("1", "1", "Space"),
  new Location("2", "1", "Indoor House"),
  new Location("3", "3", "Huis Anna - Keuken", "ik ben een remark"),
  new Location("4", "3", "Huis Nicole", "ik ben een remark"),
];

export const PICTURES = [
  //id, userId, sceneId, filename, uploadDatetime
  new Picture(
    "1",
    "1",
    "1",
    "https://static.wikia.nocookie.net/cowboybebop/images/d/d1/Bebop_Exterior_Mars.png",
    "12/11/2020"
  ),
  new Picture(
    "2",
    "1",
    "1",
    "https://keukensdeabdij.be/images/keukens/blocks/modern/block1.jpg",
    "12/01/2020"
  ),
  new Picture(
    "3",
    "1",
    "5",
    "http://www.heremanskeukens.be/media/get/large/172/heremans-keukens-inarto.jpg",
    "12/01/2020"
  ),
  new Picture(
    "4",
    "1",
    "5",
    "https://www.goossens.be/sites/default/files/styles/slideshow/public/goossens_keukens_moderne_keuken_klant_4102_heymans_schraepen_hasselt_1.jpg",
    "12/01/2020"
  ),
  new Picture(
    "5",
    "1",
    "5",
    "https://www.goossens.be/sites/default/files/styles/slideshow/public/goossens_keukens_moderne_keuken_klant_3747_witters_serdons_peer_0.jpg",
    "12/01/2020"
  ),
  new Picture(
    "6",
    "1",
    "5",
    "https://keukensdeabdij.be/images/keukens/blocks/modern/block1.jpg",
    "12/01/2020"
  ),
  new Picture(
    "7",
    "1",
    "5",
    "https://keukensdeabdij.be/images/keukens/blocks/modern/block1.jpg",
    "12/01/2020"
  ),
  new Picture(
    "8",
    "1",
    "5",
    "https://keukensdeabdij.be/images/keukens/blocks/modern/block1.jpg",
    "12/01/2020"
  ),
];

export const PROJECTS = [
  new Project(
    "1",
    "Cowboy Bebop",
    "01/06/2001",
    "Hajime Yatate",
    "#ADDADF",
    "https://dazedimg-dazedgroup.netdna-ssl.com/1200/azure/dazed-prod/1290/3/1293538.jpg"
  ),
  new Project(
    "2",
    "Cowboy Bebop Live Action",
    "01/06/2019",
    "Hajime Yatate",
    "red",
    "https://upload.wikimedia.org/wikipedia/commons/7/76/Cowboy_Bebop_intertitle.jpg"
  ),
  new Project(
    "3",
    "Zie Mij Graag",
    "05/01/2021",
    "Lunia Gigase",
    "red",
    "https://img-opt.cdn.smartvod.com/smartvod/images/videoland/data/images/h/1/5cee33cd3d17c_355x530.jpg"
  ),
];

export const SCENES = [
  // id,projectId,scriptDayId,locationId,created,sceneNumber,remarks,date
  new Scene(
    "1",
    "1",
    "2",
    "1",
    "01/07/2001",
    "4.1",
    "Lorem Ipsum Baby",
    "06/01/2021"
  ),
  new Scene(
    "2",
    "1",
    "2",
    "2",
    "01/07/2019",
    "4.2",
    "Lorem Ipsum Baby",
    "08/01/2021"
  ),
  new Scene(
    "3",
    "3",
    "1",
    "3",
    "01/07/2019",
    "8.3",
    "Lorem Ipsum Baby",
    "05/01/2021"
  ),
  new Scene(
    "4",
    "3",
    "3",
    "4",
    "12/01/2021",
    "8.1",
    "boekentas Vic flyer mamarun alf opgegeten zelf gebakken wafelvoetbaltas Vvoetbaltas L",
    "14/01/2021"
  ),
  new Scene("5", "3", "3", "3", "12/01/2021", "8.2", "", "13/01/2021"),
  new Scene("6", "3", "3", "3", "12/01/2021", "8.4", "", "22/01/2021"),
];

export const SCENECHARACTERS = [
  //id, sceneId, characterId
  //new SceneCharacter("1", "1", "1"),
  //new SceneCharacter("2", "1", "2"),
  new SceneCharacter("3", "4", "3"),
  new SceneCharacter("4", "4", "4"),
  new SceneCharacter("5", "4", "5"),
  new SceneCharacter("6", "5", "4"),
  new SceneCharacter("7", "5", "6"),
  new SceneCharacter("8", "3", "3"),
];

export const SCRIPTDAYS = [
  //id, projectId, name
  new ScriptDay("1", "1", "Day 3"),
  new ScriptDay("2", "1", "Day 0"),
  new ScriptDay("3", "3", "Day 4"),
];
