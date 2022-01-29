import {Platform} from 'react-native';
import React from 'react';
import categories from '../../screens/categories/categories';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import productDetail from '../../screens/productDetail/productDetail';
import products from '../../screens/products/products';
import theme from '../../utils/constants/theme';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? theme.c4 : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? theme.c1 : '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="categories" component={categories} />
      <Stack.Screen
        name="products"
        component={products}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="detail"
        component={productDetail}
        options={{title: 'Detail'}}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
