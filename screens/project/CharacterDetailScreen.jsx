//Packages
import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
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

import * as characterActions from "_store/actions/characters";
const CharacterDetailScreen = (props) => {
  //Get character with param id
  const selectedCharacter = useSelector((state) =>
    state.characters.characters.filter(
      (char) => char.id === props.route.params.id
    )
  );
  const { navigation } = props;

  const { icon } = props.route.params;

  const selectedMTM = useSelector((state) =>
    state.scenesCharacters.scenesCharacters.filter(
      (sceneCharacter) => sceneCharacter.characterId === props.route.params.id
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

  let actorName = null;
  let callsheetNumber = null;
  let characterName = null;
  let pictureFilename = null;
  let remarks = null;

  if (selectedCharacter[0]) {
    actorName = selectedCharacter[0].actorName;
    callsheetNumber = selectedCharacter[0].callsheetNumber;
    characterName = selectedCharacter[0].characterName;
    pictureFilename = selectedCharacter[0].pictureFilename;
    remarks = selectedCharacter[0].remarks;
  }

  // const {
  //   actorName,
  //   callsheetNumber,
  //   characterName,
  //   pictureFilename,
  //   remarks,
  // } = selectedCharacter[0];

  return (
    <Main style={styles.main}>
      <DetailHeader
        title={callsheetNumber + ". " + characterName}
        color={Colors.characters}
        added={"Added on xx/xx/xxxx by member x"}
        type={"character"}
        id={props.route.params.id}
        //hier ligt het probleem
        navigation={navigation}
        button={
          <Image
            source={Icons["edit"]}
            style={{
              width: 20,
              height: 20,
            }}
          />
        }
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
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
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
            <DetailRemarks color={Colors.characters} text={remarks} />
          </View>
        </ScrollView>
      </View>
    </Main>
  );
};

export default CharacterDetailScreen;

const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    width: "100%",
    backgroundColor: "white",
  },
  characterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: "transparent",
    paddingLeft: 20,
    paddingRight: 20,
    //paddingTop: 20,
  },
  scrollView: {
    height: "44%",
    width: "80%",
    alignSelf: "center",
    padding: 20,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
});
