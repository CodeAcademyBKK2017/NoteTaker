import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
class BoxText extends Component{
    render(){
        return(
            <View>
            <Text style={styles.welcome}>
                Please enter note here
            </Text>
            <TextInput
            style={{width:200,height: 100, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.props.changeText}
            placeholder={'text'}
            multiline = {true}
            numberOfLines = {4}
            value = {this.props.changeText}
            />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    bt:{
      padding:10,
      backgroundColor:'red',
      borderRadius:10
    }
  });
export default BoxText;