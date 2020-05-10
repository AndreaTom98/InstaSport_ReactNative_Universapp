import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {SCREEN_WIDTH} from '../utils/helper';
import Data from '../data/fake-data';
import {useSelector} from 'react-redux'

export default function PostDetail(props) {
  const {postId} = props.route.params;
  // const postData = Data.find(post => post.id === postId)
  const postData = useSelector(state => state.posts.posts.find(post => post.id === postId))
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.userNameContainer} onPress={() => props.navigation.navigate('Profile', {
      userId: postData.userId,
    })}>
      <Text style={styles.userName}>By {postData.userName}</Text>
    </TouchableOpacity>
      <Image source={{uri: postData.image}} style={styles.image} />
      <Text style={styles.description}>{postData.description}</Text>
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
    textDecorationLine: 'underline',
    fontSize: 23
  },
  userNameContainer: {
    marginTop: 20,
    marginBottom: 20,
    width: SCREEN_WIDTH - 20,
  },
  description: {
    width: SCREEN_WIDTH - 20,
    borderWidth: 1,
    padding: 10,
    color: '#555',
    fontSize: 20
  }
});
