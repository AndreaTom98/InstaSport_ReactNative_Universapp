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
                <Ionicons style={{marginLeft: 10, marginTop: 10}} name="md-heart-empty" size={28} color="black" />
                <Ionicons style={{marginRight: 10, marginTop: 10}} name="md-bookmark" size={28} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3,
        marginVertical: 10,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        backgroundColor: 'white'
    },
    userImage: {
        width: SCREEN_HEIGHT / 15,
        height: SCREEN_HEIGHT / 15,
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