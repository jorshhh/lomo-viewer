import React, { Component } from 'react';
import {  Text, Button, View } from 'react-native';

export class Home extends Component {

  render() {return (
    <View>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => this.props.navigation.navigate('Search')}

    />      
    </View>
  )}

};

export default Home;