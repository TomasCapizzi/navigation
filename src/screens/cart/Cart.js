import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import CartItem from '../../components/CartItem/CartItem';
import React from 'react';
import styles from './styles';
import {useSelector} from 'react-redux';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.selected)

  const confirmPurchase = () => {
    console.warn('Compra confirmada', cartItems);
  };

  const onDelete = id => {
    console.warn('Eliminar item', id);
  };

  const renderCart = ({item}) => {
    <CartItem item={item} onDelete={onDelete} />;
  };

  return (
    <View style={styles.container}>
      <Text>Tus elementos seleccionados</Text>
      <View style={styles.list}>
        <Text>Listado</Text>
        <FlatList
          data={cartItems}
          renderItem={renderCart}
          keyExtractor={item => item.id}
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => confirmPurchase()}>
          <Text>Confirm</Text>
          <View>
            <Text>Total: 100</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
