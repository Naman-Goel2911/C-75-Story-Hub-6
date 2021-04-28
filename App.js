import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from  'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Header} from 'react-native-elements';
import ReadStoryScreen from './screens';
import WriteStoryScreen from './screens';

export default class App extends React.Component {
  render()
  {
    return (
      <View style={styles.container}>
        <Header 
        backgroundColor={'#9c8210'}
        centerComponent={{
        text: 'Story Hub',
        style: { color: '#fff', fontSize: 20 },
        }}/>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Reading: {screen: ReadStoryScreen},
  Writing: {screen: WriteStoryScreen}
})

const AppContainer = createAppContainer(TabNavigator)
