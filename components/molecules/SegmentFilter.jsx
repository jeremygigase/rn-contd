//Packages
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CommonActions } from "@react-navigation/native";

//Components
import { TouchableComponent } from "_atoms";

const SegmentFilter = ({ props, text, screen }) => {
  // Handler function that resets the screen with no params
  const resetFilterHandler = (props, name) => {
    props.navigation.dispatch(
      CommonActions.reset({
        routes: [{ name: name }],
      })
    );
  };

  return (
    <View style={styles.filterContainer}>
      <View style={styles.name}>
        <Text>
          All {text} from {props.route.params.name}{" "}
        </Text>
      </View>
      <TouchableComponent
        style={styles.resetFilter}
        onSelectComponent={() => resetFilterHandler(props, screen)}>
        <Text>Reset to all {text} </Text>
      </TouchableComponent>
    </View>
  );
};

export default SegmentFilter;

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  resetFilter: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    width: "40%",
    padding: 8,
    marginLeft: "20%",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  name: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    width: "40%",
    padding: 8,
  },
});
