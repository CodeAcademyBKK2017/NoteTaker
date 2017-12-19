import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    Button,
    TouchableWithoutFeedback
} from 'react-native';

export default class TextMessage extends Component<{}> {
    stopPropagation = (e) => e.stopPropagation()

    render() {
        const { visible } = this.props;

        return (
            <Modal visible={visible} transparent={true} onRequestClose={this.props.onModalDismiss}>
                <TouchableWithoutFeedback onPress={this.props.onModalDismiss}>
                    <View style={styles.container}>
                        <TouchableWithoutFeedback onPress={this.stopPropagation}>
                            <View style={styles.box}>
                                <Text style={styles.title}>Modal</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(37, 8, 10, 0.78)'
    },
    box: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    title: {
        fontSize: 14
    }
});