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
      <TextLight>{date}</TextLight>
      <ScrollView>
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
    </Main>
  );
};

export default SceneDetailScreen;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    alignItems: "center",
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
});
