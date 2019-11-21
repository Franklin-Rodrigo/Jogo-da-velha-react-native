import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    AsyncStorage,
    KeyboardAvoidingView
} from 'react-native'

import Api from '../services/Api'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect(() => {
        // se eu encontrei um usuario então
        AsyncStorage.getItem('id').then(id => {
            //se exist
            //console.log(id)
            if (id) {
                navigation.navigate('Home')
            }
        })
        
    }, [])

    signIn = async () => {
       
        let response = await Api.post('/login', {
            email,
            password
        });    
        const { _id } = response.data
        //console.log(response.data)
        await AsyncStorage.setItem('id', _id) 
        await AsyncStorage.setItem('email', email)

        navigation.navigate('Home')
    }

    return (
        <View style={styles.container} >
            <View  style={[styles.form, ]}>
                <Text style={styles.label}>email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='seu email'
                    placeholderTextColor='#999'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder='senha'
                    placeholderTextColor='#999'
                    secureTextEntry={true}
                    autoCorrect={false}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={signIn}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
    },

    button: {
        height: 42,
        backgroundColor: '#0475D8',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})
