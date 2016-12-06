
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Screen from '../partials/Screen';
import { navigationBarDark } from '../../styles/navigationBarStyles';

class ProductScreen extends Component {

  static route = {
    navigationBar: {
      ...navigationBarDark
    }
  }

  render() {
    return (
      <Screen>
        <Text>Product</Text>
      </Screen>
    );
  }
}

const componentStyles = StyleSheet.create({
  selectedTab: {
    color: 'blue',
  },
});

export default ProductScreen;
