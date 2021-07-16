import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeNavigator = ({ navigation }) => {

  const openMenu = () => {
    navigation.openDrawer();
  }

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
            title: "Home",
            headerLeft: () => (
                <MaterialIcons name="menu" size={28} color='black' onPress={openMenu} />
            ),
            headerLeftContainerStyle: {
                paddingHorizontal: 20
            }
        }}
      />
      <Stack.Screen 
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
            title: "Review Details"
        }}
      />
    </Stack.Navigator>
  )
};

export default HomeNavigator;
