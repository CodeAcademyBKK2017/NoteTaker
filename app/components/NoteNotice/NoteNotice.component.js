import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class NoteNotice extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
				{
					this.props.note ? <Text>You typed {this.props.note}</Text> : null
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
});
