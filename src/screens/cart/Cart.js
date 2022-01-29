import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import CartItem from '../../components/CartItem/CartItem';
import React from 'react';
import {cartFake} from '../../utils/data/cartFake';
import styles from './styles';

export default function Cart() {
  const items = cartFake;

  const total = items.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0,
  );

  const confirmPurchase = () => {
    console.warn('Compra confirmada');
  };

  const onDelete = id => {
    console.warn('Eliminar item', id);
  };

  const renderCart = data => {
    <CartItem item={data.item} onDelete={onDelete} />;
  };

  return (
    <View style={styles.container}>
      <Text>Tus elementos seleccionados</Text>
      <View style={styles.list}>
        <Text>Listado</Text>
        <FlatList
          data={items}
          renderItem={renderCart}
          keyExtractor={item => item.id}
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => confirmPurchase()}>
          <Text>Confirm</Text>
          <View>
            <Text>Total: ${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
