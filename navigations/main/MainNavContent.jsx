//Packages
import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import {Footer, MainDrawerItem} from "_molecules";


const MainNavContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Profile");
                }}
              >
                <Avatar.Image
                  source={{
                    uri:
                      "https://img.discogs.com/uRx2KJiz_6AvTiMAq0whijLeoGU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3245307-1323717800.jpeg.jpg",
                  }}
                  size={64}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  <Title styles={styles.title}>Jeremy Gigase</Title>
                  <Caption styles={styles.caption}>Codeandstuff</Caption>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <MainDrawerItem props={props} name={"Home"} i={"home"} />
            <MainDrawerItem props={props} name={"Settings"} i={"settings"} />
            <MainDrawerItem props={props} name={"Contact"} i={"contact"} />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Footer />
      </View>
      <Drawer.Section style={styles.bottomDrawerSection}>
      <MainDrawerItem props={props} name={"Sign Out"} i={"contact"} />
      </Drawer.Section>
    </View>
  );
};

export default MainNavContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  footer: {
    marginLeft: " 4%",
  },
});
