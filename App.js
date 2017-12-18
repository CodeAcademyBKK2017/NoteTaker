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

const instructions = Platform.select({
  ios: 'Please enter your note here',
  android: 'Please enter your note here',
});

export default class App extends Component {
  state = {
    text : '',
  }
  
  Logger = (text) => {
    this.setState({text});
    console.log(this.state.text);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <TextInput
        style = {styles.textArea}
        multiline = {true}
        onChangeText={(text) => this.Logger(text)}
        value={this.state.text}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textArea: {
    width: 200,
    height:100,
    borderColor: 'gray',
    borderWidth: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
