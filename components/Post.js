import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/helper';
import { Ionicons } from '@expo/vector-icons';


const Post = props => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
                <Image source={{uri: props.imageUri}} style={styles.userImage} />
                <Text style={styles.userName}>{props.userName}</Text>
            </View>
            <Image source={{uri: props.image}} style={styles.postImage} />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Ionicons style={{marginLeft: 10, marginTop: 10}} name="md-heart-empty" size={32} color="black" />
                <Ionicons style={{marginRight: 10, marginTop: 10}} name="ios-save" size={32} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3,
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
        height: SCREEN_HEIGHT / 6
    },
    userName: {
        fontSize: 25,
        marginLeft: 10
    }
})


export default Post;