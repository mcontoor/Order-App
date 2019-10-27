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
  Button
} from 'react-native';
import OrdersNavigator from './navigation/OrdersNavigation'
const App = () => {
  return (
    <OrdersNavigator />
  );
};

export default App;
