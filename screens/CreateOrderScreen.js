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
  Dimensions,
  Button
} from 'react-native';
import OrderSummary from '../components/OrderSummary';
import Menu from '../components/Menu';

const CreateOrderScreen = (props) => {

  const [orderItems, setOrderItems] = useState([]);
  const [showOrder, setShowOrder] = useState(false);


  const addToOrder = (item) => {
    const { categoryName, name, productPricings } = item;
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
        <View style={
          Dimensions.get('window').width <= 1080 ? (showOrder ? styles.orderScreenPhone : '') : styles.orderScreen}>
          <OrderSummary
            style={
              Dimensions.get('window').width <= 1080 ? (showOrder ? styles.orderScreenPhone : '') : styles.orderScreen}
            data={orderItems}
            onPress={setShowOrder} />
        </View>
        <View style={Dimensions.get('window').width <= 1080 ?
          (showOrder ? { display: 'none' } : styles.wrapper) : styles.orderOptions}>
          {Dimensions.get('window').width <= 1080 &&
            <Button
              title="Show Order"
              onPress={() => { setShowOrder(!showOrder) }} />}
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
  rest: {
    flex: 1,
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
  orderScreenPhone: {
    ...StyleSheet.absoluteFill,
    margin: 10,
    borderRadius: 20,
    flexDirection: 'column',
  },
  orderOptionsPhone: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
  },
  viewPager: {
    flex: 1,
  },
  wrapper: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#EAEBEB',
  },
  button: {
    position: 'absolute',
    bottom: 0,
  }
});

CreateOrderScreen.navigationOptions = {
  headerTitle: 'Create Order'
}

export default CreateOrderScreen;
