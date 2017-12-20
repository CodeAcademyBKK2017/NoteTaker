import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Button
} from 'react-native';

class ModalUI extends Component {
     
  stopPropagation = (e) => e.stopPropagation()
  
  render() {
    return (
        <Modal visible={this.props.modalVisible} animationType={'slide'} onRequestClose={this.props.closeModal}>
            <TouchableWithoutFeedback onPress = {this.props.closeModal}>
            <View style={styles.containerModal}>
                <TouchableWithoutFeedback onPress = {this.stopPropagation}>
                <View style={styles.inner}>
                <Text style={styles.modal}>
                    This is content inside of modal component
                </Text>
                </View>
                </TouchableWithoutFeedback>
            </View>
            </TouchableWithoutFeedback>
        </Modal>             
    );
  }
}

const styles = StyleSheet.create({
   
      modal: {
        textAlign: 'center',
        
      },
      inner: {
          borderColor: 'gray',
          borderWidth: 1,
          justifyContent: 'center',
          height: 200,
          width: '100%',
          backgroundColor: 'white',
      },
    
      containerModal: {
          backgroundColor: 'rgba(37, 8, 10, 0.78)',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10
        },
    
    });


export default ModalUI;

