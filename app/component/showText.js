import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class ShowText extends Component {
  render() {
    return (
     
        <Text>
          You type: {this.props.text}
        </Text>
    );
  }
}

export default ShowText;

