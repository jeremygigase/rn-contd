import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

const HamburgerButton = ({ navigation }) => {
  return (
    <Icon.Button
      name="ios-menu"
      color="#000"
      size={25}
      backgroundColor="#fff"
      onPress={() => navigation.openDrawer()}
    />
  );
};

export default HamburgerButton;