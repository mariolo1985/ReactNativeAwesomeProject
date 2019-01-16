import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Home',
            headerRight:
                (
                    <Button
                        onPress={(navigation.getParam('increaseCount'))}
                        title='+1'
                        color='#fff'
                    />
                )
        };
    }

    constructor(props) {
        super(props);

        const { navigation } = props;
        navigation.setParams({
            increaseCount: this.onIncreaseCount
        });


        this.state = {
            count: 0
        };
    }

    onIncreaseCount = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { count } = this.state;
        return (

            <View>
                <Text>Home Screen</Text>
                <Text>
                    {count}
                </Text>
                <Button onPress={() => navigate('Detail')} title='Add Details' />
            </View>
        );
    }
}

export default HomeScreen;
