import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Button
} from "react-native";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../store/actions/fetchPost";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [pushToken, setPushToken] = useState();

  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS).then(status => {
      if(status.status !== 'granted') {
        return Permissions.askAsync(Permissions.NOTIFICATIONS)
      }
      return status;
    }).then(status => {
      if(status.status !== 'granted') {
        throw new Error('no permissions')
      }
    }).then(() => {
      return Notifications.getExpoPushTokenAsync();
    }).then(data => {
      console.log(data)
      setPushToken(data.data);
    }).catch(error => {
      return null;
    })
  }, [])

  useEffect(() => {
    Notifications.addNotificationResponseReceivedListener(response => {
      alert('hai cliccato sulla notifica')
    })
    Notifications.addNotificationReceivedListener(response => {
      console.log('notifica dentro lapp')
    })
  }, [])

  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchPost()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);
  const AllPosts = useSelector(state => state.posts.posts);
  const Posts = AllPosts.map(data => (
    <Post
      key={data.id}
      imageUri={data.userImage}
      userName={data.userName}
      image={data.image}
      id={data.id}
      onPressImage={() =>
        props.navigation.navigate("PostDetail", {
          postId: data.id,
          title: data.title
        })
      }
    />
  ));

  const triggerNotification = () => {
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "la mia notifica",
    //     body: "il mio body",
    //   },
    //   trigger: {
    //     seconds: 10,
    //   }
    // })
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: pushToken,
        data: {data: 'data random'},
        title: 'my title',
        body: 'my body'
      })
  })
}
  


  const loading = () => {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Button title={'notificami'} onPress={triggerNotification} />
      <ScrollView>{isLoading ? loading() : Posts}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eae8e8",
    alignItems: "center"
  }
});
