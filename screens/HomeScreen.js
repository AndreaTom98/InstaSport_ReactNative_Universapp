import React, {useEffect} from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Post from "../components/Post";
import {useSelector, useDispatch} from 'react-redux';
import {fetchPost} from '../store/actions/fetchPost'

export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  })
  const AllPosts = useSelector(state => state.posts.posts)
  const Posts = AllPosts.map(data => (
    <Post
      key={data.id}
      imageUri={data.userImage}
      userName={data.userName}
      image={data.image}
      id={data.id}
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
