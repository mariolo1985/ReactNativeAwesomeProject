import React, { Component } from 'react';
import { Animated, Button, Text, View } from 'react-native';

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
            count: 0,
            fadeAnim: new Animated.Value(0),
            yPosition: new Animated.Value(0)
        };
    }

    onIncreaseCount = () => {
        const { count } = this.state;
        this.setState({
            count: count + 1
        });
    }

    componentDidMount = () => {
        const { fadeAnim, yPosition } = this.state;
        Animated.sequence([
            Animated.timing(
                fadeAnim,
                {
                    duration: 2000,
                    toValue: 1
                }
            ),
            Animated.timing(
                yPosition,
                {
                    duration: 2000,
                    toValue: 50
                }
            )
        ]).start();
    }

    render() {
        const { navigate } = this.props.navigation;
        const { count, fadeAnim, yPosition } = this.state;
        return (

            <View>
                <Text>Home Screen</Text>
                <Text>
                    {count}
                </Text>
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        top: yPosition
                    }}
                >
                    <Button onPress={() => navigate('Detail')} title='Add Details' />
                </Animated.View>
            </View>
        );
    }
}

export default HomeScreen;
