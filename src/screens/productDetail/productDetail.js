import {Button, SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

const productDetail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Detail</Text>
        <Button
          title="Go back to categories"
          onPress={() => navigation.navigate('categories')}
        />
      </View>
    </SafeAreaView>
  );
};

export default productDetail;
