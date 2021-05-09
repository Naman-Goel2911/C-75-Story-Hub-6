import * as React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config'

export default class WriteStoryScreen extends React.Component{
    constructor()
    {
        super();
        this.state = {
            title: '',
            author: '',
            story: ''
        }
    }

    submitStory = async () => {
        db.collection("stories").doc('story1').update({
            author: this.state.author,
            title: this.state.title,
            theStory: this.state.story
        })

        alert("Your story has been submitted")

        this.setState({
            title: '',
            author: '',
            story: ''
        })
    }

    render()
    {
        return(
            <SafeAreaProvider>
                <KeyboardAvoidingView  behavior = "padding" enabled>
                    <Header
                    backgroundColor = {'#9c8210'}
                    centerComponent = {{
                        text: 'Write Story',
                        style: { color: '#fff', fontSize: 20 },
                    }}
                    />
                    <View>
                        <TextInput
                        style = {styles.inputBox}
                        placeholder = "Title of the Story"
                        onChangeText = {(text)=>{
                            this.setState({
                                title: text
                            })
                        }}
                        value = {this.state.title} 
                        />
                    </View>
                    <View>
                        <TextInput
                        style = {styles.inputBox}
                        placeholder = "Author of the Story"
                        onChangeText = {(text)=>{
                            this.setState({
                                author: text
                            })
                        }}
                        value = {this.state.author} 
                        />
                    </View>
                    <View>
                    <TextInput
                        style = {styles.inputBox}
                        placeholder = "The Story"
                        onChangeText = {(text)=>{
                        this.setState({
                        story: text
                            })
                        }}
                        value = {this.state.story} 
                        multiline = {true}
                    />
                    </View>
                    <TouchableOpacity 
                    style = {styles.submitButton}
                    onPress = {() => {
                        this.submitStory();
                    }}
                    >
                        <Text style = {styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaProvider>                
        )
    }
}

const styles = StyleSheet.create({
    inputBox: {
        width: 200,
        height: 40,
        borderWidth: 2,
        borderRightWidth: 0,
        fontSize: 20,
        margin: 10,
        marginTop: 20,
        alignSelf: 'center'
    },
    submitButton: {
        backgroundColor: "yellow",
        width: 100,
        height: 50,
        alignSelf: 'center'
    },
    submitButtonText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
})