import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal
} from 'react-native';

class ModalUI extends Component {
  render() {
    return (
        <Modal>
            <View style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.modal}>
                        Modal 
                    </Text>
                </View>                   
            </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
    modal: {
      fontSize: 14,
      textAlign: 'center',
      
    },
    inner: {
        borderColor: 'gray',
        borderWidth: 1,
        justifyContent: 'center',
        height: 200,
      width: '100%',
        backgroundColor: 'white'
    },

    container: {
        backgroundColor: 'rgba(37, 8, 10, 0.78)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      },
  });


export default ModalUI;

