import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/HomeScreen";
import PostDetail from "./screens/PostDetailScreen";
import Profile from "./screens/ProfileScreen";
import SavedPost from "./screens/SavedPostScreen";
import CreatePost from './screens/CreatePostScreen';
import Signin from './screens/SignInScreen';
import Signup from './screens/SignUpScreen';
import HeaderButton from "./components/HeaderButton";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButton left={true} onPressLeft={() => navigation.toggleDrawer()} />
          ),
          headerRight: () => (
            <HeaderButton onPressRight={() => navigation.navigate('CreatePost')} />
          ),
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
      <Stack.Screen name="CreatePost" component={CreatePost} />
    </Stack.Navigator>
  );
}

function SavedStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButton left onPressLeft={() => navigation.toggleDrawer()} />
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
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StackNavigation} />
        <Drawer.Screen name="SavedPost" component={SavedStackNavigation} />
      </Drawer.Navigator>
  );
}

function AuthNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Signin" component={Signin} />
      <Drawer.Screen name="Signup" component={Signup} />
    </Drawer.Navigator>
);
}


function MainNavigation() {
  const userToken = null;
  return (
    <NavigationContainer>
      {userToken ? (
        <DrawerNavigation />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  )
}


// App principale
  // funzionalita
// Autenticazione
  // sigin
  // signup
export default MainNavigation;
