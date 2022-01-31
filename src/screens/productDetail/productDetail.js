import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import React from 'react';
import {addCart} from '../../store/actions/cart.action';
import styles from './styles';

const productDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.selected);

  const handleCart = item => {
    dispatch(addCart(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{product.title}</Text>
        <Text>${product.precio}</Text>
        <TextInput/>
        <Button title="Comprar" onPress={() => handleCart(product)} />
        <Button
          title="Categorias"
          onPress={() => navigation.navigate('categories')}
        />
      </View>
    </SafeAreaView>
  );
};

export default productDetail;
