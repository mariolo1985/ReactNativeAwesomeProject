import React from 'react';
import { AppRegistry, View } from 'react-native';

const FlexDimensions = () => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
    </View>
);

export default FlexDimensions;
