import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getOrders } from '../services/apiservice';
import ListOrder from '../components/ListOrder';
import MenuButton from '../components/MenuButton';

class OrdersList extends Component {
    state = {
        orders: { data: [] },
        hasDataLoaded: false,
        noOfDisplayItems: 7,
        increment: 7,
    }

    static navigationOptions = {
        title: 'POC Orders screen',
    };

    componentDidMount() {
        getOrders().then((data) => {
            this.setState({
                orders: data,
                hasDataLoaded: true,
            });
        });
    };

    onPressNext = () => {
        let { noOfDisplayItems, increment } = this.state;
        this.setState({
            noOfDisplayItems: (noOfDisplayItems + increment)
        });
    };

    onPressBack = () => {
        let { noOfDisplayItems, increment } = this.state;
        if (noOfDisplayItems > increment) {
            this.setState({
                noOfDisplayItems: (noOfDisplayItems - increment)
            });
        };
    };


    render() {
        const { data } = this.state.orders;
        const { hasDataLoaded, noOfDisplayItems, increment } = this.state;
        let displayedData;
        if (data.length) {
            displayedData = data.slice((noOfDisplayItems - increment), noOfDisplayItems);
        }
        return (
            <View style={styles.screen}>
                <View style={styles.headerContainer}>
                    <ListOrder data={{
                        table: 'Table',
                        startTime: 'Since',
                        guestCount: 'Pax',
                        customer: { name: 'Customer', location: 'Loyalty' },
                        total: 'Spend',
                        subtotal: 'Course',
                    }}
                        opacity={1}
                        style={{ height: 40 }}
                    />
                </View>
                {hasDataLoaded ? (
                    <View style={styles.orderListContainer}>
                        {displayedData.map((data) => (
                            <ListOrder data={data} style={{ height: 60 }} />
                        ))}
                        <View style={styles.ButtonContainer}>
                            <MenuButton data={{ name: 'Back' }} style={styles.btnStyle} onPress={() => { this.onPressBack() }} />
                            <MenuButton data={{ name: 'Next' }} style={styles.btnStyle} onPress={() => { this.onPressNext() }} />
                        </View>
                    </View>
                ) : (
                        <View style={styles.orderListContainer}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                    )
                }
                <View style={styles.createOrderButton}>
                    <TouchableOpacity
                        style={styles.button}
                        title="+"
                        onPress={() => {
                            this.props.navigation.navigate('CreateOrder')
                        }}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#EAEBEB',
    },
    headerContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        alignItems: 'center',
    },
    orderListContainer: {
        flex: 7,
        alignItems: 'stretch',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        marginVertical: 6,
    },
    createOrderButton: {
        position: 'absolute',
        bottom: 15,
    },
    button: {
        backgroundColor: '#2b2423',
        borderRadius: 70,
        height: 60,
        marginVertical: 3,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        elevation: 5,
    },
    btnText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 4,
    },
    ButtonContainer: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 3,
        paddingHorizontal: 20,
    },
    btnStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default OrdersList;