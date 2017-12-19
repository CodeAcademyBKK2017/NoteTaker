import React,{Component} from 'react';
import {Text,View ,Modal,StyleSheet}from 'react-native';

export default class Overlay extends Component{
    render(){
        return(
            <Modal visible={this.props.visible}>
                <View style={styles.modalContainer} >
                    <Text style={styles.text}> MODAL </Text>
                </View>        
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