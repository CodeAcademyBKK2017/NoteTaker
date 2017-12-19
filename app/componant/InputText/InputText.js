import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class InputText extends Component {
  render() {
    return (
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
        </View>
    );
  }
}

const styles = StyleSheet.create({
    textInput: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      height: 100, 
      width: 180,
      borderColor: 'gray', 
      borderWidth: 1,
    }
});