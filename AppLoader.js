import React from 'react';
import { AppRegistry, Image, ScrollView } from 'react-native';

import {
    BtnSuccess,
    BtnTouchableHighlight,
    BtnTouchableNativeFeedback,
    BtnTouchableOpacity,
    BtnTouchableWithoutFeedback
} from './components/Buttons/CustomButtons';
import FixedDimensions from './components/Size/FixedDimensions';
import FlexDimensions from './components/Size/FlexDimensions';
import HelloWorld from './components/HelloWorld/HelloWorld';
import ImageComponent from './components/NativeComponents/ImageComponent/ImageComponent';
import TextTranslator from './components/Text/TextTranslator';

const AppLoader = () => (
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

    </ScrollView>
);

AppRegistry.registerComponent('AwesomeProject', () => AppLoader);
export default AppLoader;
