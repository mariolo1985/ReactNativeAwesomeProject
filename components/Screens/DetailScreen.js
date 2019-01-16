import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

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
            </View>
        );
    }
}

export default DetailScreen;
