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
            <View style={styles.container}> 
                <Text style={styles.text}>{text ? `Your typed: ${text}` : ''}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});