/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import OrderSummary from '../components/OrderSummary';
import Menu from '../components/Menu';
import OrderItem from '../components/OrderItem';
import GridView from '../components/GridView';

const CreateOrderScreen = (props) => {

  const [orderItems, setOrderItems] = useState([]);


  const addToOrder = (item) => {
    const { categoryName, name, productPricings } = item;
    console.log(categoryName !== "Modifiers");
    let orderProduct = {
      qty: 1,
      title: name,
      price: Number(productPricings[0].sellingPrice),
    };

    let repeatOrder = orderItems.filter(x => x.title === orderProduct.title);

    if ((categoryName !== "Modifiers")) {
      if (repeatOrder.length) {
        orderProduct = repeatOrder[0];
        orderProduct.qty = orderProduct.qty + 1;
        let index = orderItems.findIndex(x => x.title === orderProduct.title);
        orderItems.splice(index, 1, orderProduct);
        setOrderItems([...orderItems]);
      } else {
        setOrderItems([...orderItems, orderProduct]);
      };
    } else {
      if (orderItems.length) {
        let parentProduct = orderItems[orderItems.length - 1];
        if (parentProduct.addOn) {
          parentProduct.addOn.push(orderProduct)
        } else {
          parentProduct.addOn = new Array(orderProduct);
        };
        setOrderItems([...orderItems]);
      }
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.rest}>
        <OrderSummary style={styles.orderScreen} data={orderItems} />
        <View style={styles.orderOptions}>
          <Menu onAddItem={addToOrder} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EAEBEB',
  },
  header: {
    flex: 2,
  },
  rest: {
    flex: 8,
    flexDirection: 'row',
  },
  orderScreen: {
    flex: 2,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'column',
  },
  orderOptions: {
    flex: 5,
    margin: 10,
    borderRadius: 20,
  },
});

CreateOrderScreen.navigationOptions = {
  headerTitle: 'Create Order'
}

export default CreateOrderScreen;
