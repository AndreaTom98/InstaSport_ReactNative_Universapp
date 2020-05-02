import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SavedPost from '../components/SavedPost';
import {useSelector} from 'react-redux'

export default function SavedPostScreen() {
  const savedPostList = useSelector(state => state.savedPost);
  const myPosts = savedPostList.savedItems.map(post => (
    <SavedPost userName={post.userName} image={post.postImage} />
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
