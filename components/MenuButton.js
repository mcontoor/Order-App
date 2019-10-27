import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MenuButton = props => {
    return (
        <TouchableOpacity
            style={{ ...styles.button, ...props.style }}
            onPress={props.onPress}
        >
            <Text numberOfLines={3} style={styles.text}>{props.data.name}</Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        borderRadius: 6,
        height: 70,
        marginVertical: 3,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
    },
    text: {
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});

export default MenuButton;