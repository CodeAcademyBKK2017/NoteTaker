import React, { Component } from 'react';
import {Text,TextInput,View,StyleSheet} from 'react-native';
export default class DisplayText extends Component{
    render(){
        return(
            <View >
                <Text style={styles.text}>{this.props.text !== '' ? 'You Type' : '' } {this.props.text}</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    text:{
        color:'blue',
        fontSize: 20,
        textAlign: 'left'
    }
});