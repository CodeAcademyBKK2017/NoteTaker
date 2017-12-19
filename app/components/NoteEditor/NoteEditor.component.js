import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput
} from 'react-native';
import NoteNotice from '../NoteNotice/NoteNotice.component';

export default class NoteEditor extends Component<{}> {
	state = {
		note: ""
	};

	onChangeText = (text) => {
		this.setState({
			note: text
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Title</Text>
				<TextInput style={styles.textInput} onChangeText={this.onChangeText} placeholder="Type here"/>
				<NoteNotice note={this.state.note}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	textInput: {
		width: '100%',
		height: 100,
		borderColor: 'gray',
		borderWidth: 1
	},
});
