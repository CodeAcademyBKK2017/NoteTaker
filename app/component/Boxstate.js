import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    style
} from 'react-native';
class Boxstate extends Component {
    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                Please enter 
                </Text>
                <TextInput
                style={{width:250,height: 100, borderColor: 'gray', borderWidth: 1}}
                onChangeText={this.props.nan}
                multiline = {true}
                numberOfLines = {4}
                value = {this.props.nan}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
  });
export default Boxstate;