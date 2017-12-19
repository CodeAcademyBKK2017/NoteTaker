import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import TextArea from './components/TextArea/TextArea.component.js';
import TextInfo from './components/TextInfo/TextInfo.component.js';
import Overlay from './components/Overlay/Overlay.component.js';

export default class App extends Component {
  state = {
    text: '',
    showModal: false
  }
  onType = (text) => {
    this.setState({text: text});
}
  hideModal = () => {
    this.setState({showModal: false});
  }
  showModal = () => {
    this.setState({showModal: true});
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.paragraph}>
            TYPE
          </Text>
          <TextArea onType={this.onType} />
          <TextInfo text={this.state.text} />
        </View>
        <View>
          <Overlay visible={this.state.showModal} hideModal={this.hideModal} />
          <Button
            onPress={this.showModal}
            title="Show Modal"
            color="#841584"
            accessibilityLabel="Show Modal"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});