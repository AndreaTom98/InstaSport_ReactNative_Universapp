import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SavedPost from '../components/SavedPost';

export default function SavedPostScreen() {
  return (
    <View style={styles.container}>
      <SavedPost />
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
