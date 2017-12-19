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
	Modal,
	TouchableWithoutFeedback
} from 'react-native';
import NoteEditor from './app/components/NoteEditor/NoteEditor.component';

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

	stopPropagation = (event) => {
		event.stopPropagation();
	}
	
	render() {
		return (
			<View style={styles.container}>
				<NoteEditor/>
				<Button title="open modal" onPress={this.openModal}/>
				
				<Modal transparent={true} visible={this.state.modalVisible} onRequestClose={this.closeModal}>
					<TouchableWithoutFeedback onPress={this.closeModal}>
						<View style={styles.modalMainContainer}>
							<TouchableWithoutFeedback onPress={this.stopPropagation}>
								<View style={styles.modalContentContainer}>
									<Text>This is content inside of modal component</Text>
									<Button title="Close modal" onPress={this.closeModal}/>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</TouchableWithoutFeedback>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		padding: 10,
	},
	// welcome: {
	// 	fontSize: 20,
	// 	textAlign: 'center',
	// 	margin: 10,
	// },
	// instructions: {
	// 	textAlign: 'center',
	// 	color: '#333333',
	// 	marginBottom: 5,
	// },
	modalMainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(37, 8, 10, 0.28)',
		padding: 10,
	},
	modalContentContainer: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
	},
});
