import * as React from 'react';
import { View, KeyboardAvoidingView, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor()
    {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    login = async (email, password) =>{
        if(email && password)
        {
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if(response)
                {
                    this.props.navigation.navigate("Reading")
                }
            }
            catch(error)
            {
                switch(error.code)
                {
                    case 'auth/user-not-found': 
                        alert('User does not exist')
                        break;
                    case 'auth/invalid-email':
                        alert('Incorrect E-mail or Password')
                        break;
                }
            }
        }
        else{
            alert('Enter E-mail and Password')
        }
    }

    render()
    {
        return(
            <KeyboardAvoidingView  style = {{alignItems: 'center', marginTop: 20}}>
                <View>
                    <Image
                        source = {require('../assets/boyReading.jpg')}
                        style = {{width: 200, height: 200}}
                    />
                    <View>
                        <TextInput 
                            style = {styles.loginBox}
                            placeholder = 'abc@email.com'
                            keyboardType = 'email-address'
                            onChangeText = {(text) => {
                                this.setState({
                                    email: text
                                })
                            }}
                        />
                        <TextInput
                        style = {styles.loginBox}
                        placeholder = 'Enter Password'
                        secureTextEntry = {true}
                        onChangeText = {(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                         style = {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 7}}
                         onPress = {()=> {
                             this.login(this.state.email, this.state.password);
                         }}
                        >
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
    }
})