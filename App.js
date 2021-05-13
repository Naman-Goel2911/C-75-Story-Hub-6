import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from  'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {Headerar} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render()
  {
    return (
      <SafeAreaProvider>        
        <Header 
          backgroundColor={'#9c8210'}
          centerComponent={{
          text: 'Story Hub',
          style: { color: '#fff', fontSize: 20 },
          }}/>
          <AppContainer />
      </SafeAreaProvider>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Reading: {screen: ReadStoryScreen},
  Writing: {screen: WriteStoryScreen}
},
{
  defaultNavigationOptions: ({navigation}) => (
    {
      tabBarIcon: () => {
        const routeName = navigation.state.routeName
        if(routeName === "Reading")
        {
          return(
            <Image 
            source = {require('./assets/read.png')}
            style = {{width: 40, height: 40}}
            />
          )
        }
        else if(routeName === "Writing"){
          return(
            <Image 
            source = {require('./assets/write.png')}
            style = {{width: 40, height: 40}}
            />
          )
        }
      }
    }
  )
}
)

const AppContainer = createAppContainer(TabNavigator)
