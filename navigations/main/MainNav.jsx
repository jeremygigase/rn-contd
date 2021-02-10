// Packages
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Navigation
import MainNavContent from "./MainNavContent";
import {
  SplashStackScreen,
  HomeStackScreen,
  ProfileStackScreen,
  SettingsStackScreen,
  FAQStackScreen,
} from "./MainNavStacks";

const Drawer = createDrawerNavigator();

const MainNav = () => {
  return (
    <NavigationContainer style={{ backgroundColor: "#000000" }}>
      <Drawer.Navigator
        initialRouteName='Splash'
        drawerContent={(props) => <MainNavContent {...props} />}
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
        }}>
        <Drawer.Screen
          name='Splash'
          component={SplashStackScreen}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
          }}
        />
        <Drawer.Screen name='Profile' component={ProfileStackScreen} />
        <Drawer.Screen name='Home' component={HomeStackScreen} />
        <Drawer.Screen name='Settings' component={SettingsStackScreen} />
        <Drawer.Screen name='FAQ' component={FAQStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
