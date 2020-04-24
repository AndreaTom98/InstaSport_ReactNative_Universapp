import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Data from '../data/fake-data';

export default function PostDetail(props) {
  const {postId} = props.route.params;
  const postData = Data.find(post => post.id === postId)
  console.warn(postData)
  return (
    <View style={styles.container}>
      <Text>Post detail</Text>
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
