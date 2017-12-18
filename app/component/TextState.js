import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
class TextState extends Component{
    render(){
        return(
            <Text>You typed {this.props.text}</Text>
        )
    }
}
export default TextState;