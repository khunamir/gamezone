import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import { ImageBackground } from "react-native";
import Header from "../shared/header";

const Stack = createStackNavigator();

const AboutNavigator = ({ navigation }) => {
    
    return (
        <Stack.Navigator 
            screenOptions = {{
                headerTitleAlign: "center",
                headerMode: "screen",
                headerStyle: {
                    backgroundColor: "#eee",
                    height: 100
                },
                headerTintColor: "#444"
            }}
        >
        <Stack.Screen 
            name="About" 
            component={About}
            options={{
                headerTitle: () => (
                  <Header navigation={ navigation } title="About GameZone" />
                ),
                headerBackground: () => (
                  <ImageBackground source={ require('../assets/game_bg.png') } style={{ height: '100%' }} />
                )
            }}
        />
        </Stack.Navigator>
    );
}

export default AboutNavigator;
