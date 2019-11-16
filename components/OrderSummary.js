import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native';
import OrderItem from '../components/OrderItem';
import MenuButton from './MenuButton';

class OrderSummary extends PureComponent {

    renderOrderItem = (itemData) => {
        <View style={{ flex: 1 }}>
            <View style={styles.orderTitle}>{itemData.item.orderNum}
            </View>
            <View style={styles.orderList}>
            </View>
            <View style={styles.buttonContainer}></View>
            <View style={styles.orderPrice}></View>
            <View style={styles.buttonContainer}></View>
        </View >
    };

    render() {
        const { data } = this.props;
        return (
            <View style={{ ...this.props.style, ...styles.screen }}>
                <View style={styles.orderTitle}>
                    <Button
                        style={styles.button}
                        title="300" />
                    <Text>Order#1</Text>
                    <Button title="In" />
                </View>
                <View style={styles.orderList}>
                    <OrderItem data={data} />
                </View>
                <View style={styles.buttonContainer}></View>
                <View style={styles.orderPrice}></View>
                <View style={styles.buttonContainer}>
                    <MenuButton
                        data={'Pay Now'}
                        onPress={() => console.log('create order in gql')}
                    />
                    <MenuButton data={'Send KOT'} />
                </View>
                {/* {Dimensions.get('window').width <= 1080 &&
                    <Button
                        style={styles.button}
                        title="Display Menu"
                        onPress={this.props.onPress} />} */}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    screen: {
        // flex: 1
    },
    orderTitle: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 6,
        paddingLeft: 15,
        paddingRight: 15,
    },
    orderList: {
        flex: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    orderPrice: {
        flex: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 6,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        height: 5,
    },
});

export default OrderSummary;