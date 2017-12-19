import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
class Overlay extends Component{
    render(){
        return(
            <View>
              <Modal visible={this.props.modal} transparent
                    onRequestClose={this.props.closeModal}>
                <TouchableWithoutFeedback onPress={this.props.closeModal}>
                    <View style={styles.modalContainer}>
                    <TouchableWithoutFeedback
                    onPress={this.props.stop}>
                        <View style={styles.innerContainer}>
                        <Text>MODAL</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
                </Modal>
            </View>
        )
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
      borderRadius:10
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
export default Overlay;