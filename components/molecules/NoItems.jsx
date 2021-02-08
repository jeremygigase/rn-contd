import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { TouchableComponent } from "_atoms";

//Assets
import { NoIcons } from "_assets";

const NoItems = ({ color, segName, icon }) => {
  const [clicked, setClicked] = useState(false);

  console.log(NoIcons[icon]);

  let button = (
    <TouchableComponent
      style={[styles.addButton, { borderColor: color }]}
      onSelectComponent={() => {
        alert(`Future Add ${segName}`);
        setClicked(true);
      }}>
      <Text style={[styles.addButtonText, { color: color }]}>
        + add {segName}
      </Text>
    </TouchableComponent>
  );

  if (clicked) {
    button = (
      <TouchableComponent
        style={[
          styles.addButton,
          { backgroundColor: color, borderColor: color },
        ]}
        onSelectComponent={() => {
          alert(`Future Add ${segName}`);
          setClicked(true);
        }}>
        <Text style={styles.addButtonText}>+ add {segName}</Text>
      </TouchableComponent>
    );
  }

  return (
    <View>
      <View style={styles.noContainer}>
        <Image source={NoIcons[icon]} style={styles.image} />
        <View style={styles.textContainer}>
          <Text>Huh?</Text>
          <Text>This is weird there should be some {segName}s here?</Text>
          <Text>Maybe you can help and add some!</Text>
        </View>
        {button}
      </View>
    </View>
  );
};

export default NoItems;

const styles = StyleSheet.create({
  addButton: {
    alignItems: "center",
    padding: 16,
    width: "56%",
    color: "white",
    borderWidth: 2,
    borderRadius: 32,
    backgroundColor: "white",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  noContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", //160
    height: "48%", //134
    resizeMode: "contain",
  },
  textContainer: {
    margin: "4%",
    justifyContent: "center",
    alignItems: "center",
  },
});
