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
import {useSelector} from 'react-redux'

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
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
);
}


function MainNavigation() {
  const userToken = useSelector(state => state.authUser.token);
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

export default MainNavigation;
