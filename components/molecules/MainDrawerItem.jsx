//Packages
import React from "react";
import { StyleSheet, Image } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native";




//Assets
import { Icons } from "_assets";

const MainDrawerItem = ({ props, name, i }) => {
  return (
    <DrawerItem
      icon={() => <Image source={Icons[i]} style={styles.icon} />}
      label={name}
      onPress={() => {
        if (name === "Home") {
          props.navigation.dispatch(
            CommonActions.reset({
              routes: [{ name: name }],
            })
          );
        } else {
          props.navigation.navigate(name);
        }
      }}
    ></DrawerItem>
  );
};

export default MainDrawerItem;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
