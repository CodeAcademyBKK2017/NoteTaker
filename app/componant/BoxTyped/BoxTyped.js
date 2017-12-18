import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class BoxTyped extends Component {
  render() {
    return (
        <View>
            <Text>You typed {this.props.text}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
});