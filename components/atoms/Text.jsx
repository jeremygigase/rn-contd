import React from "react";
import { Text, StyleSheet } from "react-native";

export const TextLight = (props) => {
  return (
    <Text style={{ ...props.style, ...styles.light }}>{props.children}</Text>
  );
};

export const TextReg = (props) => {
  return (
    <Text style={{ ...props.style, ...styles.regular }}>{props.children}</Text>
  );
};

export const TextBold = (props) => {
  return (
    <Text style={{ ...props.style, ...styles.bold }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  light: {
    //fontFamily: "roboto-light",
  },
  regular: {
    //fontFamily: "roboto-regular",
  },
  bold: {
    //fontFamily: "roboto-bold",
  },
});
