import React from 'react';
import {
    Text,
    View
} from 'react-native';

const HelloWorldApp = () => {
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
};

export default HelloWorldApp;
