// Packages
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import {
  ProjectHeader,
  SegmentGridItem,
  NoItems,
  SegmentFilter,
} from "_molecules";
import { Main } from "_components";

// Constants
import Colors from "_constants/Colors";

import { CharacterIcons } from "_assets";

const CharactersScreen = (props) => {
  let selectedCharacters = useSelector((state) =>
    state.characters.characters.filter(
      (characters) => characters.projectId === global.id
    )
  );

  const renderProjectItem = (itemData) => {
    return (
      <SegmentGridItem
        item={itemData.item}
        id={itemData.item.id}
        title={
          itemData.item.callsheetNumber + " " + itemData.item.characterName
        }
        image={itemData.item.pictureFilename}
        color={Colors.characters}
        accent={Colors.charactersAccent}
        icons={CharacterIcons}
        screen={"Character Detail"}
        parent={"Detail"}
        navigation={props.navigation}
      />
    );
  };

  let name;

  if (props.route.params !== undefined) {
    selectedCharacters = props.route.params.fromSelected;
    name = (
      <SegmentFilter props={props} text={"characters"} screen={"Characters"} />
    );
  }

  return (
    <View>
      <ProjectHeader
        color={Colors.characters}
        headerText={"Characters"}
        btnText={"+Add Character"}
        scnBtn={1}
      />
      <Main>
        {name}
        {selectedCharacters !== "undefined" && selectedCharacters.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={selectedCharacters}
            renderItem={renderProjectItem}
            numColumns={1}
          />
        ) : (
          <NoItems
            color={Colors.characters}
            segName={"character"}
            icon={"cha"}
          />
        )}
      </Main>
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({});
