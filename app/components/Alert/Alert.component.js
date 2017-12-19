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
								<Text>This is content inside of modal component</Text>
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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
	},
});
