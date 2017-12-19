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
        <BoxTyped textTyped={this.state.textTyped}/>
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
