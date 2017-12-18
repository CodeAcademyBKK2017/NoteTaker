/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import InputText from './app/componant/InputText/InputText';
import BoxTyped from './app/componant/BoxTyped/BoxTyped';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  state = {
    textTyped: '...'
  };

  onChange = (v) => {
    this.setState({textTyped: v})
    console.log('state : ',this.state.textTyped)
  };

  render() {
    return (
      <View style={styles.container}>
        <InputText onChange={this.onChange}/>
        <BoxTyped text={this.state.textTyped}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
