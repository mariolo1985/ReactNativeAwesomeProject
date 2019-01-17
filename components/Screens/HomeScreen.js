import React, { Component } from 'react';
import {
    AppRegistry,
    Animated,
    Button,
    Text,
    View
} from 'react-native';

import { BtnLink } from '../Buttons/CustomButtons';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerRight:
            (
                <Button
                    onPress={(navigation.getParam('increaseCount'))}
                    title='+1'
                    color='#fff'
                />
            )
    })

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
                    <BtnLink text='Add Details' onBtnClick={() => navigate('Detail')} />
                    <BtnLink text='Go To Everything' onBtnClick={() => navigate('Everything')} />
                    <BtnLink text='Fetcher' onBtnClick={() => navigate('Fetch')} />
                </Animated.View>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => HomeScreen);
export default HomeScreen;
