//Packages
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import { View } from "react-native";

import { HelloWorld } from "_molecules";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <HelloWorld name='Jeremy' />
    </View>
  );
}
