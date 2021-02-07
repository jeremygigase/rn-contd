//Packages
import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
      }}
    >
      <LottieView
        source={require("_assets/animations/splash.json")}
        autoPlay
        loop={false}
        speed={2}
        onAnimationFinish={() => {
          console.log("Animation Finished!");
          props.navigation.replace("Home");
        }}
      /> 
    </View>
  );
};

export default SplashScreen;