import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//Assets
import { Icons } from "_assets";

const DetailHeader = (props) => {
  const { title, color, added } = props;
  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
        <View style={[styles.headerTitle, { backgroundColor: color }]}>
          <Text style={[styles.title, { color: "white" }]}>{title}</Text>
        </View>
        <Image
          source={Icons["edit"]}
          style={{
            width: 20,
            height: 20,
            marginLeft: "16%",
          }}
        />
      </View>
      <View style={styles.date}>
        <Text>{added}</Text>
      </View>
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
    paddingBottom: 16,
    width: "100%",
    backgroundColor: "white",
  },
  headerTitle: {
    marginTop: 8,
    width: "48%",
    padding: 8,
    borderBottomRightRadius: 16,
    marginBottom: "1%",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    marginLeft: "2%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
