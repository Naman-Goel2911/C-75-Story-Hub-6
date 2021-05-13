import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class ReadStoryScreen extends React.Component{
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
    }
})