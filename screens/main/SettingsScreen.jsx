//Packages
import React from "react";
import { View, Text, StyleSheet } from "react-native";

//Components
import {Main} from "_components";
import {Footer} from "_molecules";
import {TouchableComponent} from "_atoms";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Main style={styles.main}>
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
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    alignItems: "center",
  },
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
