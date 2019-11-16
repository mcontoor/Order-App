import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MenuButton from './MenuButton';

const createGrid = (row, col) => {
    if (!col) {
        col = 1;
    }
    let rows = [];
    for (let i = 0; i < row; i++) {
        let children = [];
        for (let j = 0; j < col; j++) {
            children.push(<MenuButton style={styles.cell} opacity={1} />)
        }
        rows.push(<View style={styles.row}>{children.map(x => x)}</View>)
    }
    return rows;
}

const GridView = (props) => {
    const { row, col } = props;
    return (
        <View style={styles.screen}>
            {createGrid(row, col)}
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
        width: Dimensions.get('window').width <= 1080 ? 120 : 160,
    },
});

export default GridView;