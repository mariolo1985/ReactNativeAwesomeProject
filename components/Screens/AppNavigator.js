import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import EverythingScreen from './EverythingScreen';
import FetchScreen from './FetchScreen';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Detail: {
            screen: DetailScreen
        },
        Everything: {
            screen: EverythingScreen
        },
        Fetch: {
            screen: FetchScreen
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#4f5d82'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
);

export default createAppContainer(AppNavigator);
