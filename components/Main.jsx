import React from "react";
import { View, StyleSheet } from "react-native";

const Main = (props) => {
  return (
    <View style={{ ...styles.main, ...props.style }}>{props.children}</View>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
});