import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';


const Signin  = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onPressSignup = () => {

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.input} value={email} onChangeText={value => setEmail(value)} placeholder={'email'} />
            <Text style={styles.title}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} value={password} onChangeText={value => setPassword(value)} placeholder={'Password'} />
            <Button title={'Signup'} style={{marginTop: 20}} onPress={onPressSignup} />
            <Button title={'Go to Signin'} style={{marginTop: 20}} onPress={() => navigation.navigate('Signin')} />
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