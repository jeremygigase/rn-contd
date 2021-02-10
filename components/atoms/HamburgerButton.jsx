import React, { useRef } from "react";
import { StyleSheet, Image, View, Pressable, Text } from "react-native";
import LottieView from "lottie-react-native";
import { useIsDrawerOpen } from "@react-navigation/drawer";

//Assets
import { Icons } from "_assets";

// Components
import TouchableComponent from "./TouchableComponent";

// To Do: Smooth animatie terug naar Hamburger
// 2 Lottieviews met isDrawerOpen of AutoPlay

const HamburgerButton = ({ navigation }) => {
  const isDrawerOpen = useIsDrawerOpen();
  const openAnimation = useRef();
  const closeAnimation = useRef();

  const playAnimation = () => {
    openAnimation.current.play(2, 60);
  };

  const pressAnimation = () => {
    openAnimation.current.play(0, 1);
  };

  const playCloseAnimation = () => {
    closeAnimation.current.play(60, 120);
  };

  return (
    <Pressable
      onPressIn={() => {
        pressAnimation();
        navigation.openDrawer();
      }}
      onPress={() => playAnimation()}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
        }}>
        <LottieView
          source={require("_assets/animations/burger-to-close-icon.json")}
          loop={false}
          autoPlay={false}
          progress={isDrawerOpen ? 1 : 0}
          style={styles.icon}
          ref={openAnimation}
          //autoPlay={isDrawerOpen}
        />
      </View>
    </Pressable>
  );
};

export default HamburgerButton;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
    marginTop: 2,
  },
});
