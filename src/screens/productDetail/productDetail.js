import {Button, Image, SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

const productDetail = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{route.params.name}</Text>
        <Text>${route.params.product.precio}</Text>
        <Button
          title="Categorias"
          onPress={() => navigation.navigate('categories')}
        />
      </View>
    </SafeAreaView>
  );
};

export default productDetail;
