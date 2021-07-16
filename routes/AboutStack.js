import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

const AboutNavigator = () => (
    <Stack.Navigator 
        screenOptions = {{
            headerStyle: {
                backgroundColor: "#eee",
                size: 60
            },
            headerTintColor: "#444"
        }}
    >
      <Stack.Screen name="About" 
        component={About}
        options={{
            title: "About GameZone"
        }}
      />
    </Stack.Navigator>
);

export default AboutNavigator;
