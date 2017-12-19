import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class NoteText extends Component<{}> {
    onChangeText = (text) => {
        this.setState({textInput: text});
        console.log("input ", text);
    }
    state = {
        textInput: ""
    };
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Title
        </Text>
        <TextInput underlineColorAndroid='transparent' value={this.state.textInput} style={[styles.inputText]} onChangeText={this.onChangeText}/>
        <Text style={styles.welcome}>
          You typed : {this.state.textInput}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    inputText: {
        width: '100%',
        height:100,
        borderColor: 'gray',
        borderWidth: 1
    },
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        // textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
