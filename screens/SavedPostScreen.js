import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SavedPost from '../components/SavedPost';
import {useSelector} from 'react-redux'

export default function SavedPostScreen() {
  const savedPostList = useSelector(state => {
    const postArray = [];
    for (id in state.savedPost.savedItems) {
      postArray.push(state.savedPost.savedItems[id])
    }
    return postArray;
  });

  console.log(savedPostList)

  const myPosts = savedPostList.map(post => (
    <SavedPost key={post.id} userName={post.userName} image={post.postImage} />
  ))
  return (
    <View style={styles.container}>
      {myPosts}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
