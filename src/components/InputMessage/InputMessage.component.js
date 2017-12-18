import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text
} from 'react-native';

export default class InputMessage extends Component<{}> {
    render() {
        const { onChangeText } = this.props;

        return (
            <View>
                <Text style={styles.title}>Title</Text>
                <TextInput
                    style={{ height: 40 }}
                    multiline={true}
                    placeholder="Type here to translate!"
                    onChangeText={this.props.onChangeText}
                    style={styles.textInput}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    textInput: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        height: 100,
        padding: 12
    }
});
