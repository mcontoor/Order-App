import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const MenuButton = props => {
    return (
        <TouchableOpacity
            testID="MenuButton"
            style={{ ...styles.button, ...props.style }}
            onPress={props.onPress}
            activeOpacity={props.opacity}
        >
            <Text numberOfLines={3} style={styles.text}>{props.data}</Text>
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
        width: Dimensions.get('window').width <= 1080 ? 120 : 160,
    },
    text: {
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});

export default MenuButton;