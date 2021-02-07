//Packages
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//Navigation
import MainNav from "_navigations/main/MainNav";

//Store
import {
  projectsReducer,
  scenesReducer,
  picturesReducer,
  scriptDaysReducer,
  charactersReducer,
  locationsReducer,
  scenesCharactersReducer,
} from "_store/reducers";

const rootReducer = combineReducers({
  projects: projectsReducer,
  scenes: scenesReducer,
  pictures: picturesReducer,
  scriptDays: scriptDaysReducer,
  characters: charactersReducer,
  locations: locationsReducer,
  scenesCharacters: scenesCharactersReducer,
});

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}
