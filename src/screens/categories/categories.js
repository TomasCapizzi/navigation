import {FlatList, SafeAreaView, Text, View} from 'react-native';

import CategoryItem from '../../components/Categories/CategoryItem';
import React from 'react';
import {categoryData} from '../../utils/data/categoryData';
import styles from './styles';

export default function categories({navigation}) {
  const handleSelectedCategory = item => {
    navigation.navigate('products', {categoryId: item.id, name: item.title});
  };

  const renderCategory = ({item}) => {
    return <CategoryItem item={item} onSelect={handleSelectedCategory} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={categoryData}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
