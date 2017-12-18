import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class InputText extends Component {
  render() {
    return (
        <View>
                <Text style={styles.welcome}>
                Please enter 
                </Text>
                <TextInput
                style={{width:250,height: 100, borderColor: 'gray', borderWidth: 1}}
                onChangeText={this.props.changeText}
                multiline = {true}
                numberOfLines = {4}
                />
            </View>
    );
  }
}

const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 20,
    },
  });


export default InputText;

