import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './TextArea.style.js';

class TextArea extends Component {
  render() {
    return (
      <TextInput
        style={styles.textArea}
        multiline = {true}
        onChangeText={this.props.onType}
      />
    );
  }
}

export default TextArea;