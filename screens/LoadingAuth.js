import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';

const LoadingAuth = () => {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading for you</Text>
            <ActivityIndicator size={'large'} />
        </View>
    )
}

export default LoadingAuth;