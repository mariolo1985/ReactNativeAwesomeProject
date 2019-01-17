import React, { Component } from 'react';
import {
    AppRegistry,
    Button,
    Text,
    TextInput,
    View
} from 'react-native';

const Title = () => (
    <Text>
        Details Title
    </Text>
);

class DetailScreen extends Component {
    static navigationOptions = {
        headerTitle: <Title />,
        headerRight: (
            <Button
                color='#EEEEEE'
                title='Info'
                onPress={() => alert('Hello Details Screen!')}
            />
        )
    }

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View>
                <Text>Details Screen</Text>
                <TextInput
                    placeholder='Enter text here'
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => DetailScreen);
export default DetailScreen;
