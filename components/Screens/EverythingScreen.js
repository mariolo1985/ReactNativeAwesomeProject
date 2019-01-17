import React from 'react';
import { AppRegistry, Image, ScrollView } from 'react-native';

import {
    BtnSuccess,
    BtnTouchableHighlight,
    BtnTouchableNativeFeedback,
    BtnTouchableOpacity,
    BtnTouchableWithoutFeedback
} from '../Buttons/CustomButtons';
import FixedDimensions from '../Size/FixedDimensions';
import FlexDimensions from '../Size/FlexDimensions';
import FlatCompList from '../Lists/FlatCompList';
import HelloWorld from '../HelloWorld/HelloWorld';
import ImageComponent from '../NativeComponents/ImageComponent/ImageComponent';
import TextTranslator from '../Text/TextTranslator';

const EverythingScreen = () => (
    <ScrollView>
        <HelloWorld />
        <ImageComponent />
        <FixedDimensions />
        <FlexDimensions />
        <TextTranslator />
        <BtnSuccess />
        <BtnTouchableHighlight />
        <BtnTouchableNativeFeedback />
        <BtnTouchableOpacity />
        <BtnTouchableWithoutFeedback />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/img/favicon.png', width: 64, height: 64 }} />
        <FlatCompList />
    </ScrollView>
);

AppRegistry.registerComponent('AwesomeProject', () => EverythingScreen);
export default EverythingScreen;
