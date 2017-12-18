/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import styles from './showText.style';

export default class ShowText extends Component {

  render() {
    const {data} = this.props;
    return (
      <Text style={styles.instructions}>
       You typed:{data}
      </Text>
    );
  }
}