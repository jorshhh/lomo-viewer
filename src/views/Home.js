import React, { Component } from 'react';
import {  Text, Button, View } from 'react-native';

function Home({ navigation, screenName }) {
  
  return (
    <View>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Search')}
    />      
    </View>
  )
};

export default Home;