import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    style
} from 'react-native';
class Textstate extends Component {
    render() {
        return (
            <Text>You typed {this.props.text}</Text>
        );
    }
}
export default Textstate;
