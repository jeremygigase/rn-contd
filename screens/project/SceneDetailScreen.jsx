import React, { useState } from "react";
import { StyleSheet, ScrollView, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import { TextReg, TextLight } from "_atoms";
import {
  DetailHeader,
  DetailSegmentItem,
  DetailRemarks,
  DetailImage,
  ModalPopup,
} from "_molecules";
import { Main } from "_components";

//Constants
import Colors from "_constants/Colors";

//Assets
import { Icons } from "_assets";

//ignoring virtualizedlist problem
//To Do: Delete when fixed
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const SceneDetailScreen = (props) => {
  const { icon, id } = props.route.params;

  const selectedScene = useSelector((state) =>
    state.scenes.scenes.filter((sce) => sce.id === id)
  );

  const characterIds = useSelector((state) =>
    state.scenesCharacters.scenesCharacters
      .filter((sceneCharacter) => sceneCharacter.sceneId === id)
      .map((chr) => chr.characterId)
  );

  const selectedCharacters = useSelector((state) =>
    state.characters.characters.filter((chr) => {
      return characterIds.includes(chr.id);
    })
  );

  const selectedLocation = useSelector((state) =>
    state.locations.locations.filter(
      (loc) => loc.id === selectedScene[0].locationId
    )
  );

  const selectedScriptDay = useSelector((state) =>
    state.scriptDays.scriptDays.filter(
      (loc) => loc.id === selectedScene[0].scriptDayId
    )
  );

  const selectedPictures = useSelector((state) =>
    state.pictures.pictures.filter((pct) => pct.sceneId === selectedScene[0].id)
  );

  const { sceneNumber, created, date, remarks } = selectedScene[0];

  const renderItem = (itemData) => {
    return (
      <View style={styles.item}>
        <ModalPopup image={itemData.item.filename} />
      </View>
    );
  };

  return (
    <Main style={styles.main}>
      <DetailHeader
        title={`Scene ${sceneNumber} id ${id}`}
        color={Colors.scenes}
        added={`Added on ${created} by member x`}
      />
      <View style={styles.characterContainer}>
        <View
          style={{
            height: "40%",
            width: "100%",
          }}>
          {selectedPictures !== "undefined" && selectedPictures.length > 0 ? (
            <FlatList
              keyExtractor={(item) => item.id}
              data={selectedPictures}
              renderItem={renderItem}
              numColumns={2}
            />
          ) : (
            <DetailImage image={""} icon={icon} />
          )}
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <TextLight>{date}</TextLight>
          <DetailSegmentItem
            selected={selectedCharacters}
            screen={"Characters"}
            detail={"Characters Overview"}
            name={sceneNumber}
            color={Colors.characters}
            icon={Icons["tabCharacterOn"]}
            navigation={props.navigation}
            text={"characters"}
          />
          <DetailSegmentItem
            selected={selectedLocation}
            screen={"Locations"}
            detail={"Locations Overview"}
            name={selectedLocation[0].name}
            color={Colors.locations}
            icon={Icons["tabLocationOn"]}
            navigation={props.navigation}
            text={"script days"}
          />
          <DetailSegmentItem
            selected={selectedScriptDay}
            screen={"Script Days"}
            detail={"Script Days Overview"}
            name={selectedScriptDay[0].name}
            color={Colors.scriptDays}
            icon={Icons["tabScriptDayOn"]}
            navigation={props.navigation}
            text={"script days"}
          />
          <DetailRemarks text={remarks} />
        </ScrollView>
      </View>
    </Main>
  );
};

export default SceneDetailScreen;

const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flex: 1,
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
  item: {
    margin: 20,
    width: "40%",
    height: "80%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  characterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flex: 1,
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
