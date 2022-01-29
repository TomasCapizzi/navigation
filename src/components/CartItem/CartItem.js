import {Text, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons';
import React from 'react';
import styles from './styles';

function CartItem({item, onDelete}){

  console.warn(item);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <View>
        <Text>Cantidad: {item.cantidad}</Text>
        <Text>${item.precio}</Text>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;