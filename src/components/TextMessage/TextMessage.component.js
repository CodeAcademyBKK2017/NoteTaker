import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class TextMessage extends Component<{}> {
    render() {
        const { text } = this.props;

        return (
            <Text style={styles.text}>{text ? `Your typed: ${text}` : ''}</Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
    }
});
