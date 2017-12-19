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
class Overlay extends Component {
    stopPropagation = (e) => {
        e.stopPropagation();
      }
    render() {
        return (
        <Modal
            visible={this.props.modalVisible}
            onRequestClose={this.props.closeModal}
            transparent
        >
        <TouchableWithoutFeedback
        onPress={this.props.closeModal}>
          <View style={styles.modalContainer}>
          <TouchableWithoutFeedback
        onPress={this.stopPropagation}>
            <View style={styles.innerContainer}>
              <Text style={{fontSize:14,}}>This is content inside of modal component</Text>
              
            </View>
            </TouchableWithoutFeedback>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
        )
    }

}
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(37, 8, 10, 0.78)',
      alignItems: 'center'
    },
    innerContainer: {
      alignItems: 'center',
      backgroundColor: '#fff',
      width:'80%',
      height:200,
      justifyContent: 'center'
      
    },
    
  });
  export default Overlay;