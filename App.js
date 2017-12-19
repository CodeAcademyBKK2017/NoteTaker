/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import InputText from './app/component/inputText';
import ShowText from './app/component/showText';
import ModalUI from './app/component/Overlay/modal';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    text: '',
    modalVisible: false
  }

   changeText = (newValue) => {
     this.setState({text: newValue});
   }


  openModal = () => {
    this.setState({modalVisible:true});
  }

  closeModal = () => {
    this.setState({modalVisible:false});
  }

  render() {
 return (
 <View style={styles.container}>
    <InputText changeText={this.changeText}/>
      <ShowText text={this.state.text}/>
     
      <View>
          <ModalUI modalVisible={this.state.modalVisible} closeModal={this.closeModal} />
          <TouchableOpacity onPress={this.openModal}>
            <Text>XXX</Text>
          </TouchableOpacity>
      </View>
      
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
});
