//Packages
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import { ProjectHeader, SceneItem, NoItems, SegmentFilter } from "_molecules";
import { Main } from "_components";

// Constants
import Colors from "_constants/Colors";

import { SceneIcons } from "_assets";

const ScenesScreen = (props, { item, route, navigation }) => {
  let selectedScenes = useSelector((state) =>
    state.scenes.scenes.filter((scenes) => scenes.projectId === global.id)
  );

  let name;

  if (props.route.params !== undefined) {
    selectedScenes = props.route.params.fromSelected;
    name = <SegmentFilter props={props} text={"scenes"} screen={"Scenes"} />;
  }

  const renderProjectItem = (itemData) => {
    return (
      <SceneItem
        item={itemData.item}
        image={""}
        icons={SceneIcons}
        color={Colors.scenes}
        accent={Colors.scenesAccent}
        screen={"Scene Detail"}
        parent={"Detail"}
        navigation={props.navigation}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ProjectHeader
        color={Colors.scenes}
        headerText={"Scenes"}
        btnText={"+Add Scene"}
      />
      <Main style={styles.scrollView}>
        {name}
        {selectedScenes !== "undefined" && selectedScenes.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={selectedScenes}
            renderItem={renderProjectItem}
            numColumns={1}
          />
        ) : (
          <NoItems color={Colors.scenes} segName={"scene"} icon={"sce"} />
        )}
      </Main>
    </View>
  );
};

export default ScenesScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: "100%",
  },
  header: {
    backgroundColor: Colors.characters,
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollView: {
    height: "82%",
    alignSelf: "center",
  },
});
