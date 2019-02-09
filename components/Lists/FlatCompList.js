import React from 'react';
import { AppRegistry, FlatList } from 'react-native';

import {
    BtnSuccess,
    BtnTouchableHighlight,
    BtnTouchableNativeFeedback,
    BtnTouchableOpacity,
    BtnTouchableWithoutFeedback
} from '../Buttons/CustomButtons';
import FixedDimensions from '../Size/FixedDimensions';
import FlexDimensions from '../Size/FlexDimensions';
import HelloWorld from '../HelloWorld/HelloWorld';
import ImageComponent from '../NativeComponents/ImageComponent/ImageComponent';
import TextTranslator from '../Text/TextTranslator';

const FlatCompList = () => (
    <FlatList
        data={
            [
                {
                    key: '0',
                    component: HelloWorld
                },
                {
                    key: '1',
                    component: BtnTouchableHighlight
                },
                {
                    key: '2',
                    component: BtnTouchableNativeFeedback
                },
                {
                    key: '3',
                    component: BtnTouchableOpacity
                },
                {
                    key: '4',
                    component: BtnTouchableWithoutFeedback
                },
                {
                    key: '5',
                    component: FixedDimensions
                },
                {
                    key: '6',
                    component: FlexDimensions
                },
                {
                    key: '7',
                    component: ImageComponent
                },
                {
                    key: '8',
                    component: TextTranslator
                },
                {
                    key: '9',
                    component: BtnSuccess
                }
            ]
        }
        renderItem={
            ({ item }) => (<item.component />)
        }
    />
);

export default FlatCompList;
