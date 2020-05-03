import React, {useState} from 'react';
import {View, Text, Image,StyleSheet, TouchableOpacity} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../utils/helper';
import {useDispatch} from 'react-redux';
import {savePost} from '../store/actions/savePost'


const Post = props => {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const dispatch = useDispatch();

    let lastTap = null;
    const onPressLike = () => {
        const now = Date.now();
        const time_delay = 400
        if(lastTap && (now - lastTap) < time_delay) {
            setLike(!like)
        } else {
            lastTap = now
        } 
    }

    const onPressSave = () => {
        setSave(!save)
        const postToSave = {
            userName: props.userName,
            postImage: props.image,
            id: props.id,
        }
        dispatch(savePost(postToSave))
    }
    const heartColor = like ? 'red' : 'black';
    const saveColor = save ? 'green' : 'black';
    const imageSource = like ? require(`../assets/images/full-heart.png`) : require(`../assets/images/heart.png`)
    const saveSource = save ? require(`../assets/images/full-bookmark.png`) : require(`../assets/images/bookmark.png`)
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
                <Image source={{uri: props.imageUri}} style={styles.userImage} />
                <Text style={styles.userName}>{props.userName}</Text>
            </View>
            <TouchableOpacity onPress={props.onPressImage}>
                <Image source={{uri: props.image}} style={styles.postImage} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={onPressLike}>
                    <Image source={imageSource} style={{width: 25, height: 25, marginLeft: 10, marginTop: 10, tintColor: heartColor}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressSave}>
                    <Image source={saveSource} style={{width: 25, height: 25, marginRight: 10, marginTop: 10, tintColor: saveColor}} />
                </TouchableOpacity>
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