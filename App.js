/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Button
} from 'react-native';
import InputMessage from './src/components/InputMessage/InputMessage.component';
import TextMessage from './src/components/TextMessage/TextMessage.component';
import Overlay from './src/components/Overlay/Overlay.component';

export default class App extends Component<{}> {
  state = {
    currentText: '',
    showModal: false,
  }

  onChangeText = (text) => {
    this.setState({ currentText: text });
  }

  onModalDismiss = () => {
    this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  render() {
    const { currentText, showModal } = this.state;

    return (
      <View style={styles.container}>
        <InputMessage onChangeText={this.onChangeText} />
        <TextMessage text={currentText} />
        <Button onPress={this.openModal} color="#4693ef" title="Open Modal" />
        <Overlay visible={showModal} onModalDismiss={this.onModalDismiss}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

    justifyContent: 'center',
    alignItems: 'center',
  }
});
