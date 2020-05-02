import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Post from "../components/Post";
import {useSelector} from 'react-redux';

export default function Home(props) {
  const AllPosts = useSelector(state => state.posts.posts)
  console.warn(AllPosts)
  const Posts = AllPosts.map(data => (
    <Post
      key={data.id}
      imageUri={data.userImage}
      userName={data.userName}
      image={data.image}
      onPressImage={() => props.navigation.navigate('PostDetail', {
        postId: data.id,
        title: data.title,
      })}
    />
  ));
  return (
    <View style={styles.container}>
      <ScrollView>{Posts}</ScrollView>
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
