import {FlatList, SafeAreaView, View} from 'react-native';

import ProductItem from '../../components/ProductItem/ProductItem';
import React from 'react';
import {productsList} from '../../utils/data/productsList';
import styles from './styles';

export default function products({navigation, route}) {
  const list = productsList.filter(
    product => product.category === route.params.categoryId, //navigation.getParam('categoryId')
  );

  const handleSelectedProduct = item => {
    navigation.navigate('detail', {
      productId: item.id,
      name: item.title,
      product: item
    });
  };

  const renderProduct = ({item}) => {
    return <ProductItem item={item} onSelect={handleSelectedProduct}/>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={list}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
