import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Post from '../components/Post';
import Data from '../data/fake-data';

export default function Home(props) {
  const Posts = Data.map(data => (
    <Post imageUri={data.image} userName={data.userName} image={data.image} />
  ))
  return (
    <View style={styles.container}>
      {Posts}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
