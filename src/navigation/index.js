import CartNavigation from './cart/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ShopNavigation from './shop/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="shop"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <BottomTab.Screen
          name="shop"
          component={ShopNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'md-home' : 'md-home-outline'}
                size={24}
                color={'black'}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="cart"
          component={CartNavigation}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name={focused ? 'md-cart' : 'md-cart-outline'}
                size={24}
                color={'black'}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
