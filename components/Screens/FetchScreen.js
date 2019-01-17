import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class FetchScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            isFetched: false
        };
    }

    componentDidMount = () => {
        fetch(
            'https://websitesbymario.herokuapp.com/api/getdata',
            {
                method: 'GET'
            }
        ).then(response => response.json())
            .then((responseJson) => {
                console.log('fetch response: ', responseJson);
                this.setState({
                    data: responseJson,
                    isFetched: true
                });
            });
    }

    render() {
        const { data, isFetched } = this.state;
        if (!isFetched) {
            return (
                (
                    <View>
                        <Text>Fetcher</Text>
                    </View>
                )
            );
        }

        return (
            <View>
                {
                    data.data.map(message => <Text key={message._id}>{message.message}</Text>)
                }
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => FetchScreen);
export default FetchScreen;
