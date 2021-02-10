import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <LottieView
      source={require("_assets/animations/camera_roll.json")}
      autoPlay
      loop={true}
      speed={1}
      style={styles.loading}
      //autoPlay={isDrawerOpen}
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  loading: {
    height: 240,
    width: 160,
  },
});
