import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/views/Home'
import Settings from './src/views/Settings'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="Home" component={HomeStack} options={{ title: 'My home' }}/>
          <Tab.Screen name="Search" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } 
}

function HomeStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Settings} />
    </Stack.Navigator>
  );
}
