import React, { Fragment } from 'react';
import HelloWorld from './components/HelloWorld/HelloWorld';
import ImageComponent from './components/NativeComponents/ImageComponent/ImageComponent';
import FixedDimensions from './components/Size/FixedDimensions';
import FlexDimensions from './components/Size/FlexDimensions';
import TextTranslator from './components/Text/TextTranslator';

const App = () => (
	<Fragment>
		<HelloWorld />
		<ImageComponent />
		<FixedDimensions />
		<FlexDimensions />
		<TextTranslator />
	</Fragment>
);

export default App;
