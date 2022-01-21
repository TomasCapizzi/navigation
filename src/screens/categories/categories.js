import {Button, SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

export default function categories({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Categorias pa</Text>
        <Button
          title="See Products"
          onPress={() => navigation.navigate('products')}
        />
      </View>
    </SafeAreaView>
  );
}
