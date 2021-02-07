//Packages
import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

// Screens
import { ProjectScreen } from "_screens/project";

// Stacks
import {
  CharacterStackScreen,
  SceneStackScreen,
  LocationStackScreen,
  ScriptDayStackScreen,
} from "./ProjectNavStacks";

//Constants
import Colors from "../../constants/Colors";

//Assets
import { Icons } from "_assets";

const Tab = createBottomTabNavigator();

function getActiveScreenColor(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Project" as that's the first screen inside the navigator

  const routeName = getFocusedRouteNameFromRoute(route) ?? "Project";

  switch (routeName) {
    case "Project":
      return Colors.project;
    case "Characters":
      return Colors.characters;
    case "Scenes":
      return Colors.scenes;
    case "Locations":
      return Colors.locations;
    case "Script Days":
      return Colors.scriptDays;
  }
}

const ProjectNav = (props) => {
  console.log(Colors);
  return (
    <Tab.Navigator
      initialRouteName='Project'
      tabBarOptions={{
        activeTintColor: getActiveScreenColor(props.route),
        style: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderTopWidth: 1,
          borderLeftWidth: 0.5,
          borderRightWidth: 0.5,
          borderTopColor: "grey",
          borderRightColor: "grey",
          borderLeftColor: "grey",
          position: "absolute",
        },
      }}>
      <Tab.Screen
        name='Project'
        component={ProjectScreen} //hier projectstackscreen waarschijnlijk
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Icons["tabHomeOn"] : Icons["tabHomeOff"]}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Characters'
        component={CharacterStackScreen}
        options={{
          tabBarLabel: "Characters",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? Icons["tabCharacterOn"] : Icons["tabCharacterOff"]
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Scenes'
        component={SceneStackScreen}
        options={{
          tabBarLabel: "Scenes",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Icons["tabSceneOn"] : Icons["tabSceneOff"]}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Locations'
        component={LocationStackScreen}
        options={{
          tabBarLabel: "Locations",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? Icons["tabLocationOn"] : Icons["tabLocationOff"]
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Script Days'
        component={ScriptDayStackScreen}
        tabPress={() => {
          props.navigation.dispatch(
            CommonActions.reset({
              routes: [{ name: "Script Days" }],
            })
          );
        }}
        options={{
          tabBarLabel: "Script Days",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? Icons["tabScriptDayOn"] : Icons["tabScriptDayOff"]
              }
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ProjectNav;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
});
