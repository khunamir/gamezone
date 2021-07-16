import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import AboutStack from "./AboutStack";
import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={ HomeStack } />
                <Drawer.Screen name="About" component={ AboutStack } />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

