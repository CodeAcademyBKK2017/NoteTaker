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
  TextInput,Button
} from 'react-native';
import TextArea from './app/components/TextArea/TextArea.component';
import DisplayText from './app/components/DisplayText/DisplayText.component'
import Overlay from './app/components/Overlay/Overlay.component';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state = {
    data : '',
    modalVisible : false
  }
  showText  = (text) =>{
    this.setState({data : text })
  }
  render() {
    return (
      <View style={styles.container}>
        <TextArea onChangeText={this.showText}/>
        <DisplayText text={this.state.data}/>
        <Overlay visible={true}></Overlay>
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
