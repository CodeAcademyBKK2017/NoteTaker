/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native';
import NoteEditor from './app/components/NoteEditor/NoteEditor.component';
import Alert from './app/components/Alert/Alert.component';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
	state = {
		modalVisible: false,
	};

	openModal = () => {
		this.setState({modalVisible:true});
	}
	
	closeModal = () => {
		this.setState({modalVisible:false});
	}

	render() {
		return (
			<View style={styles.container}>
				<NoteEditor/>
				<Button title="open modal" onPress={this.openModal}/>
				<Alert visible={this.state.modalVisible} onClose={this.closeModal}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		padding: 10,
	},
});
