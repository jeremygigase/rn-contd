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

const LocationDetailScreen = (props) => {
  const selectedLocation = useSelector((state) =>
    state.locations.locations.filter((loc) => loc.id === props.route.params.id)
  );

  const selectedScenes = useSelector((state) =>
    state.scenes.scenes.filter(
      (scn) => scn.locationId === props.route.params.id
    )
  );

  const scriptDaysIds = selectedScenes.map((scene) => scene.scriptDayId);

  const selectedScriptDays = useSelector((state) =>
    state.scriptDays.scriptDays.filter((sd) => {
      return scriptDaysIds.includes(sd.id);
    })
  );
  const { icon } = props.route.params;
  const { id, name } = selectedLocation[0];

  return (
    <Main style={styles.main}>
      <DetailHeader
        title={name + " id " + id}
        color={Colors.locations}
        added={"Added on xx/xx/xxxx by member x"}
      />
      <View style={styles.characterContainer}>
        <View
          style={{
            height: "40%",
            width: "100%",
          }}>
          <DetailImage image={""} icon={icon} />
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.scrollContainer}>
            <DetailTitleSegmentItem
              name={name}
              text={"area"}
              icon={Icons["tabLocationOn"]}
              color={Colors.locations}
            />
            <DetailSegmentItem
              selected={selectedScenes}
              screen={"Scenes"}
              detail={"Scenes Overview"}
              name={name}
              color={Colors.scenes}
              icon={Icons["tabSceneOn"]}
              navigation={props.navigation}
              text={"scenes"}
            />
            <DetailSegmentItem
              selected={selectedScriptDays}
              screen={"Script Days"}
              detail={"Script Days Overview"}
              name={name}
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

export default LocationDetailScreen;

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
});
