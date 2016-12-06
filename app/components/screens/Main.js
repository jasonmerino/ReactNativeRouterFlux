
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from '../../reducers';

import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../styles/colors';
import TabBarTitle from '../partials/TabBarTitle';
import { navigationBarDark } from '../../styles/navigationBarStyles';
import { navigatorPush } from '../../actions/navigatorActions';

const defaultRouteConfig = {
  navigationBar: {
    ...navigationBarDark,
  }
};

function getColor(isSelected) {
  return isSelected ? colors.primary : colors.secondary;
}

class MainScreen extends Component {

  render() {
    return (
      <View />
    );
  }
}

export default MainScreen;
