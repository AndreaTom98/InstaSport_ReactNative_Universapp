import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {SCREEN_WIDTH} from '../utils/helper';
import Data from '../data/fake-data';

export default function Profile(props) {
  const {userId} = props.route.params;
  const userPosts = Data.filter(post => post.userId === userId);
  console.warn(userPosts);
  const postsImages = userPosts.map(post => (
    <Image source={{uri: post.image}} style={styles.image} />
  ))
  return (
    <View style={styles.container}>
      {postsImages}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 3
  }
});
