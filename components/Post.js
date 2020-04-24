import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Post = props => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={{uri: props.imageUri}} style={styles.userImage} />
                <Text>{props.userName}</Text>
            </View>
            <Image source={{uri: props.image}} style={styles.postImage} />
            <View>
                <Ionicons name="md-heart-empty" size={32} color="black" />
                <Ionicons name="ios-save" size={32} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    postImage: {
        width: '100%',
        height: 100,
    }
})


export default Post;