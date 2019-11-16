import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ListOrderHeader = props => {
    const { data } = props;
    const date = new Date(data.startTime);
    return (
        <TouchableOpacity style={{ ...styles.column, ...props.style }} activeOpacity={props.opacity} >
            <View style={{
                ...styles.cell,
                flex: Dimensions.get('window').width <= 1080 ? 1 : 0.6,
                paddingVertical: 0,
                marginVertical: 10,
            }}>
                <Text style={{ ...styles.text }}>{data.table !== null ? data.table : "NA"}</Text>
            </View>
            {Dimensions.get('window').width > 1080 &&
                <View style={{ flex: 1.5, ...styles.cell }}>
                    <Text style={styles.text}>{isNaN(date.getTime()) ? data.startTime : date.toLocaleTimeString('en-US')}</Text>
                </View>}
            {Dimensions.get('window').width > 1080 &&
                <View style={{ flex: 1, ...styles.cell }}>
                    <Text style={styles.text}>{data.guestCount}</Text>
                </View>}
            <View style={{ flex: 3, ...styles.cell }}>
                <Text style={styles.text}>{data.customer !== null ? data.customer.name : 'None'}</Text>
            </View>
            {Dimensions.get('window').width > 1080 &&
                <View style={{ flex: 3, ...styles.cell }}>
                    <Text style={styles.text}>{data.customer !== null ? data.customer.location : 'None'}</Text>
                </View>}
            <View style={{ flex: 1, ...styles.cell }}>
                <Text style={styles.text}>{data.total}</Text>
            </View>
            {Dimensions.get('window').width > 1080 &&
                <View style={{ flex: 1, ...styles.cell }}>
                    <Text style={styles.text}>{data.subtotal}</Text>
                </View>}
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    column: {
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginHorizontal: Dimensions.get('window').width <= 1080 ? 10 : 30,
        borderRadius: 6,
        overflow: 'hidden',
        marginVertical: 3,
    },
    cell: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 25,
        padding: 10,
        paddingHorizontal: Dimensions.get('window').width <= 1080 ? 10 : 20,
    },
    text: {
        fontSize: 17,
        textTransform: 'capitalize',
        textAlign: Dimensions.get('window').width <= 1080 ? 'center' : 'auto',
        color: 'gray',
        fontWeight: 'bold',
    }
});

export default ListOrderHeader;