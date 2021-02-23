//Packages
import React, { useState } from "react";
import { StyleSheet, ScrollView, FlatList, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import { TextReg, TextLight } from "_atoms";
import { DetailHeader, NoItems, SceneItem } from "_molecules";
import { Main } from "_components";

//Constants
import Colors from "_constants/Colors";

//Assets
import { SceneIcons } from "_assets";

const ScriptDayDetailScreen = (props) => {
  const selectedScriptDay = useSelector((state) =>
    state.scriptDays.scriptDays.filter(
      (scr) => scr.id === props.route.params.id
    )
  );

  let id = null;
  let name = null;
  let remarks = null;

  if (selectedScriptDay[0]) {
    id = selectedScriptDay[0].id;
    name = selectedScriptDay[0].name;
    remarks = selectedScriptDay[0].remarks;
  }

  const selectedScenes = useSelector((state) =>
    state.scenes.scenes.filter((scn) => {
      return scn.scriptDayId === id;
    })
  );

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
    <Main style={styles.scrollView}>
      <DetailHeader
        title={name}
        color={Colors.scriptDays}
        added={"Added on xx/xx/xxxx by member x"}
        type={"script day"}
        id={props.route.params.id}
        navigation={props.navigation}
      />
      {selectedScenes !== "undefined" && selectedScenes.length > 0 ? (
        <FlatList
          keyExtractor={(item) => item.id}
          data={selectedScenes}
          renderItem={renderProjectItem}
          numColumns={1}
        />
      ) : (
        <NoItems color={Colors.scenes} segName={"scenes"} icon={"sce"} />
      )}
    </Main>
  );
};

export default ScriptDayDetailScreen;

const styles = StyleSheet.create({
  scrollView: {
    height: "90%",
    alignSelf: "center",
    //padding: 20,
  },
});
