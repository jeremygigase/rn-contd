import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

//Assets
import { EditCharacterModal } from "_organisms";
import * as characterActions from "_store/actions/characters";

import { useSelector, useDispatch } from "react-redux";

import { CommonActions } from "@react-navigation/native";

function getModal(type, id, navigation, button) {
  switch (type) {
    case "project":
      return <EditCharacterModal id={id} navigation={navigation} />;
    case "character":
      return (
        <EditCharacterModal id={id} navigation={navigation}>
          {button}
        </EditCharacterModal>
      );
    case "scene":
      return <EditCharacterModal id={id} navigation={navigation} />;
    case "location":
      return <EditCharacterModal id={id} navigation={navigation} />;
    case "script day":
      return <EditCharacterModal id={id} navigation={navigation} />;
  }
}

const DetailHeader = (props) => {
  const { title, color, added, type, id, navigation, button } = props;
  const modal = getModal(type, id, navigation, button);
  const dispatch = useDispatch();

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Are you sure?",
      "Do you really want to delete this character?",
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
            dispatch(characterActions.deleteCharacter(props.id));
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
    marginLeft: "28%",
  },
});
