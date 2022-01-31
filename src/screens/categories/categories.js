import {FlatList, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CategoryItem from '../../components/Categories/CategoryItem';
import React from 'react';
import {selectCategory} from '../../store/actions/category.action';
import styles from './styles';

//import {categoryData} from '../../utils/data/categoryData';

export default function categories({navigation}) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);

  const handleSelectedCategory = item => {
    dispatch(selectCategory(item.id));
    navigation.navigate('products', {
      name: item.title, 
    });
  };

  const renderCategory = ({item}) => {
    return <CategoryItem item={item} onSelect={handleSelectedCategory} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
