import {Button, SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

export default function products({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Products pa</Text>
        <Button
          title="See Detail"
          onPress={() => navigation.navigate('detail')}
        />
      </View>
    </SafeAreaView>
  );
}
