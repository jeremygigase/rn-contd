//Packages
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Components
import {TouchableComponent} from "_atoms";

const ProjectHeader = ({ color, headerText, btnText, scnBtn }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{headerText}</Text>
      <View style={styles.buttons}>
        <TouchableComponent
          style={[styles.addButton, { backgroundColor: color }]}
          onSelectComponent={() => alert("Future Add character")}
        >
          <Text style={styles.addButtonText}> {btnText} </Text>
        </TouchableComponent>
        {scnBtn === 1 ? (
          <TouchableComponent
            style={styles.addButtonScene}
            onSelectComponent={() => alert("Future Add Scene")}
          >
            <Text style={styles.addButtonText}> +Add New Scene </Text>
          </TouchableComponent>
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
};

export default ProjectHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    width: "100%",
    backgroundColor: "white",
  },
  headerText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 16,
    paddingBottom: 16,
  },
  addButton: {
    marginTop: 8,
    width: "32%",
    color: "white",
    padding: 8,
    borderBottomRightRadius: 16,
  },
  addButtonScene: {
    marginTop: 8,
    width: "32%",
    color: "white",
    padding: 8,
    borderBottomLeftRadius: 16,
    backgroundColor: "black",
    marginLeft: "36%",
  },
  buttons: {
    flexDirection: "row",
  },
  addButtonText: {
    color: "white",
  },
});
