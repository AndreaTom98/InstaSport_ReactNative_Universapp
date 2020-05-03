import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SavedPost from '../components/SavedPost';
import {removePost} from '../store/actions/removePost';
import {useSelector, useDispatch} from 'react-redux'

export default function SavedPostScreen() {
  const dispatch = useDispatch();

  const savedPostList = useSelector(state => {
    const postArray = [];
    for (id in state.savedPost.savedItems) {
      postArray.push(state.savedPost.savedItems[id])
    }
    return postArray;
  });

  console.log(savedPostList)

  const myPosts = savedPostList.map(post => (
    <SavedPost onRemovePost={() => dispatch(removePost(post.id))} key={post.id} userName={post.userName} image={post.postImage} />
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
