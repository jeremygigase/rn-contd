import React from "react";
import { StyleSheet, Image } from "react-native";

//Assets
import { Icons } from "_assets";

// Components
import TouchableComponent from "./TouchableComponent";

const HamburgerButton = ({ navigation }) => {
  return (
    <TouchableComponent onSelectComponent={() => navigation.openDrawer()}>
      <Image source={Icons["contact"]} style={styles.icon} />
    </TouchableComponent>
  );
};

export default HamburgerButton;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
});
