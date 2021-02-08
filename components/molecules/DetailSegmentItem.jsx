import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";

//Components
import { TouchableComponent } from "_atoms";

const DetailSegmentItem = ({
  selected,
  screen,
  detail,
  name,
  color,
  icon,
  navigation,
  text,
}) => {
  const selectItemHandler = () => {
    navigation.navigate(screen, {
      screen: detail,
      params: {
        fromSelected: selected,
        name: name,
      },
    });
  };

  const renderItem = (itemData) => {
    if (text === "scenes") {
      return (
        <View style={[styles.item, { backgroundColor: color }]}>
          <Text>Scene {itemData.item.sceneNumber}</Text>
        </View>
      );
    } else if (text === "script days") {
      return (
        <View style={[styles.item, { backgroundColor: color }]}>
          <Text>{itemData.item.name}</Text>
        </View>
      );
    } else if (text === "characters") {
      return (
        <View style={[styles.item, { backgroundColor: color }]}>
          <Text>
            {itemData.item.callsheetNumber}. {itemData.item.characterName}
          </Text>
        </View>
      );
    }
  };

  return (
    <TouchableComponent
      style={styles.infoItem}
      onSelectComponent={() => selectItemHandler()}>
      <View style={styles.icon}>
        <Image source={icon} style={styles.iconImage} />
      </View>
      <View style={[styles.info, { borderColor: color }]}>
        <Text>Featured in: </Text>
        {selected !== "undefined" && selected.length > 0 ? (
          <FlatList
            keyExtractor={(item) => item.id}
            data={selected}
            renderItem={renderItem}
            numColumns={4}
          />
        ) : (
          <Text>In no {text}</Text>
        )}
      </View>
    </TouchableComponent>
  );
};

export default DetailSegmentItem;

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
  iconImage: {
    width: 32,
    height: 32,
  },
  info: {
    height: "100%",
    width: "80%",
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  item: {
    marginTop: 8,
    marginLeft: 8,
    padding: 8,
    borderRadius: 16,
  },
});
