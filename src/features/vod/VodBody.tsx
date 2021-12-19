import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import VodCategory from './VodCategory';

interface category {
  name: string;
  id: string;
}

interface state {
  vod: {
    categories: category[];
    loading: boolean;
  };
}

export default function VodBody() {
  const {categories} = useSelector((state: state) => state.vod);

  return (
    <View style={styles.mainContainer}>
      {categories.length ? <VodCategory item={categories[0]} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'flex-end',
  },
  list: {},
});
