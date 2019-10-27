import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListOrder = props => {
    const { data } = props;
    const date = new Date(data.startTime);
    return (
        <TouchableOpacity style={{ ...styles.column, ...props.style }} activeOpacity={props.opacity} >
            <View style={{ flex: 0.5, ...styles.cell }}>
                <Text style={styles.text}>{data.table !== null ? data.table : "NA"}</Text>
            </View>
            <View style={{ flex: 1.5, ...styles.cell }}>
                <Text style={styles.text}>{isNaN(date.getTime()) ? data.startTime : date.toLocaleTimeString('en-US')}</Text>
            </View>
            <View style={{ flex: 1, ...styles.cell }}>
                <Text style={styles.text}>{data.guestCount}</Text>
            </View>
            <View style={{ flex: 3, ...styles.cell }}>
                <Text style={styles.text}>{data.customer !== null ? data.customer.name : 'None'}</Text>
            </View>
            <View style={{ flex: 3, ...styles.cell }}>
                <Text style={styles.text}>{data.customer !== null ? data.customer.location : 'None'}</Text>
            </View>
            <View style={{ flex: 1, ...styles.cell }}>
                <Text style={styles.text}>{data.total}</Text>
            </View>
            <View style={{ flex: 1, ...styles.cell }}>
                <Text style={styles.text}>{data.subtotal}</Text>
            </View>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    column: {
        height: 50,
        // alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderRadius: 6,
        overflow: 'hidden',
        marginVertical: 3,
    },
    cell: {
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 25,
        padding: 10,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 15,
        textTransform: 'capitalize',
    }
});

export default ListOrder;