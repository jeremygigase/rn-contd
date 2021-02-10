//Packages
import React from "react";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//Components
import { TouchableComponent, TextReg, TextLight, TextBold } from "_atoms";

//Constants
import Colors from "_constants/Colors";

//Assets
import { Icons } from "_assets";

const SceneItem = (props) => {
  const { id, name, scriptDayId, date, sceneNumber } = props.item;
  let { image } = props;
  const { icons, color, accent, navigation, screen, parent } = props;

  //arr.find(callback[, thisArg]) geeft eerst item mss handig voor afbeelding

  const randIcon = icons[Math.floor(Math.random() * icons.length)];

  const selectItemHandler = () => {
    navigation.navigate(parent, {
      screen: screen,
      params: {
        id: id,
        icon: randIcon,
      },
    });
  };

  const selectedScriptDay = useSelector((state) =>
    state.scriptDays.scriptDays.filter((sd) => sd.id === scriptDayId)
  );

  let sd = <Text> no Script Day found </Text>;

  if (selectedScriptDay[0] !== "undefined") {
    sd = <Text>{selectedScriptDay[0].name}</Text>;
  }

  if (image === undefined || image === null || image === "") {
    const randIcon = icons[Math.floor(Math.random() * icons.length)];
    image = <Image source={randIcon} style={styles.image} />;
  } else {
    image = <Image source={{ uri: image }} style={styles.image} />;
  }

  return (
    <TouchableComponent
      style={styles.sceneItem}
      onSelectComponent={() => selectItemHandler()}>
      {image}
      <View style={styles.sceneInfo}>
        <View style={styles.titleBox}>
          <TextLight>{date}</TextLight>
        </View>
        <View style={styles.textBox}>
          <Image
            source={Icons["sDScene"]}
            style={{
              width: 16,
              height: 16,
              backgroundColor: Colors.scenes,
            }}
          />
          <View style={styles.textBoxText}>
            <TextLight>Scene {sceneNumber}</TextLight>
          </View>
        </View>
        <View style={styles.textBox}>
          <Image
            source={Icons["sDRev"]}
            style={{
              width: 16,
              height: 16,
              backgroundColor: Colors.scenes,
            }}
          />
          <View style={styles.textBoxText}>
            <TextLight>SD {sd}</TextLight>
          </View>
        </View>
      </View>
    </TouchableComponent>
  );
};

export default SceneItem;

const styles = StyleSheet.create({
  sceneItem: {
    //height: "40%",
    width: "80%",
    marginLeft: "10%",
    marginTop: "4%",
    overflow: "hidden",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e8e6e1",
    paddingBottom: "4%",
  },
  image: {
    //alignItems: "flex-start",
    width: "40%", //160
    height: "100%", //134
  },
  textBox: {
    margin: 8,
    //width: "88%",
    padding: 4,
    borderRadius: 8,
    flexDirection: "row",
  },
  textBoxText: {
    marginLeft: 8,
  },
  titleBox: {
    marginLeft: 8,
    marginTop: 8,
  },
  sceneInfo: {
    marginLeft: 8,
  },
});
