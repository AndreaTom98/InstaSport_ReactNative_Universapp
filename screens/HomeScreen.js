import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  Button
} from "react-native";
import Post from "../components/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../store/actions/fetchPost";

export default function Home(props) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchPost()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);
  const AllPosts = useSelector(state => state.posts.posts);
  const Posts = AllPosts.map(data => (
    <Post
      key={data.id}
      imageUri={data.userImage}
      userName={data.userName}
      image={data.image}
      id={data.id}
      onPressImage={() =>
        props.navigation.navigate("PostDetail", {
          postId: data.id,
          title: data.title
        })
      }
    />
  ));
  const loading = () => {
    return (
      <View>
        <ActivityIndicator size={"large"} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>{isLoading ? loading() : Posts}</ScrollView>
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
