import React from 'react';
import { AppRegistry, View } from 'react-native';

const FixedDimensions = () => (
    <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
    </View>
);

export default FixedDimensions;
