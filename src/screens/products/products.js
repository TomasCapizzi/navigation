import {FlatList, SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  filterProduct,
  selectProduct,
} from '../../store/actions/products.action';
import {useDispatch, useSelector} from 'react-redux';

import ProductItem from '../../components/ProductItem/ProductItem';
import {productsList} from '../../utils/data/productsList';
import styles from './styles';

export default function products({navigation, route}) {
  const dispatch = useDispatch();
  const categoryItems = useSelector(state => state.products.filteredProducts);
  const category = useSelector(state => state.categories.selected);

  useEffect(()=>{
    dispatch(filterProduct(category.id))
  },[])

  const handleSelectedProduct = item => {
    dispatch(selectProduct(item.id))
    navigation.navigate('detail', {name: item.title});
  };

  const renderProduct = ({item}) => {
    return <ProductItem item={item} onSelect={handleSelectedProduct} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={categoryItems}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
