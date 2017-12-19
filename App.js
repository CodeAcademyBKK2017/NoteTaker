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
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
  Button,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import TextState from './app/component/TextState';
import BoxText from './app/component/BoxText';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu eeee',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    text: '',
    modalVisible: false,
  }
  openModal = () => {
    this.setState({modalVisible:true});
  }

  stopPropagation = (e) => {
    e.stopPropagation();
  }

  closeModal = () => {
    this.setState({modalVisible:false});
  }
  changeText = (t) => {
    this.setState({text:t})
  }

  touchAble = Platform.select({
    ios: <TouchableOpacity style={styles.bt}
            onPress={this.openModal}
          >
            <Text style={{color:'#fff'}}>Button</Text>
          </TouchableOpacity>,
    android: <TouchableNativeFeedback
                onPress={this.openModal}
                >
              <View style={styles.bt}>
                <Text style={{color:'#fff'}}>Button</Text>
              </View>
            </TouchableNativeFeedback>,
  });
  render() {
    console.log(this.state.text);
    return (
      <View style={styles.container}>
        <Modal visible={this.state.modalVisible} transparent
            onRequestClose={this.closeModal}>
          <TouchableWithoutFeedback onPress={this.closeModal}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback
              onPress={this.stopPropagation}>
                <View style={styles.innerContainer}>
                  <Text>MODAL</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <BoxText changeTexts={this.changeText}/>
        <TextState text={this.state.text}/>
        {this.touchAble}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
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
  bt:{
    padding:10,
    backgroundColor:'red',
    borderRadius:10,
    marginTop:10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:  'rgba(37, 8, 10, 0.78)',
    alignItems:'center'
  },
  innerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding:10,
    width:'80%',
    height:200,
    justifyContent:'center'
  },
});
