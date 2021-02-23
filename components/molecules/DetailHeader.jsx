import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

//Assets
import {
  CharacterModal,
  LocationModal,
  ProjectModal,
  SceneModal,
  ScriptDayModal,
} from "_organisms";
import {
  deleteCharacter,
  deleteLocation,
  deleteScene,
  deleteProject,
  deleteScriptDay,
} from "_store/actions";

import { useDispatch } from "react-redux";

import { CommonActions } from "@react-navigation/native";

function getModal(type, id, navigation) {
  switch (type) {
    case "project":
      return <ProjectModal id={id} navigation={navigation} />;
    case "character":
      return <CharacterModal id={id} navigation={navigation} />;
    case "scene":
      return <SceneModal id={id} navigation={navigation} />;
    case "location":
      return <LocationModal id={id} navigation={navigation} />;
    case "script day":
      return <ScriptDayModal id={id} navigation={navigation} />;
  }
}

const DetailHeader = (props) => {
  const { title, color, added, type, id, navigation } = props;
  const modal = getModal(type, id, navigation);
  const dispatch = useDispatch();

  function getDispatcher(type, id) {
    switch (type) {
      case "project":
        return dispatch(deleteProject(id));
      case "character":
        return dispatch(deleteCharacter(id));
      case "scene":
        return dispatch(deleteScene(id));
      case "location":
        return dispatch(deleteLocation(id));
      case "script day":
        return dispatch(deleteScriptDay(id));
    }
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Are you sure?",
      `Do you really want to delete this ${type}?`,
      [
        {
          text: "No",
          onPress: () => {
            console.log("Cancel Pressed");
          },
          style: "default",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            getDispatcher(type, props.id);
            props.navigation.dispatch(CommonActions.goBack());
          },
        },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
        <View style={[styles.headerTitle, { backgroundColor: color }]}>
          <Text style={[styles.title, { color: "white" }]}>{title}</Text>
        </View>
        {modal}
        <Pressable onPress={createTwoButtonAlert} style={styles.deleteButton}>
          <Text style={styles.closeIcon}>DELETE</Text>
        </Pressable>
      </View>
      <View style={styles.date}>
        <Text>{added}</Text>
      </View>
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    width: "100%",
    backgroundColor: "white",
  },
  headerTitle: {
    marginTop: 8,
    width: "48%",
    padding: 8,
    borderBottomRightRadius: 16,
    marginBottom: "1%",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    marginLeft: "2%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    marginLeft: "4%",
  },
});
