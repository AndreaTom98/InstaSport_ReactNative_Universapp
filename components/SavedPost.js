import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import {SCREEN_WIDTH} from '../utils/helper';

export default function SavedPost(props) {
  const saveSource = true ? require(`../assets/images/full-bookmark.png`) : require(`../assets/images/bookmark.png`)
  return (
    <View style={styles.container}>
      <Image source={{uri: props.image}} style={styles.postImage} />
      <Text style={styles.userName}>{props.userName}</Text>
      <Image source={saveSource} style={styles.saveImage}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#aaa',
    width: SCREEN_WIDTH - 20,
    height: 130,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    marginTop: 20
  },
  postImage: {
      height: 80,
      width: SCREEN_WIDTH / 3,
  },
  saveImage: {
    width: 25,
    height: 25
  },
  userName: {
      fontSize: 20, 
      fontWeight: '500',
  }
});
