import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const DetailTitleSegmentItem = ({ name, color, icon, text }) => {
  const selectItemHandler = () => {
    navigation.navigate(screen, {
      screen: detail,
      params: {
        fromSelected: selected,
        name: name,
      },
    });
  };

  return (
    <View style={styles.infoItem}>
      <View style={styles.icon}>
        <Image source={icon} style={styles.iconImage} />
      </View>
      <View style={[styles.info, { borderColor: color }]}>
        <Text style={styles.title}>{name}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};

export default DetailTitleSegmentItem;

const styles = StyleSheet.create({
  infoItem: {
    flexDirection: "row",
    width: "88%",
    marginBottom: "8%",
    alignItems: "center",
  },
  icon: {
    padding: "5%",
    marginRight: "4%",
    alignItems: "center",
    borderRadius: 32,
  },
  info: {
    height: "100%",
    width: "80%",
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  iconImage: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
