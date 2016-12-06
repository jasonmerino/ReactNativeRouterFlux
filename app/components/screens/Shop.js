
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Screen from '../partials/Screen';
import Link from '../partials/Link';
import NavigationBarSearch from '../partials/NavigationBarSearch';
import { Actions } from 'react-native-router-flux';

class ShopScreen extends Component {

  static renderNavigationBar(props) {
    return <NavigationBarSearch renderLogo={true} />;
  }

  render() {
    return (
      <Screen>
        <Text>Shop</Text>
        <Link onPress={Actions.category}>Category</Link>
      </Screen>
    );
  }
}

export default ShopScreen;
