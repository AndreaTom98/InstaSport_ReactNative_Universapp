import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function Profile(props) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const onSumbitData = () => {

  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Titolo del post</Text>
        <TextInput style={styles.input} placeholder="scrivi il titolo" value={title} onChangeText={value => setTitle(value)}  />
        <Text style={styles.title}>Immagine del post</Text>
        <TextInput style={styles.input} placeholder="Scrivi l'URL " value={image} onChangeText={value => setImage(value)}  />
        <Text style={styles.title}>Descrizione del post</Text>
        <TextInput style={styles.input} placeholder="Scrivi la descrizione " value={description} onChangeText={value => setDescription(value)}  />
        <Button title="Invia" style={{marginTop: 20}} onPress={onSumbitData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10
  },
  input: {
      borderBottomWidth: 1,
      width: '90%',
      marginVertical: 10,
      paddingLeft: 5,
      paddingBottom: 5
  }
});
