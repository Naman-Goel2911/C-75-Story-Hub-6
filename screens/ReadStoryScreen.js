import * as React from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Header, SearchBar} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from '../config'

export default class ReadStoryScreen extends React.Component{

    constructor()
    {
        super();
        this.state = {
            searchedText: '',
            allStories: [],
            lastVisibleStory: null
        }
    }

    searchTransaction = async (text) => {
        var enteredText = text;
        
            const transactions = await db.collection('stories').where("author", "==", enteredText).get();
            transactions.docs.map((doc)=>{
                this.setState({
                    allStories: [...this.state.allStories, doc.data()],
                    lastVisibleStory: doc
                })
            })

            const transaction = await db.collection('stories').where("title", "==", enteredText).get();
            transaction.docs.map((doc)=>{
                this.setState({
                    allStories: [...this.state.allStories, doc.data()],
                    lastVisibleStory: doc
                })
            })
        
    }

    render()
    {
        return(
            <SafeAreaProvider>
                <View>
                    <Header
                        backgroundColor = {'#9c8210'}
                        centerComponent = 
                        {{
                            text: 'Write Story',
                            style: { color: '#fff', fontSize: 20 },
                        }}
                    />

                    <SearchBar 
                    style = {styles.bar}
                    placeholder = "Search Stories..."
                    onChangeText = {(text) => {
                        this.setState({
                            searchedText: text
                        })
                    }}
                    value = {this.state.searchedText}
                    />

                    <TouchableOpacity
                    style = {styles.searchButton}
                    onPress = {() => {
                        this.searchTransaction(this.state.searchedText)
                    }}
                    >
                        <Text>Search</Text>
                    </TouchableOpacity>

                    <View>
                        <ScrollView>
                            {this.state.allStories.map((story, index)=> {
                               return(
                                   <View key = {index} style = {{borderBottomWidth: 2}}>
                                       <Text> {"Author: " + story.author} </Text>
                                       <Text> {"Title: " + story.title} </Text>
                                   </View>
                               ) 
                            })
                            }
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bar: {
        borderWidth: 2,
        height: 30,
        width: 300,
        paddingLeft: 10,
    },
    searchButton: {
        borderWidth: 1,
        height: 30,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
})