/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import InputMessage from './src/components/InputMessage/InputMessage.component';
import TextMessage from './src/components/TextMessage/TextMessage.component';

export default class App extends Component<{}> {
  state = {
    currentText: ''
  }

  onChangeText = (text) => {
    this.setState({ currentText: text });
  }

  render() {
    const { currentText } = this.state;

    return (
      <View style={styles.container}>
        <InputMessage onChangeText={this.onChangeText} />
        <TextMessage text={currentText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }
});
