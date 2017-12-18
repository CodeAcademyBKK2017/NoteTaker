import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import TextArea from './components/TextArea/TextArea.component.js';
import TextInfo from './components/TextInfo/TextInfo.component.js';

export default class App extends Component {
  state = {
    text: ''
  }
  onType = (text) => {
      this.setState({text: text});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          TYPE
        </Text>
        <TextArea onType={this.onType} />
        <TextInfo text={this.state.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});