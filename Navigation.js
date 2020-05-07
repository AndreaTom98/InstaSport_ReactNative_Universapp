import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/HomeScreen";
import PostDetail from "./screens/PostDetailScreen";
import Profile from "./screens/ProfileScreen";
import SavedPost from "./screens/SavedPostScreen";
import HeaderButton from "./components/HeaderButton";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButton onPressLeft={() => navigation.toggleDrawer()} />
          )
        })}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.title })}
        name="PostDetail"
        component={PostDetail}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

function SavedStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButton onPressLeft={() => navigation.toggleDrawer()} />
          )
        })}
        name="SavedPost"
        component={SavedPost}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StackNavigation} />
        <Drawer.Screen name="SavedPost" component={SavedStackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigation;
