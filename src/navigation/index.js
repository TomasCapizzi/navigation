import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import categories from '../screens/categories/categories';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import productDetail from '../screens/productDetail/productDetail';
import products from '../screens/products/products';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="categories" component={categories} />
        <Stack.Screen name="products" component={products} />
        <Stack.Screen name="detail" component={productDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
