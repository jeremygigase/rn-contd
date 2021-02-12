//Packages
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

//Components
import { TouchableComponent } from "_atoms";
import { EditCharacterModal } from "_organisms";

function getModal(type, id, button) {
  switch (type) {
    case "project":
      return <EditCharacterModal id={id} />;
    case "character":
      return <EditCharacterModal id={id}>{button}</EditCharacterModal>;
    case "scene":
      return <EditCharacterModal id={id} />;
    case "location":
      return <EditCharacterModal id={id} />;
    case "script day":
      return <EditCharacterModal id={id} />;
  }
}

const ProjectHeader = ({
  color,
  headerText,
  btnText,
  scnBtn,
  type,
  button,
}) => {
  const modal = getModal(type, button);

  //console.log(button);
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{headerText}</Text>
      <View style={styles.buttons}>
        {button}
        {modal}
        {scnBtn === 1 ? (
          <TouchableComponent
            style={styles.addButtonScene}
            onSelectComponent={() => alert("Future Add Scene")}>
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
