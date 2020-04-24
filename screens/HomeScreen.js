import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Post from "../components/Post";
import Data from "../data/fake-data";

export default function Home(props) {
  const Posts = Data.map(data => (
    <Post
      key={data.id}
      imageUri={data.userImage}
      userName={data.userName}
      image={data.image}
    />
  ));
  return (
    <View style={styles.container}>
      <ScrollView>{Posts}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eae8e8",
    alignItems: "center"
  }
});
