import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  item: {};
}

export default function VodCategory({item}) {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
