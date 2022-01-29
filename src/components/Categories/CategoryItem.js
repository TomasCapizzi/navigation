import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './style';

const CategoryItem = ({item, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => onSelect(item)}>
        <View>
          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
