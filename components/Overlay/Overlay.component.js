import React, { Component } from 'react';
import { Modal, TouchableWithoutFeedback, TouchableOpacity, View, Text } from 'react-native';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(37, 8, 10, 0.78)',
    },
    innerContainer: {
        width: '100%',
        backgroundColor: 'white',
        height: 200,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer__text: {
        fontSize: 14
    }
};

class Overlay extends Component {
    render() {
        return (
            <Modal onRequestClose={() => {}}>
                <View style={styles.container}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.innerContainer__text}>Modal</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default Overlay;