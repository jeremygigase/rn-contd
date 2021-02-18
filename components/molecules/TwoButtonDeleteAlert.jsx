import React from "react";
import { StyleSheet, Alert } from "react-native";
import { useDispatch } from "react-redux";

const TwoButtonDeleteAlert = ({ action, type, screen, navigation }) => {
  console.log(navigation);
  const dispatch = useDispatch();
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
          navigation.navigate(screen);
          action;
        },
      },
    ],
    { cancelable: false }
  );
};

export default TwoButtonDeleteAlert;

const styles = StyleSheet.create({});
