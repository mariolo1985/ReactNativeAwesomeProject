import React, { Component } from 'react';
import {
	Text,
	View
} from 'react-native';

class HelloWorldApp extends Component {
	render() {
		const style = {
			color: 'blue',
			fontSize: 36,
			fontWeight: '600'
		};

		return (
			<View>
				<Text style={style}>Hello World</Text>
			</View>
		);
	}
}

export default HelloWorldApp;
