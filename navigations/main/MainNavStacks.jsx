//Packages
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import { SettingsScreen, ContactScreen, ProfileScreen, HomeScreen } from "_screens/main";
import { SplashScreen } from "_screens/splash";

//Navigation
import ProjectNav from "_navigations/project/ProjectNav";

//Components
import {HamburgerButton} from "_atoms";

const SplashStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ContactStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const stylingHeader = {
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
};

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={stylingHeader}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <HamburgerButton navigation={navigation} />,
          backgroundColor: "#ffffff",
        }}
        screenOptions={{ backgroundColor: "#ffffff" }}
      />
      <HomeStack.Screen
        name="Project Overview"
        component={ProjectNav}
        //options={({ route }) => ({ title: route.params.title })}
        options={{
          headerRight: () => <HamburgerButton navigation={navigation} />,
          headerLeft: () => {},
        }}
      /> 
    </HomeStack.Navigator>
  );
};

const SplashStackScreen = ({ navigation }) => {
  return (
    <SplashStack.Navigator screenOptions={stylingHeader}>
      <SplashStack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <SplashStack.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </SplashStack.Navigator>
  );
};

const SettingsStackScreen = ({ navigation }) => {
  return (
    <SettingsStack.Navigator screenOptions={stylingHeader}>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerRight: () => <HamburgerButton navigation={navigation} />,
        }}
      />
    </SettingsStack.Navigator>
  );
};

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator screenOptions={stylingHeader}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => <HamburgerButton navigation={navigation} />,
        }}
      />
    </ProfileStack.Navigator>
  );
};

const ContactStackScreen = ({ navigation }) => {
  return (
    <ContactStack.Navigator screenOptions={stylingHeader}>
      <ContactStack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerRight: () => <HamburgerButton navigation={navigation} />,
        }}
      />
    </ContactStack.Navigator>
  );
};
const AboutUsStackScreen = ({ navigation }) => {
  return (
    <AboutUsStack.Navigator screenOptions={stylingHeader}>
      <AboutUsStack.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          headerRight: () => <HamburgerButton navigation={navigation} />,
        }}
      />
    </AboutUsStack.Navigator>
  );
};

export {
  SplashStackScreen,
  HomeStackScreen,
  ProfileStackScreen,
  ContactStackScreen,
  SettingsStackScreen,
};
