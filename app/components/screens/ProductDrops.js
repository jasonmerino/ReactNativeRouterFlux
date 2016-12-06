
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Screen from '../partials/Screen';
import Link from '../partials/Link';
import { Actions } from 'react-native-router-flux';

class ProductDropsScreen extends Component {

  static route = {
    navigationBar: {
      renderTitle({ params }) {
        return (
          <NavigationBarSearch
            showNavigationBarSearch={params.showNavigationBarSearch}
            keyword={params.keyword}
          />
        );
      }
    }
  }

  render() {
    return (
      <Screen>
        <Text>Product Drops</Text>
        <Link onPress={Actions.productDropFilters}>Filter</Link>
        <Link onPress={Actions.product}>Product</Link>
      </Screen>
    );
  }
}

export default ProductDropsScreen;
