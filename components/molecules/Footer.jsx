//Packages
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Icons } from "_assets";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.logo}>CONT'D</Text>
      <Text style={styles.tagLine}>Made by crew for crew</Text>
      {/* <Image source={Icons["logo"]} style={styles.icon} />
      <Text style={styles.companyName}>
        Super Ultra Corporate Information Technologies inc©
      </Text> */}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: "80%",
    //marginBottom: "2%",
    // Holds Footer at the bottom of the screen
    position: "absolute",
    bottom: 0,
  },
  logo: {
    fontSize: 32,
    marginBottom: 8,
    fontFamily: "Courier New",
  },
  tagLine: {
    fontSize: 16,
    marginBottom: 16,
  },
  companyName: {
    fontSize: 8,
    marginBottom: 8,
    fontWeight: "bold",
  },
  icon: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
