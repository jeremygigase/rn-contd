//Packages
import React, { useState } from "react";
import { StyleSheet, ScrollView, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import { TextReg, TextLight } from "_atoms";
import {
  DetailHeader,
  DetailTitleSegmentItem,
  DetailSegmentItem,
  DetailRemarks,
  DetailImage,
} from "_molecules";
import { Main } from "_components";

//Constants
import Colors from "_constants/Colors";

//Assets
import { Icons } from "_assets";
const CharacterDetailScreen = (props) => {
  //Get character with param id
  const selectedCharacter = useSelector((state) =>
    state.characters.characters.filter(
      (char) => char.id === props.route.params.id
    )
  );

  const { icon } = props.route.params;

  const selectedMTM = useSelector((state) =>
    state.scenesCharacters.scenesCharacters.filter(
      (sceneCharacter) => sceneCharacter.characterId === selectedCharacter[0].id
    )
  );

  const sceneIds = selectedMTM.map((slc) => slc.sceneId);

  const selectedScenes = useSelector((state) =>
    state.scenes.scenes.filter((sce) => {
      return sceneIds.includes(sce.id);
    })
  );

  const scriptDaysIds = selectedScenes.map((scene) => scene.scriptDayId);

  const selectedScriptDays = useSelector((state) =>
    state.scriptDays.scriptDays.filter((sd) => {
      return scriptDaysIds.includes(sd.id);
    })
  );

  const {
    actorName,
    callsheetNumber,
    characterName,
    pictureFilename,
  } = selectedCharacter[0];

  return (
    <Main style={styles.main}>
      <DetailHeader
        title={callsheetNumber + ". " + characterName}
        color={Colors.characters}
        added={"Added on xx/xx/xxxx by member x"}
      />
      <View style={styles.characterContainer}>
        <View
          style={{
            height: "40%",
            width: "100%",
            marginBottom: "2%",
          }}>
          <DetailImage image={pictureFilename} icon={icon} />
        </View>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <DetailTitleSegmentItem
              name={callsheetNumber + ". " + characterName}
              text={"Played by " + actorName}
              icon={Icons["tabCharacterOn"]}
              color={Colors.characters}
            />
            <DetailSegmentItem
              selected={selectedScenes}
              screen={"Scenes"}
              detail={"Scenes Overview"}
              name={characterName}
              color={Colors.scenes}
              icon={Icons["tabSceneOn"]}
              navigation={props.navigation}
              text={"scenes"}
            />
            <DetailSegmentItem
              selected={selectedScriptDays}
              screen={"Script Days"}
              detail={"Script Days Overview"}
              name={characterName}
              color={Colors.scriptDays}
              icon={Icons["tabScriptDayOn"]}
              navigation={props.navigation}
              text={"script days"}
            />
            <DetailRemarks color={Colors.characters} />
          </View>
        </ScrollView>
      </View>
    </Main>
  );
};

export default CharacterDetailScreen;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },

  header: {
    paddingTop: 16,
    paddingBottom: 16,
    width: "100%",
    backgroundColor: "white",
  },
  characterContainer: {
    height: "100%",
    width: "100%",
    marginTop: "4%",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: "4%",
  },
  scrollContainer: {
    alignItems: "center",
    marginBottom: "20%", // moet opgelost worden
  },
});
