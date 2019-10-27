import React from 'react';
import { View, StyleSheet } from 'react-native';

const GridView = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.row}>
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
            </View>
            <View style={styles.row}>
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
            </View>
            <View style={styles.row}>
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
            </View>
            <View style={styles.row}>
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
            </View>
            <View style={styles.row}>
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
            </View>
            <View style={styles.row}>
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
            </View>
            <View style={styles.row}>
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
            </View>
            <View style={styles.row}>
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
                <View style={styles.cell} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        alignSelf: "stretch",
        marginVertical: 3,
        height: 70,
        flexDirection: 'row',
    },
    cell: {
        backgroundColor: '#DBDBDB',
        borderRadius: 6,
        height: '100%',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
    },
});

export default GridView;