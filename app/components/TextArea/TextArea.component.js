import React, { Component } from 'react';
import {Text,TextInput,View,StyleSheet} from 'react-native';

export default class TextArea extends Component<{}>{
    render(){
    return (
        <View>
            <Text> Please enter your note here</Text>
            <TextInput style={styles.textArea} onChangeText={this.props.onChangeText}></TextInput>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    textArea:{
        width:300,
      height:200,
      borderWidth : 5,
    },
});