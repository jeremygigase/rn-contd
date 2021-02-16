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

import { LocationIcons } from "_assets";

const LocationsScreen = (props) => {
  let selectedLocations = useSelector((state) =>
    state.locations.locations.filter(
      (locations) => locations.projectId === global.id
    )
  );

  let name;

  if (props.route.params !== undefined) {
    selectedLocations = props.route.params.fromSelected;
    name = (
      <SegmentFilter props={props} text={"locations"} screen={"Locations"} />
    );
  }

  const renderProjectItem = (itemData) => {
    return (
      <SegmentGridItem
        id={itemData.item.id}
        title={itemData.item.name}
        image={""}
        color={Colors.locations}
        accent={Colors.locationsAccent}
        icons={LocationIcons}
        idSelector={"loc"}
        icons={LocationIcons}
        screen={"Location Detail"}
        parent={"Detail"}
        navigation={props.navigation}
      />
    );
  };

  return (
    <View>
      <ProjectHeader
        color={Colors.locations}
        headerText={"Locations"}
        type={"location"}
        scnBtn
      />
      <Main style={styles.scrollView}>
        {name}
        {selectedLocations !== "undefined" && selectedLocations.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={selectedLocations}
            renderItem={renderProjectItem}
            numColumns={1}
          />
        ) : (
          <NoItems color={Colors.locations} segName={"location"} icon={"loc"} />
        )}
      </Main>
    </View>
  );
};

export default LocationsScreen;

const styles = StyleSheet.create({
  scrollView: {
    height: "82%",
    alignSelf: "center",
  },
});
