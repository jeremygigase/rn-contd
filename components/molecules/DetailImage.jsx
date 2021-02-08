import React from "react";
import { StyleSheet, Image } from "react-native";

const DetailImage = ({ image, icon }) => {
  if (image === undefined || image === null || image === "") {
    return <Image source={icon} style={styles.image} />;
  } else {
    return <Image source={{ uri: image }} style={styles.image} />;
  }
};

export default DetailImage;

const styles = StyleSheet.create({
  image: {
    width: "100%", //160
    height: "100%", //134
    resizeMode: "contain",
  },
});
