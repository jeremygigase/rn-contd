import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Assets
import { EditCharacterModal } from "_organisms";

function getModal(type, id) {
  switch (type) {
    case "project":
      return <EditCharacterModal id={id} />;
    case "character":
      return <EditCharacterModal id={id} />;
    case "scene":
      return <EditCharacterModal id={id} />;
    case "location":
      return <EditCharacterModal id={id} />;
    case "script day":
      return <EditCharacterModal id={id} />;
  }
}

const DetailHeader = (props) => {
  const { title, color, added, type, id } = props;
  const modal = getModal(type, id);

  return (
    <View style={styles.header}>
      <View style={styles.headerTitleContainer}>
        <View style={[styles.headerTitle, { backgroundColor: color }]}>
          <Text style={[styles.title, { color: "white" }]}>{title}</Text>
        </View>
        {modal}
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
