import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class ImageComponent extends Component {
    render() {
        const pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        const style = {
            height: 110,
            width: 193
        };

        return (
            <Image
                source={pic}
                style={style} />
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => ImageComponent);
export default ImageComponent;