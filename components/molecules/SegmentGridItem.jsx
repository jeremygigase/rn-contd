//Packages
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";

//Components
import { TouchableComponent, TextReg, TextLight } from "_atoms";
//Assets
import { Icons } from "_assets";

const SegmentGridItem = (props) => {
  const {
    id,
    title,
    color,
    accent,
    icons,
    idSelector,
    screen,
    parent,
    navigation,
  } = props;
  let { image } = props;

  const randIcon = icons[Math.floor(Math.random() * icons.length)];

  let selectedScenes = "";
  let selectedSecond = "";
  if (idSelector === "sd") {
    selectedScenes = useSelector((state) =>
      state.scenes.scenes.filter((scene) => scene.scriptDayId === id)
    );

    selectedSecond = (
      <TextLight>
        In{" "}
        {
          [
            ...new Set(
              selectedScenes.map((selectedScene) => selectedScene.locationId)
            ),
          ].length
        }{" "}
        Locations
      </TextLight>
    );
  } else if (idSelector === "loc") {
    selectedScenes = useSelector((state) =>
      state.scenes.scenes.filter((scene) => scene.locationId === id)
    );

    selectedSecond = (
      <TextLight>
        In{" "}
        {
          [
            ...new Set(
              selectedScenes.map((selectedScene) => selectedScene.scriptDayId)
            ),
          ].length
        }{" "}
        Script Days
      </TextLight>
    );
  } else {
    selectedScenes = useSelector((state) =>
      state.scenesCharacters.scenesCharacters.filter(
        (sceneCharacter) => sceneCharacter.characterId === id
      )
    );

    const sceneIds = selectedScenes.map((scene) => scene.id);

    const displayedSel = useSelector((state) =>
      state.scenes.scenes.filter((sel) => {
        return sceneIds.includes(sel.id);
      })
    );

    selectedSecond = (
      <TextLight>
        In{" "}
        {
          [
            ...new Set(
              displayedSel.map((selectedScene) => selectedScene.scriptDayId)
            ),
          ].length
        }{" "}
        Script Days
      </TextLight>
    );
  }

  if (image === undefined || image === null || image === "") {
    image = <Image source={randIcon} style={styles.image} />;
  } else {
    image = <Image source={{ uri: image }} style={styles.image} />;
  }

  const selectItemHandler = () => {
    navigation.navigate(parent, {
      screen: screen,
      params: {
        id: id,
        icon: randIcon,
        scenes: selectedScenes,
      },
    });
  };

  return (
    <TouchableComponent
      style={styles.sceneItem}
      onSelectComponent={() => selectItemHandler()}>
      {image}

      <View style={styles.sceneInfo}>
        <View style={styles.titleBox}>
          <TextLight style={styles.title}>{title}</TextLight>
        </View>
        <View style={styles.textBox}>
          <Image
            source={Icons["tabSceneOn"]}
            style={{
              width: 16,
              height: 16,
              //backgroundColor: color,
            }}
          />
          <View style={styles.textBoxText}>
            <TextLight style={styles.text}>
              In {selectedScenes.length} Scenes
            </TextLight>
          </View>
        </View>
        <View style={styles.textBox}>
          <Image
            source={Icons["tabScriptDayOn"]}
            style={{
              width: 16,
              height: 16,
              //backgroundColor: color,
            }}
          />
          <View style={styles.textBoxText}>{selectedSecond}</View>
        </View>
      </View>
    </TouchableComponent>
  );
};

export default SegmentGridItem;

const styles = StyleSheet.create({
  sceneItem: {
    //height: "40%",
    width: "100%",
    //marginLeft: "8%",
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
  title: {
    fontFamily: "roboto-regular",
  },
  titleBox: {
    marginLeft: 8,
    marginTop: 8,
  },
  sceneInfo: {
    marginLeft: 8,
  },
  text: {
    fontFamily: "roboto-light",
  },
});
