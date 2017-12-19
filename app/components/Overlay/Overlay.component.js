import React,{Component} from 'react';
import {Text,View ,Modal,StyleSheet, TouchableWithoutFeedback}from 'react-native';

export default class Overlay extends Component{
    
    render(){
        const {visible,onClose,onStay} = this.props
        return(
            <Modal visible={visible}  animationType={'slide'} >
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback onPress={onStay}>
                            <Text style={styles.text}> MODAL </Text>
                        </TouchableWithoutFeedback>
                    </View>        
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
} 
const styles = StyleSheet.create({
    modalContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor: 'rgba(37, 8, 10, 0.78)',
      },
      text:{
        justifyContent:'center',
        textAlign:'center',
        fontSize: 14,
        backgroundColor: 'white',
        height:200,
        width:'80%'
      }
});