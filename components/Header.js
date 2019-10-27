import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
    return (
        <View style={{ ...props.style, ...styles.headerContainer }}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        marginBottom: 10,
    },
    text: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default Header;