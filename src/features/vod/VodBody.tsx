import React from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

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
      {categories.length && (
        <TouchableOpacity>
          <Text>{categories[0].name}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'flex-end',
  },
  list: {},
});
