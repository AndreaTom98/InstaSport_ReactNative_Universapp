import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/helper';
import Data from '../data/fake-data';

export default function PostDetail(props) {
  const {postId} = props.route.params;
  const postData = Data.find(post => post.id === postId)
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => props.navigation.navigate('Profile', {
      postData
    })}>
      <Text style={styles.userName}>By {postData.userName}</Text>
    </TouchableOpacity>
      <Image source={{uri: postData.image}} style={styles.image} />
      <Text>{postData.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH - 20,
    height: 400,
  },
  userName: {
    textDecorationLine: 'underline'
  }
});
