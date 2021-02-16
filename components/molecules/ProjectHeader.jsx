//Packages
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Components
import { EditCharacterModal } from "_organisms";

function getModal(type, id, color) {
  switch (type) {
    case "project":
      return (
        <EditCharacterModal id={id}>
          <View style={{ ...styles.addButton, backgroundColor: color }}>
            <Text style={styles.addButtonText}>+ Invite a member</Text>
          </View>
        </EditCharacterModal>
      );
    case "character":
      return (
        <EditCharacterModal id={id}>
          <View style={{ ...styles.addButton, backgroundColor: color }}>
            <Text style={styles.addButtonText}>+ Add Character </Text>
          </View>
        </EditCharacterModal>
      );
    case "scene":
      return (
        <EditCharacterModal id={id}>
          <View style={{ ...styles.addButton, backgroundColor: color }}>
            <Text style={styles.addButtonText}>+ Add Scene </Text>
          </View>
        </EditCharacterModal>
      );
    case "location":
      return (
        <EditCharacterModal id={id}>
          <View style={{ ...styles.addButton, backgroundColor: color }}>
            <Text style={styles.addButtonText}>+ Add Location</Text>
          </View>
        </EditCharacterModal>
      );
    case "script day":
      return (
        <EditCharacterModal id={id}>
          <View style={{ ...styles.addButton, backgroundColor: color }}>
            <Text style={styles.addButtonText}>+ Add Script Day </Text>
          </View>
        </EditCharacterModal>
      );
  }
}

const ProjectHeader = ({ headerText, scnBtn, type, color }) => {
  const modal = getModal(type, null, color);

  console.log(color);
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{headerText}</Text>
      <View style={styles.buttons}>
        {modal}
        {scnBtn && (
          <EditCharacterModal id={id}>
            <View style={styles.addButtonScene}>
              <Text style={styles.addButtonText}>+ Add Scene </Text>
            </View>
          </EditCharacterModal>
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
