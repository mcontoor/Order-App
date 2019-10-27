import react from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CreateOrderScreen from '../screens/CreateOrderScreen';
import OrdersList from '../screens/OrdersList';

const OrdersNavigator = createStackNavigator({
    OrdersList: {
        screen: OrdersList,
    },
    CreateOrder: {
        screen: CreateOrderScreen,
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
            height: 80,
        },
        headerTitleContainerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30
        },
    }
});

export default createAppContainer(OrdersNavigator);