import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Home from "./screens/HomeScreen";
import PostDetail from "./screens/PostDetailScreen";
import Profile from "./screens/ProfileScreen";
import SavedPost from "./screens/SavedPostScreen";
import CreatePost from './screens/CreatePostScreen';
import Signin from './screens/SignInScreen';
import Signup from './screens/SignUpScreen';
import AuthLoading from './screens/LoadingAuth'
import HeaderButton from "./components/HeaderButton";
import {useSelector, useDispatch} from 'react-redux'
import {retrieveData, logout} from './store/actions/authUser'

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

function CustomDrawer(props) {
  const dispatch = useDispatch()
  return (
    <DrawerContentScrollView>
      <DrawerItem label="Home" onPress={() => props.navigation.navigate('Home')} />
      <DrawerItem label="Saved Post" onPress={() => props.navigation.navigate('SavedPost')} />
      <DrawerItem inactiveTintColor="red" label="Logout" onPress={() => dispatch(logout())} />
    </DrawerContentScrollView>
  )
}

function DrawerNavigation() {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawer navigation={props.navigation} />}>
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
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    setIsLoading(true);
    dispatch(retrieveData()).then(() => {
      setIsLoading(false)
    })
  }, [dispatch])
  const userToken = useSelector(state => state.authUser.token)
  return (
    <NavigationContainer>
      {/* {isLoading ?
        <AuthLoading />
        :  */}
      {userToken ? (
        <DrawerNavigation />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  )
}

export default MainNavigation;
