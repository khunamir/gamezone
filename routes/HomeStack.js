import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { ImageBackground } from "react-native";
import Header from "../shared/header";

const Stack = createStackNavigator();

const HomeNavigator = ({ navigation }) => {

  return (
    <Stack.Navigator 
      headerMode= "screen"
      screenOptions = {{
          headerTitleAlign: "center",
          headerStyle: {
              backgroundColor: "#eee",
              height: 100
          },
          headerTintColor: "#444"
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={ Home }
        options={{
            headerTitle: () => (
              <Header navigation={ navigation } title="GameZone" />
            ),
            headerBackground: () => (
              <ImageBackground source={ require('../assets/game_bg.png') } style={{ height: '100%' }} />
            )
        }}
      />
      <Stack.Screen 
        name="ReviewDetails"
        component={ ReviewDetails }
        options={{
            title: "Review Details"
        }}
      />
    </Stack.Navigator>
  )
};

export default HomeNavigator;