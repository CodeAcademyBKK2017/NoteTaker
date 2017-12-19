import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';

export default class CustomModal extends Component<{}> {
    
  render() {
    return (
        <Modal >
            <View style={styles.setBox}>
                <View style={styles.boxModal}>
                    <Text style={styles.buttonFont}>
                        test
                    </Text>
                </View>
            </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
    setBox: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor: 'rgba(37, 8, 10, 0.78)',
        padding: 10,
    },
    buttonFont: {

    },
    boxModal: {
        backgroundColor: 'white',
        height: 200,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    }
});
