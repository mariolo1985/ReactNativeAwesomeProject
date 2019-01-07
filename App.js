import React, { Fragment } from 'react';

import { BtnSuccess, BtnTouchableHighlight, BtnTouchableNativeFeedback, BtnTouchableOpacity, BtnTouchableWithoutFeedback } from './components/Buttons/CustomButtons';
import FixedDimensions from './components/Size/FixedDimensions';
import FlexDimensions from './components/Size/FlexDimensions';
import HelloWorld from './components/HelloWorld/HelloWorld';
import ImageComponent from './components/NativeComponents/ImageComponent/ImageComponent';
import TextTranslator from './components/Text/TextTranslator';

const App = () => (
	<Fragment>
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
	</Fragment>
);

export default App;
