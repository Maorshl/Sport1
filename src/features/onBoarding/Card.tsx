import React from 'react';
import {Button, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  item: {title: string; text: string; image: string};
  index: number;
}

export default function Card({item, index}) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button title="דלג" />
        <Image source={item.image} height={1} />
        <Text>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#edeef0',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
