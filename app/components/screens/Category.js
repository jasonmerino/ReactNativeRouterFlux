
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Screen from '../partials/Screen';
import Link from '../partials/Link';
import NavigationBarSearch from '../partials/NavigationBarSearch';
import { Actions } from 'react-native-router-flux';

class CategoryScreen extends Component {

  static route = {
    navigationBar: {
      renderTitle() {
        return (
          <NavigationBarSearch />
        );
      }
    }
  }

  render() {
    return (
      <Screen>
        <Text>Category</Text>
        <Link
          onPress={() => {
            Actions.productDrops();
            // this.props.navigator.push(router.getRoute('productDrops', {
            //   showNavigationBarSearch: false,
            // }));
          }}
        >
          Browse Product Drops
        </Link>
        <Link
          onPress={() => {
            Actions.productDrops();
            // navigatorPush(router.getRoute('productDrops', {
            //   keyword: 'keyword searched for' ,
            // }));
          }}
        >
          Search Product Drops
        </Link>
      </Screen>
    );
  }
}

export default CategoryScreen;
