import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title={'go to'} onPress={() => props.navigation.navigate('PostDetail')} />
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
