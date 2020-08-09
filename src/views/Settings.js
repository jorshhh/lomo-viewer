import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {default as Photo} from '../models/Photo';

export class Settings extends Component {


  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <View>
        <Text>This is the Search screen</Text>
        <Button
        title="Fetch photos"
        onPress={() => {
          Photo.getPopular()
          .then( (response) => {
            console.log(response);
          })
          .catch( error => {
            console.log(error);
          })
        }}
        />  
      </View>
    )
  }

};

export default Settings;