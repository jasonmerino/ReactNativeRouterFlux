
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { Scene, Router, Actions, Modal } from 'react-native-router-flux';
import Tabs from 'react-native-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import store from '../reducers';
import colors from '../styles/colors';

import Main from '../components/screens/Main';
import Category from '../components/screens/Category';
import ProductDrops from '../components/screens/ProductDrops';
import ProductDropFilters from '../components/screens/ProductDropFilters';
import Product from '../components/screens/Product';
import Shop from '../components/screens/Shop';
import Experts from '../components/screens/Experts';
import Cart from '../components/screens/Cart';
import More from '../components/screens/More';

class TabIcon extends React.Component {
  render(){
    return (
      <Text>{this.props.title}</Text>
    );
  }
}

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router
          navigationBarStyle={componentStyles.navigationBar}
          titleStyle={componentStyles.leftButtonTextStyle}
          backButtonStyle={componentStyles.backButtonStyle}
          renderBackButton={() => <Icon name="ios-arrow-back" size={28} color="white" />}
        >
          <Scene
            key="modal"
            component={Modal}
          >
            <Scene key="root">
              <Scene
                key="tabBar"
                hideNavBar={true}
                tabs={true}
                tabBarStyle={componentStyles.tabBarStyle}
              >
                <Scene
                  key="shopTab"
                  title="Shop"
                  icon={TabIcon}
                >
                  <Scene
                    key="shop"
                    component={Shop}
                    title="Shop"
                  />
                  <Scene
                    key="category"
                    component={Category}
                    title="Category"
                  />
                  <Scene
                    key="productDrops"
                    component={ProductDrops}
                    title="Product Drops"
                  />
                  <Scene
                    key="product"
                    component={Product}
                    title="Product"
                    hideTabBar={true}
                  />
                </Scene>

                <Scene
                  key="expertsTab"
                  title="Experts"
                  icon={TabIcon}
                >
                  <Scene
                    key="experts"
                    component={Experts}
                    title="Experts"
                  />
                </Scene>

                <Scene
                  key="cartTab"
                  title="Cart"
                  component={Cart}
                  icon={TabIcon}
                />

                <Scene
                  key="moreTab"
                  title="More"
                  icon={TabIcon}
                >
                  <Scene
                    key="more"
                    component={More}
                    title="More"
                  />
                </Scene>

              </Scene>
              <Scene
                key="productDropFilters"
                component={ProductDropFilters}
                title="Filters"
                hideNavBar={false}
              />
              <Scene
                key="cart"
                component={Cart}
                title="Cart"
                hideNavBar={false}
              />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const componentStyles = StyleSheet.create({
  tabBarStyle: {
      borderTopWidth : .5,
      borderColor    : '#b7b7b7',
      backgroundColor: 'white',
      opacity        : 1
  },
  navigationBar: {
    backgroundColor: colors.secondary,
  },
  backButtonStyle: {
    color: '#fff',
    width: 40,
  },
  leftButtonTextStyle: {
    color: '#fff',
  },
});

export default App;
