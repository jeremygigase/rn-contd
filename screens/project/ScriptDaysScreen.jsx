// Packages
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import {
  ProjectHeader,
  SegmentGridItem,
  NoItems,
  SegmentFilter,
} from "_molecules";
import { Main } from "_components";

// Constants
import Colors from "_constants/Colors";

import { ScriptDayIcons } from "_assets";

const ScriptDaysScreen = (props) => {
  const selectedScenes = useSelector((state) =>
    state.scenes.scenes.filter((scenes) => scenes.projectId === global.id)
  );

  const scriptDaysIds = selectedScenes.map((scene) => scene.scriptDayId);

  const allSelectedScriptDays = useSelector((state) =>
    state.scriptDays.scriptDays.filter((sd) => {
      return scriptDaysIds.includes(sd.id);
    })
  );

  let selectedScriptDays = allSelectedScriptDays;

  let name;

  if (props.route.params !== undefined) {
    selectedScriptDays = props.route.params.fromSelected;
    name = (
      <SegmentFilter
        props={props}
        text={"script days"}
        screen={"Script Days"}
      />
    );
  }

  const renderProjectItem = (itemData) => {
    return (
      <SegmentGridItem
        id={itemData.item.id}
        title={itemData.item.name}
        image={""}
        color={Colors.scriptDays}
        accent={Colors.locationsAccent}
        icons={ScriptDayIcons}
        idSelector={"sd"}
        icons={ScriptDayIcons}
        screen={"Script Day Detail"}
        parent={"Detail"}
        navigation={props.navigation}
      />
    );
  };

  return (
    <View>
      <ProjectHeader
        color={Colors.scriptDays}
        headerText={"Script Days"}
        btnText={"+Add Script Day"}
        scnBtn={1}
      />
      <Main style={styles.scrollView}>
        {name}

        {selectedScriptDays !== undefined && selectedScriptDays.length > 0 ? (
          <FlatList
            keyExtractor={(item) => item.id}
            data={selectedScriptDays}
            renderItem={renderProjectItem}
            numColumns={1}
          />
        ) : (
          <NoItems
            color={Colors.scriptDays}
            segName={"script day"}
            icon={"scr"}
          />
        )}
      </Main>
    </View>
  );
};

export default ScriptDaysScreen;

const styles = StyleSheet.create({
  scrollView: {
    height: "82%",
    alignSelf: "center",
  },
});
