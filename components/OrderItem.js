import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const renderListItem = (data) => {
    return (
        <TouchableOpacity >
            <View style={styles.orderMain}>
                <Text>{data.item.qty}</Text>
                <Text>{data.item.title}</Text>
                <Text>$ {(data.item.price) * (data.item.qty)}</Text>
            </View>
            {data.item.addOn && (
                <FlatList
                    data={data.item.addOn}
                    keyExtractor={(item, index) => `${index}`}
                    listKey={`AddOn ${data.item.title}`}
                    horizontal={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.orderAddOn}>
                            <Text>{item.qty}</Text>
                            <Text>{item.title}</Text>
                            <Text>$ {(item.price) * (item.qty)}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </TouchableOpacity >
    )
};

const OrderItem = props => {
    return (
        <FlatList
            listKey="orderItems"
            data={props.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderListItem.bind(this)}
        />

    );
};

const styles = StyleSheet.create({
    orderMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#DBDBDB',
        marginVertical: 6,
        marginHorizontal: 5,
        borderRadius: 4,
        height: 24,
    },
    orderAddOn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderColor: '#DBDBDB',
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderRadius: 4,
        height: 20,
        borderWidth: 1,
        width: '80%'
    }
});

export default OrderItem;