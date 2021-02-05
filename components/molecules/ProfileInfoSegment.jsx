//Packages
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// Components
import {TouchableComponent} from "_atoms";

//Assets
import { Icons } from "_assets";

const ProfileInfoSegment = ({ value, title }) => {
  return (
    <View>
      <View style={styles.infoSeg}>
        <View style={styles.infoSegTitle}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <TouchableComponent
          style={styles.icon}
          onSelectComponent={() => alert(`Future Edit ${title}`)}
        >
          {
            <Image
              source={Icons["edit"]}
              style={{
                width: 20,
                height: 20,
              }}
            />
          }
        </TouchableComponent>
      </View>
      <View style={styles.textBox}>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

export default ProfileInfoSegment;

const styles = StyleSheet.create({
  infoSeg: {
    flexDirection: "row",
  },
  infoSegTitle: {
    marginTop: 8,
    width: "40%",
    padding: 8,
    borderBottomRightRadius: 16,
  },
  icon: {
    marginTop: 8,
    width: "8%",
    padding: 8,
    borderBottomLeftRadius: 16,
    marginLeft: "52%",
  },

  textBox: {
    marginLeft: 8,
    borderBottomWidth: 1,
  },
});
