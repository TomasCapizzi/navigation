import Cart from '../../screens/cart/Cart';
import {Platform} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '../../utils/constants/theme';

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
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
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigation;