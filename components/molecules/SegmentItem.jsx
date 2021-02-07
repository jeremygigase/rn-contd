//Packages
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//Components
import { TouchableComponent } from "_atoms";

const SegmentItem = ({ icon, color, amount, text, onSelectSegment }) => {
  return (
    <TouchableComponent
      style={styles.segment}
      onSelectComponent={onSelectSegment}>
      <View style={styles.iconBackground}>
        {/* <View style={{ ...styles.iconBackground, ...{ backgroundColor: color } }}> */}
        <Image
          source={icon}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </View>
      <View style={styles.segmentCounterContainer}>
        <View style={styles.segmentCounter}>
          <Text>
            {amount} {text}
          </Text>
        </View>
      </View>
    </TouchableComponent>
  );
};

export default SegmentItem;

const styles = StyleSheet.create({
  segment: {
    marginTop: 8,
    flexDirection: "row",
  },
  segmentCounterContainer: {
    marginLeft: 16,
    justifyContent: "center",
    width: "72%",
  },
  segmentCounter: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E4E4E4",
    borderWidth: 2,
    borderRadius: 16,
    height: 32,
  },
  iconBackground: {
    borderRadius: 32,
    padding: 16,

    alignItems: "center",
  },
});
