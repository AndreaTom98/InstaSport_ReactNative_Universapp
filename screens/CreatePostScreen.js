import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import {isIos} from '../utils/helper'
import axios from "axios";

export default function Profile(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const onSumbitData = async () => {
    const url = "https://instasport-66594.firebaseio.com/posts.json";
    const data = await axios.post(url, {
      title,
      image,
      description
    });

    console.log(data);
  };
  return (
    <KeyboardAvoidingView keyboardVerticalOffset={100} style={{flex:1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Titolo del post</Text>
        <TextInput
          style={styles.input}
          placeholder="scrivi il titolo"
          value={title}
          onChangeText={value => setTitle(value)}
        />
        <Text style={styles.title}>Immagine del post</Text>
        <TextInput
          style={styles.input}
          placeholder="Scrivi l'URL "
          value={image}
          onChangeText={value => setImage(value)}
        />
        <Text style={styles.title}>Descrizione del post</Text>
        <TextInput
          style={styles.input}
          placeholder="Scrivi l'URL "
          value={image}
          onChangeText={value => setImage(value)}
        />
        <Button
          title="Invia"
          style={{ marginTop: 20 }}
          onPress={onSumbitData}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10
  },
  input: {
    borderBottomWidth: 1,
    width: "90%",
    marginVertical: 10,
    paddingLeft: 5,
    paddingBottom: 5
  }
});
