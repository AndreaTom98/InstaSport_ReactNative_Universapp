import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {signup} from '../store/actions/authUser';


const Signin  = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onPressSignup = () => {
        dispatch(signup(email, password))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.input} value={email} onChangeText={value => setEmail(value)} placeholder={'email'} />
            <Text style={styles.title}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} value={password} onChangeText={value => setPassword(value)} placeholder={'Password'} />
            <Button title={'Signup'} onPress={onPressSignup} />
            <Button title={'Go to Signin'} onPress={() => navigation.navigate('Signin')} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        width: '90%',
        paddingBottom: 5,
        paddingLeft: 5,
        marginTop: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20
    },
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

export default Signin