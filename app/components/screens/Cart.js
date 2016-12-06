
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { navigationBarDark } from '../../styles/navigationBarStyles';
import Screen from '../partials/Screen';
import Link from '../partials/Link';
import { navigatorPush } from '../../actions/navigatorActions';

class CartScreen extends Component {

  static route = {
    navigationBar: {
      ...navigationBarDark,
      title: 'Cart',
    },
  }

  render() {
    return (
      <Screen>
        <Text>Cart</Text>
        <Link onPress={() => {}}>Product</Link>
      </Screen>
    );
  }
}

const componentStyles = StyleSheet.create({
  selectedTab: {
    color: 'blue',
  },
});

export default CartScreen;
