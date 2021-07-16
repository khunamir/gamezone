import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const AboutNavigator = ({ navigation }) => {

    const openMenu = () => {
        navigation.openDrawer();
    }
    
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
                title: "About",
                headerLeft: () => (
                    <MaterialIcons name="menu" size={28} color='black' onPress={openMenu} />
                ),
                headerLeftContainerStyle: {
                    paddingHorizontal: 20
                }
            }}
        />
        </Stack.Navigator>
    );
}

export default AboutNavigator;
