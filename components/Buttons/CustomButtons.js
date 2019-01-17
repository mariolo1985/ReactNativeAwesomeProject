import React from 'react';
import {
    Alert,
    AppRegistry,
    Button,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

const touchStyle = {
    height: 50,
    width: 100
};

export const BtnSuccess = () => {
    const onBtnClick = () => {
        Alert.alert('button clicked');
    };

    return (
        <Button onPress={() => onBtnClick()} title='Learn More' styles={touchStyle} />
    );
};

export const BtnTouchableHighlight = () => {
    const onBtnClick = () => {
        Alert.alert('button clicked');
    };

    const onBtnLongPress = () => {
        Alert.alert('button long press');
    };

    return (
        <TouchableHighlight onPress={() => onBtnClick()} onLongPress={() => onBtnLongPress()} title='Learn More' style={touchStyle}>
            <Text>TouchableHighlight</Text>
        </TouchableHighlight>
    );
};


export const BtnTouchableOpacity = () => {
    const onBtnClick = () => {
        Alert.alert('button clicked');
    };

    return (
        <TouchableOpacity onPress={() => onBtnClick()} title='Learn More' style={touchStyle}>
            <Text>TouchableOpacity</Text>
        </TouchableOpacity>
    );
};


export const BtnTouchableNativeFeedback = () => {
    const onBtnClick = () => {
        Alert.alert('button clicked');
    };

    return (
        <TouchableNativeFeedback onPress={() => onBtnClick()} title='Learn More' style={touchStyle}>
            <Text>TouchableNativeFeedback</Text>
        </TouchableNativeFeedback>
    );
};

export const BtnTouchableWithoutFeedback = () => {
    const onBtnClick = () => {
        Alert.alert('button clicked');
    };

    return (
        <TouchableWithoutFeedback onPress={() => onBtnClick()} title='Learn More' style={touchStyle}>
            <Text>TouchableWithoutFeedback</Text>
        </TouchableWithoutFeedback>
    );
};

// Real custom
export const BtnLink = ({
    text,
    onBtnClick
}) => (
        <TouchableHighlight
            onPress={() => onBtnClick()}
            title='Learn More'
            style={touchStyle}
        >
            <Text style={{ color: '#0485cc' }}>{text}</Text>
        </TouchableHighlight>
    );

AppRegistry.registerComponent('AwesomeProject', () => BtnSuccess);
AppRegistry.registerComponent('AwesomeProject', () => BtnTouchableHighlight);
AppRegistry.registerComponent('AwesomeProject', () => BtnTouchableNativeFeedback);
AppRegistry.registerComponent('AwesomeProject', () => BtnTouchableOpacity);
AppRegistry.registerComponent('AwesomeProject', () => BtnTouchableWithoutFeedback);

AppRegistry.registerComponent('AwesomeProject', () => BtnLink);
