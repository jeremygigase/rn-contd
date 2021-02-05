//Packages
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import {  
    CharactersScreen, 
    CharacterDetailScreen, 
    ScenesScreen,
    SceneDetailScreen,
    LocationsScreen,
    LocationDetailScreen,
    ScriptDaysScreen,
    ScriptDayDetailScreen  
} from "_screens/project";

const CharacterStack = createStackNavigator();
const SceneStack = createStackNavigator();
const LocationStack = createStackNavigator();
const ScriptDayStack = createStackNavigator();
const DetailStack = createStackNavigator();

const DetailStackScreen = () => {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen
        name="Character Detail"
        component={CharacterDetailScreen}
      />
      <DetailStack.Screen name="Scene Detail" component={SceneDetailScreen} />
      <DetailStack.Screen
        name="Location Detail"
        component={LocationDetailScreen}
      />
      <DetailStack.Screen
        name="Script Day Detail"
        component={ScriptDayDetailScreen}
      />
    </DetailStack.Navigator>
  );
};

const CharacterStackScreen = () => {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen
        name="Characters Overview"
        component={CharactersScreen}
        options={{ headerShown: false }}
      />
      <CharacterStack.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{ headerShown: false }}
      />
    </CharacterStack.Navigator>
  );
};

const SceneStackScreen = () => {
  return (
    <SceneStack.Navigator>
      <SceneStack.Screen
        name="Scenes Overview"
        component={ScenesScreen}
        options={{ headerShown: false }}
      />
      <SceneStack.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{ headerShown: false }}
      />
    </SceneStack.Navigator>
  );
};
const LocationStackScreen = () => {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name="Locations Overview"
        component={LocationsScreen}
        options={{ headerShown: false }}
      />
      <LocationStack.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{ headerShown: false }}
      />
    </LocationStack.Navigator>
  );
};
const ScriptDayStackScreen = (props) => {
  return (
    <ScriptDayStack.Navigator>
      <ScriptDayStack.Screen
        name="Script Days Overview"
        component={ScriptDaysScreen}
        options={{ headerShown: false }}
      />
      <ScriptDayStack.Screen
        name="Detail"
        component={DetailStackScreen}
        options={{ headerShown: false }}
      />
    </ScriptDayStack.Navigator>
  );
};

export {
    CharacterStackScreen,
    SceneStackScreen ,
    LocationStackScreen,
    ScriptDayStackScreen,
  };