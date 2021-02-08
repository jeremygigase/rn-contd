import React from "react";
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const TouchableComponent = (props) => {
  let TouchableCmp = TouchableOpacity;

  // if (Platform.OS === "android" && Platform.Version >= 21) {
  //   TouchableCmp = TouchableNativeFeedback;
  // }

  return (
    <TouchableCmp style={props.style} onPress={props.onSelectComponent}>
      {props.children}
    </TouchableCmp>
  );
};

export default TouchableComponent;
