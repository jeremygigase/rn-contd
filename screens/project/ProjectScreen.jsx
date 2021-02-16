//Packages
import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//Helpers
import { filterItemHandler } from "_helpers/select-item";

//Components
import { ProjectHeader, SegmentItem } from "_molecules";
import { Main } from "_components";

//Constants
import Colors from "_constants/Colors";

//Data
import { SCENECHARACTERS, CHARACTERS, LOCATIONS } from "_data/dummy-data";

//Assets
import { Icons, NoIcons } from "_assets";

const ProjectScreen = ({ route, navigation }) => {
  const id = route.params.id;
  global.id = id;

  const allProjects = useSelector((state) => state.projects.projects);
  const selectedProject = filterItemHandler(allProjects, id);

  const allScenes = useSelector((state) => state.scenes.scenes);
  const selectedScenes = allScenes.filter((scenes) => scenes.projectId === id);

  const sceneIds = selectedScenes.map((scene) => scene.id);
  const locationIds = selectedScenes.map((scene) => scene.locationId);

  const displayedSceneCharacters = SCENECHARACTERS.filter((sceneCharacter) => {
    return sceneIds.includes(sceneCharacter.sceneId);
  });

  const characterIds = displayedSceneCharacters.map(
    (sceneCharacter) => sceneCharacter.characterId
  );

  const displayedCharacters = CHARACTERS.filter((character) => {
    return characterIds.includes(character.id);
  });

  const displayedLocations = LOCATIONS.filter((loc) => {
    return locationIds.includes(loc.id);
  });

  const selectItemHandler = (screen) => {
    navigation.navigate(screen, {
      id: id,
    });
  };

  return (
    <View style={styles.projectScreen}>
      <ProjectHeader
        color={Colors.project}
        headerText={selectedProject[0].name}
        scnBtn
        type={"project"}
      />
      <Main>
        <View style={styles.segments}>
          <SegmentItem
            icon={Icons["tabSceneOn"]}
            color={Colors.scenes}
            amount={selectedScenes.length}
            text={"scenes shot"}
            onSelectSegment={() => selectItemHandler("Scenes")}
          />
          <SegmentItem
            icon={Icons["tabCharacterOn"]}
            color={Colors.characters}
            amount={displayedCharacters.length}
            text={"characters"}
            onSelectSegment={() => selectItemHandler("Characters")}
          />
          <SegmentItem
            icon={Icons["tabLocationOn"]}
            color={Colors.locations}
            amount={displayedLocations.length}
            text={"locations"}
            onSelectSegment={() => selectItemHandler("Locations")}
          />
          <SegmentItem
            icon={Icons["tabScriptDayOn"]}
            color={Colors.scriptDays}
            amount={selectedScenes.length}
            text={"script days"}
            onSelectSegment={() => selectItemHandler("Script Days")}
          />
        </View>

        <View style={styles.recentActivity}>
          <Text style={styles.title}> Recent Activity</Text>
          <Text> No Recent Activity</Text>
          <View>
            <Image source={NoIcons["rec"]} style={styles.image} />
          </View>
        </View>
      </Main>
    </View>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    height: 180,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
    overflow: "hidden",
  },
  segments: {
    marginTop: 8,
    width: "80%",
  },
  image: {
    width: 320, //160
    height: 250, //134
  },

  recentActivity: {
    marginTop: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  projectScreen: {
    flex: 1,
  },
});
