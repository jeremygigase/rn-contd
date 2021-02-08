import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailRemarks = ({ color, text }) => {
  return (
    <View style={styles.infoItem}>
      <View style={[styles.remarks, { borderColor: color }]}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default DetailRemarks;

const styles = StyleSheet.create({
  infoItem: {
    flexDirection: "row",
    width: "88%",
    marginBottom: "8%",
    alignItems: "center",
  },
  remarks: {
    height: "100%",
    width: "100%",
    padding: 24,
    borderWidth: 1,
    borderRadius: 8,
  },
});
