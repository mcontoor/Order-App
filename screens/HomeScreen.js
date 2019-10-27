import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Orders</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="New Order"
          onPress={() => {
            props.navigation.navigate('CreateOrder')
          }} />
        <Button
          style={styles.button}
          title="View All Orders"
          onPress={() => {
            props.navigation.navigate('OrdersList')
          }} />
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: 'Home'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEBEB',
  },
  buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  button: {
    marginHorizontal: 50,
    width: 200,
    color: 'yellow'
  }
});

export default HomeScreen;