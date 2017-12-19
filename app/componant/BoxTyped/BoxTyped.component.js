import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  Modal
} from 'react-native';

export default class BoxTyped extends Component {

  state = {
    hide: false
  }
  
  onShowModal = () => {
    this.setState({hide: !this.state.hide});
    console.log('hide: ',this.state.hide);
  }

  render() {
    return (
      <View style={styles.containerStyle}>

        <View>
          <Text style={styles.instructions}>Plese enter your note here.</Text>
          <TextInput 
              style={styles.textInput}
              placeholder={'Text here'}
              onChangeText={this.props.onChange}
              multiline= {true}
              numberOfLines= {4}
              underlineColorAndroid='transparent'
          />
          <Text>You typed {this.props.textTyped}</Text>
        </View>

        <Button style={styles.buttonStyle} color="red" onPress={this.onShowModal} title='Show Dialog'/>

        <Modal visible={this.state.hide} transparent>
          <TouchableWithoutFeedback onPress={this.onShowModal} >
            <View style={styles.modalContainStyle}>
              <View style={styles.modalTextStyle}>
                <Text>Modal</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 100, 
    width: 180,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    color: 'red',
    borderRadius: 15,
  },
  modalContainStyle: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37, 8, 10, 0.78)',
  },
  modalTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 200,
    backgroundColor: 'white',
  }
});