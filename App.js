/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ShowText from './app/component/showText';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state = {
    text: ''
  }

   changeText = (newValue) => {
     this.setState({text: newValue});
   }

  render() {
    console.log(this.state.text);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Please enter your note here
        </Text>
        <TextInput style={styles.instructions} onChangeText = {this.changeText}/>
        <ShowText text={this.state.text}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  instructions: {
    width: 200,
    height:100,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
