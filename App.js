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
  TextInput,
  style,
  Button,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import Textstate from './app/component/Textstate';
import Boxstate from './app/component/Boxstate';
import Overlay from './app/component/Overlay.component';
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
    };
    nan =(t)=>{
      this.setState({text:t});
    }
    openModal = () => {
      this.setState({modalVisible:true});
    }
    
    closeModal = () => {
      this.setState({modalVisible:false});
    }
  render() {
    console.log(this.state.text);
    return (
      <View style={styles.container}>
        <Overlay modalVisible={this.state.modalVisible} closeModal={this.closeModal}/>
        <Boxstate nans={this.nan}/>
        <Textstate text={this.state.text} />
       <TouchableOpacity style={styles.bt} 
              onPress={this.openModal}
          >
          <Text style={{color:'#000'}}>Nanny</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(37, 8, 10, 0.78)',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width:'80%',
    height:200,
    justifyContent: 'center'
    
  },
  bt:{
    backgroundColor:'yellow',
    padding:10
    
    }
  
});
