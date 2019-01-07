import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

class TextTranslator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userText: ''
        };
    }

    onTextChange = (text) => {
        this.setState({
            userText: text
        })
    }

    render() {
        return (
            <View style={{ padding: 10 }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder='Placeholder text here'
                    onChangeText={(text) => this.onTextChange(text)}
                />
                <Text style={{ fontSize: 36 }}>
                    {this.state.userText}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => TextTranslator);
export default TextTranslator;
