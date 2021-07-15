import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator 
        screenOptions = {{
            headerStyle: {
                backgroundColor: "#eee",
                size: 60
            },
            headerTintColor: "#444"
        }}
    >
      <Stack.Screen name="Home" 
        component={Home}
        options={{
            title: "GameZone"
        }}
      />
      <Stack.Screen name="ReviewDetails"
        component={ReviewDetails}
        options={{
            title: "Review Details"
        }}
      />
    </Stack.Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);
