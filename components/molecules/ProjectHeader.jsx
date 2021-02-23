//Packages
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Components
import {
  CharacterModal,
  LocationModal,
  ProjectModal,
  SceneModal,
  ScriptDayModal,
} from "_organisms";

function getModal(type, id, color) {
  switch (type) {
    case "project":
      return <ProjectModal id={id} color={color} />;
    case "character":
      return <CharacterModal id={id} color={color} />;
    case "scene":
      return <SceneModal id={id} color={color} />;
    case "location":
      return <LocationModal id={id} color={color} />;
    case "script day":
      return <ScriptDayModal id={id} color={color} />;
  }
}

const ProjectHeader = ({ headerText, scnBtn, type, color }) => {
  const modal = getModal(type, null, color);
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{headerText}</Text>
      <View style={styles.buttons}>
        {modal}
        {scnBtn && (
          <SceneModal id={id}>
            <View style={{ ...styles.addButton, backgroundColor: color }}>
              <Text style={styles.addButtonText}>+ Add Scene </Text>
            </View>
          </SceneModal>
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
    width: "100%",
    color: "white",
    padding: 8,
    borderBottomRightRadius: 16,
  },
  addButtonScene: {
    marginTop: 8,
    width: "100%",
    color: "white",
    padding: 8,
    borderBottomLeftRadius: 16,
    backgroundColor: "black",
    marginLeft: "114%",
  },
  buttons: {
    flexDirection: "row",
  },
  addButtonText: {
    color: "white",
  },
});
