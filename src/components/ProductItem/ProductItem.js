import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './styles';

const ProductItem = ({item, onSelect}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(item)}>
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.text}>${item.precio}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
