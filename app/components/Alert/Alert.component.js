import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	Modal,
	TouchableWithoutFeedback
} from 'react-native';

export default class Alert extends Component<{}> {
	stopPropagation = (event) => {
		event.stopPropagation();
	}

	render() {
		return (
			<Modal transparent={true} visible={this.props.visible} onRequestClose={this.props.onClose}>
				<TouchableWithoutFeedback onPress={this.props.onClose}>
					<View style={styles.modalMainContainer}>
						<TouchableWithoutFeedback onPress={this.stopPropagation}>
							<View style={styles.modalContentContainer}>
								<Text style={styles.title}>{this.props.title}</Text>
								<View style={styles.messageContainer}>
									<Text style={styles.message}>{this.props.message}</Text>
								</View>
								<Button title="Close modal" onPress={this.props.onClose}/>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
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
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
	},
	title: {
		padding: 10,
		fontSize: 20,
	},
	messageContainer: {
		display: 'flex',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
		fontSize: 14,
	},
});
