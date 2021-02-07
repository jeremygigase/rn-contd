//Packages
import React from "react";
import { StyleSheet, View, Image } from "react-native";

//Components
import {TouchableComponent,TextReg, TextLight } from "_atoms";


const ProjectItem = (props) => {
  return (
    <View>
      <TouchableComponent
        style={styles.gridItem}
        onSelectComponent={props.onSelectProject}
      >
        <View style={styles.rowContainer}>
          <Image
            source={{
              uri: props.image,
            }}
            style={styles.image}
          />

          <View style={styles.projectInfoContainer}>
            <View style={styles.projectInfo}>
              <TextReg style={styles.title} numberOfLines={2}>
                {props.name}
              </TextReg>
              <TextLight style={styles.text}>{props.creator}</TextLight>
              <TextLight style={styles.text}>{props.created}</TextLight>
            </View>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default ProjectItem;

const styles = StyleSheet.create({
  gridItem: {
    margin: 16,
    overflow: "hidden",
    borderRadius: 16,
  },
  rowContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
  },
  imageContainer: {},
  image: {
    width: "40%",
  },
  projectInfoContainer: {
    height: 120,
    width: "60%",
    justifyContent: "center",
  },
  projectInfo: {
    marginLeft: 8,
  },
  text: {
    fontSize: 16,
  },
});
