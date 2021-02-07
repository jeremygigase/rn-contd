//Packages
import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Components
import {Main} from "_components";
import {Footer} from "_molecules";
import {TouchableComponent} from "_atoms";

const SettingsScreen = () => {
  return (
      <Main>
        <View style={styles.buttonControl}>
          <TouchableComponent style={styles.button}>
            <Text> Settings Screen</Text>
          </TouchableComponent>
          <TouchableComponent style={styles.button}>
            <Text> Settings Screen</Text>
          </TouchableComponent>
          <TouchableComponent style={styles.button}>
            <Text> Settings Screen</Text>
          </TouchableComponent>
          <TouchableComponent style={styles.button}>
            <Text> Settings Screen</Text>
          </TouchableComponent>
        </View>
        <View style={styles.buttonControl}>
          <TouchableComponent style={styles.button}>
            <Text> Settings Screen</Text>
          </TouchableComponent>
          <TouchableComponent style={styles.button}>
            <Text> Settings Screen</Text>
          </TouchableComponent>
          <TouchableComponent style={styles.button}>
            <Text> Settings Screen</Text>
          </TouchableComponent>
          <TouchableComponent style={styles.button}>
            <Text> Settings Screen</Text>
          </TouchableComponent>
        </View>
        <Footer />
      </Main>

  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  buttonControl: {
    width: "80%",
    marginTop: "8%",
  },
  button: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginTop: "4%",
  },
});
