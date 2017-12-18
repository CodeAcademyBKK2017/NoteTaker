import React, { Component } from 'react';
import { Text } from 'react-native';

class TextInfo extends Component {
  render() {
    return (
      <Text>
        {this.props.text ? 'You typed ' + this.props.text : ''}
      </Text>
    );
  }
}

export default TextInfo;